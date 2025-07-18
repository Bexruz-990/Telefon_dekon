import {
  Injectable,
  UnauthorizedException,
  BadRequestException,
  ForbiddenException,
  InternalServerErrorException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { EmailService } from './email/email.service';
import { User } from './entity/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Response } from 'express';

@Injectable()
export class AuthService {
  // pendingUsers ni sinf ichida e’lon qilamiz
  private readonly pendingUsers = new Map<string, { email: string; name: string; password: string; otp: string }>();

  constructor(
    private jwtService: JwtService,
    private emailService: EmailService,
    @InjectRepository(User)
    private userRepo: Repository<User>,
  ) {}

  async register(dto: RegisterDto) {
    const existing = await this.userRepo.findOne({ where: { email: dto.email } });
    if (existing) throw new BadRequestException('Email band');

    if (this.pendingUsers.has(dto.email)) {
      throw new BadRequestException('Bu emailga allaqachon kod yuborilgan');
    }

    const hashedPassword = await bcrypt.hash(dto.password, 10);
    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    this.pendingUsers.set(dto.email, {
      ...dto,
      password: hashedPassword,
      otp,
    });

    await this.emailService.sendOtp(dto.email, otp);
    return { message: 'Tasdiqlash kodi emailga yuborildi' };
  }

  async verifyOtp(email: string, otp: string): Promise<any> {
    const data = this.pendingUsers.get(email);
    if (!data || data.otp !== otp) {
      throw new BadRequestException('Noto‘g‘ri kod yoki email');
    }

    const user = this.userRepo.create({
      email: data.email,
      name: data.name,
      password: data.password,
      isVerified: true,
      role: 'user',
    });

    await this.userRepo.save(user);
    this.pendingUsers.delete(email);

    return { message: 'Email muvaffaqiyatli tasdiqlandi ✅' };
  }

  async login(dto: LoginDto, res: Response) {
    try {
      console.log('Login request received with DTO:', dto);
      const user = await this.userRepo.findOne({ where: { email: dto.email.toLowerCase() } });
      console.log('User found in database:', user);
  
      if (!user || !(await bcrypt.compare(dto.password, user.password))) {
        console.log('Authentication failed: User not found or password mismatch');
        throw new UnauthorizedException('Email yoki parol noto‘g‘ri');
      }
  
      if (!user.isVerified) {
        console.log('Verification failed: User email is not verified');
        throw new ForbiddenException('Email tasdiqlanmagan');
      }
  
      console.log('Generating tokens for user:', user.email);
      const payload = { sub: user.id, email: user.email, role: user.role };
      const accessToken = await this.jwtService.signAsync(payload, { expiresIn: '15m' });
      const refreshToken = await this.jwtService.signAsync(payload, { expiresIn: '7d' });
  
      console.log('Tokens generated - Access Token:', accessToken.substring(0, 20) + '...', 'Refresh Token:', refreshToken.substring(0, 20) + '...');
      res.cookie('accessToken', accessToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 15 * 60 * 1000, // 15 minutes
      });
  
      res.cookie('refreshToken', refreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
      });
  
      console.log('Cookies set successfully');
      user.refreshToken = refreshToken;
      await this.userRepo.save(user);
      console.log('User data saved with refresh token');
  
      const response = {
        id: user.id,
        email: user.email,
        username: user.name,
        role: user.role,
        access_token: accessToken,
        refresh_token: refreshToken,
      };
      console.log('Login successful, response:', response);
  
      return response;
    } catch (error) {
      console.error('Login error occurred:', error.message);
      throw new InternalServerErrorException('Tizimga kirishda xatolik: ' + error.message);
    }
  }

  logout(res: Response) {
    res.clearCookie('accessToken');
    res.clearCookie('refreshToken');
    return { message: 'Tizimdan chiqdingiz 🔓' };
  }
}