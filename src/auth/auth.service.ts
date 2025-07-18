import {
  Injectable,
  UnauthorizedException,
  BadRequestException,
  ForbiddenException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UsersService } from '../users/user.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { EmailService } from './email/email.service';
import { User } from '../users/entity/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Response } from 'express';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private emailService: EmailService,
    @InjectRepository(User)
    private userRepo: Repository<User>,
  ) {}

  
  async register(dto: RegisterDto) {
    const pendingUsers = new Map<string, any>();
    const existing = await this.usersService.findByEmail(dto.email);
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
    return { message: 'Emailga tasdiqlash kodi yuborildi' };
  }

  async verifyOtp(email: string, otp: string) {
    const pendingUsers = new Map<string, any>();
    const data = pendingUsers.get(email);
    if (!data || data.otp !== otp) {
      throw new BadRequestException('Noto‘g‘ri kod yoki email');
    }

    // Bazaga saqlaymiz
    const user = this.userRepo.create({
      ...data,
      isVerified: true,
    });
    await this.userRepo.save(user);

    pendingUsers.delete(email);

    return { message: 'Email tasdiqlandi ✅' };
  }

  async login(dto: LoginDto, res: Response) {
    const user = await this.usersService.findByEmail(dto.email);
    if (!user) throw new UnauthorizedException('Login yoki parol noto‘g‘ri');

    if (!user.isVerified) throw new ForbiddenException('Email tasdiqlanmagan');

    const isPasswordValid = await bcrypt.compare(dto.password, user.password);
    if (!isPasswordValid) throw new UnauthorizedException('Login yoki parol noto‘g‘ri');

    const payload = { sub: user.id, email: user.email };
    const token = this.jwtService.sign(payload);

    res.cookie('access_token', token, {
      httpOnly: true,
      sameSite: 'lax',
      maxAge: 1000 * 60 * 60 * 24 * 7, // 7 kun
    });

    return { message: 'Tizimga kirdingiz ✅' };
  }

  logout(res: Response) {
    res.clearCookie('access_token');
    return { message: 'Tizimdan chiqdingiz 🔓' };
  }
}
