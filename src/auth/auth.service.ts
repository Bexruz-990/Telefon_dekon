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

const pendingUsers = new Map<string, any>();

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private emailService: EmailService,
    @InjectRepository(User)
    private userRepo: Repository<User>,
  ) {}

  async register(dto: RegisterDto) {
    const existing = await this.userRepo.findOne({ where: { email: dto.email } });
    if (existing) throw new BadRequestException('Email band');

    if (pendingUsers.has(dto.email)) {
      throw new BadRequestException('Bu emailga allaqachon kod yuborilgan');
    }

    const hashedPassword = await bcrypt.hash(dto.password, 10);
    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    pendingUsers.set(dto.email, {
      ...dto,
      password: hashedPassword,
      otp,
    });

    await this.emailService.sendOtp(dto.email, otp);
    return { message: 'Tasdiqlash kodi emailga yuborildi' };
  }

  async verifyOtp(email: string, otp: string) {
    const data = pendingUsers.get(email);
    if (!data || data.otp !== otp) {
      throw new BadRequestException('Noto‘g‘ri kod yoki email');
    }

    const user = this.userRepo.create({
      email: data.email,
      name: data.name, // MUHIM: name ni qo‘shish kerak
      password: data.password,
      isVerified: true,
      role: 'user',
    });

    await this.userRepo.save(user);
    pendingUsers.delete(email);

    return { message: 'Email muvaffaqiyatli tasdiqlandi ✅' };
  }

  async login(dto: LoginDto, res: Response) {
    try {
      const user = await this.userRepo.findOne({ where: { email: dto.email } });
      if (!user || !(await bcrypt.compare(dto.password, user.password))) {
        throw new UnauthorizedException('Email yoki parol noto‘g‘ri');
      }

      if (!user.isVerified) throw new ForbiddenException('Email tasdiqlanmagan');

      const payload = { sub: user.id, email: user.email, role: user.role };
      const accessToken = await this.jwtService.signAsync(payload, { expiresIn: '15m' });
      const refreshToken = await this.jwtService.signAsync(payload, { expiresIn: '7d' });

      res.cookie('accessToken', accessToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 15 * 60 * 1000, // 15 minutes
      });

      res.cookie('refreshToken', refreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 7 * 24 * 60 * 60 * 1000, 
      });

      user.refreshToken = refreshToken;
      await this.userRepo.save(user);

      return {
        id: user.id,
        email: user.email,
        username: user.name,
        role: user.role,
        access_token: accessToken,
        refresh_token: refreshToken,
      };
    } catch (error) {
      throw new InternalServerErrorException('Tizimga kirishda xatolik: ' + error.message);
    }
  }

  logout(res: Response) {
    res.clearCookie('accessToken');
    res.clearCookie('refreshToken');
    return { message: 'Tizimdan chiqdingiz 🔓' };
  }
}
