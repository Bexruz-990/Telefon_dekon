import {
  Injectable,
  UnauthorizedException,
  BadRequestException,
  ForbiddenException,
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

const pendingUsers = new Map<string, any>(); // Global holatda bo'lishi kerak

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
      password: data.password,
      isVerified: true,
      role: 'user', // Agar rol bo‘lsa default bering
    });

    await this.userRepo.save(user);
    pendingUsers.delete(email);

    return { message: 'Email muvaffaqiyatli tasdiqlandi ✅' };
  }

  async login(dto: LoginDto, res: Response) {
    const user = await this.userRepo.findOne({ where: { email: dto.email } });
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

    return { message: 'Tizimga muvaffaqiyatli kirdingiz ✅' };
  }

  logout(res: Response) {
    res.clearCookie('access_token');
    return { message: 'Tizimdan chiqdingiz 🔓' };
  }
}
