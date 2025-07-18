import {
  Controller,
  Post,
  Body,
  Res,
  Query,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  register(@Query() dto: RegisterDto) {
    return this.authService.register(dto);
  }

  @Post('verify')
  verify(@Query('email') email: string, @Query('otp') otp: string) {
    return this.authService.verifyOtp(email, otp);
  }

  @Post('login')
  login(@Body() dto: LoginDto, @Res() res: Response) {
    return this.authService.login(dto, res);
  }

  @Post('logout')
  logout(@Res() res: Response) {
    return this.authService.logout(res);
  }
}
