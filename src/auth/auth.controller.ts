import {
  Controller,
  Post,
  Body,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { Response } from 'express';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { VerifyOtpDto } from './dto/verify.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  register(@Body() dto: RegisterDto) {
    return this.authService.register(dto);
  }

  @Post('verify')
  @ApiOperation({ summary: 'OTP kodni tasdiqlash' })
  @ApiResponse({ status: 200, description: 'OTP muvaffaqiyatli tasdiqlandi' })
  @ApiResponse({ status: 400, description: 'Noto‘g‘ri OTP yoki email' })
  verify(@Body() verifyOtpDto: VerifyOtpDto) {
    return this.authService.verifyOtp(verifyOtpDto.email, verifyOtpDto.otp);
  }
  
  @Post('login')
  @ApiOperation({ summary: 'Foydalanuvchi tizimga kirishi' })
  @ApiResponse({ status: 200, description: 'Muvaffaqiyatli kirish' })
  @ApiResponse({ status: 401, description: 'Email yoki parol noto‘g‘ri' })
  @ApiResponse({ status: 403, description: 'Email tasdiqlanmagan' })
  async login(@Body() loginDto: LoginDto, @Res() res: Response) {
    const result = await this.authService.login(loginDto, res);
    return res.status(HttpStatus.OK).json(result);
  }

  @Post('logout')
  logout(@Res() res: Response) {
    return this.authService.logout(res);
  }
}
