import {
  Controller,
  Post,
  Body,
  Res,
  HttpStatus,
  Get,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { Response } from 'express';
import { ApiBearerAuth, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { VerifyOtpDto } from './dto/verify.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Roles } from './decorators/roles.decorator';
import { Public } from './decorators/public.decarator';


@Controller('auth')
@ApiBearerAuth('access-token')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @ApiOperation({ summary: 'Registratsiya qilish' })
  @Public()
  @ApiResponse({ status: 200, description: 'Registratsiya muvaffaqiyatli tasdiqlandi' })
  @Post('register')
  register(@Body() dto: RegisterDto) {
    return this.authService.register(dto);
  }
  @Public()
  @Post('verify')
  @ApiOperation({ summary: 'OTP kodni tasdiqlash' })
  @ApiResponse({ status: 200, description: 'OTP muvaffaqiyatli tasdiqlandi' })
  @ApiResponse({ status: 400, description: 'Noto‘g‘ri OTP yoki email' })
  verify(@Body() verifyOtpDto: VerifyOtpDto) {
    return this.authService.verifyOtp(verifyOtpDto.email, verifyOtpDto.otp);
  }
  @Public()
  @Post('login')
  @ApiOperation({ summary: 'Foydalanuvchi tizimga kirishi' })
  @ApiResponse({ status: 200, description: 'Muvaffaqiyatli kirish' })
  @ApiResponse({ status: 401, description: 'Email yoki parol noto‘g‘ri' })
  @ApiResponse({ status: 403, description: 'Email tasdiqlanmagan' })
  async login(@Body() loginDto: LoginDto, @Res() res: Response) {
    const result = await this.authService.login(loginDto, res);
    return res.status(HttpStatus.OK).json(result);
  }
  @Public()
  @ApiOperation({ summary: 'Foydalanuvchini tizimdan chiqarish' })
  @ApiResponse({ status: 200, description: 'Logout muvaffaqiyatli ✅' })
  @ApiResponse({ status: 401, description: 'Autentifikatsiya xatosi' })
  @ApiResponse({ status: 403, description: 'Ruxsat etilmagan' })
  @ApiResponse({ status: 500, description: 'Server xatosi' })
  @ApiResponse({ status: 503, description: 'Xizmat mavjud emas' })
  @ApiResponse({ status: 504, description: 'Gateway Timeout' })
  @ApiResponse({ status: 429, description: 'Too Many Requests' })
  @Post('logout')
  logout(@Res() res: Response) {
    return this.authService.logout(res);
  }
  
  
  @ApiOperation({ summary: 'Barcha foydalanuvchilarni olish' })
  @Roles("user",'Admin', 'Superadmin')
  @ApiResponse({ status: 200, description: 'Foydalanuvchilar ro‘yxati' })
  @Get()
  @ApiOperation({ summary: 'Barcha foydalanuvchilar' })
  findAll() {
    return this.authService.findAll();
  }

  @Roles('Admin', 'Superadmin')
  @ApiOperation({ summary: 'ID orqali foydalanuvchini olish' })
  @ApiResponse({ status: 200, description: 'Foydalanuvchi topildi ✅' })
  @ApiResponse({ status: 404, description: 'Foydalanuvchi topilmadi' })
  @Get(':id')
  @ApiOperation({ summary: 'ID orqali foydalanuvchini olish' })
  findOne(@Param('id', ) id: string) {
    return this.authService.findOne(id);
  }


  @Roles("user",'Admin', 'Superadmin')
  @ApiOperation({ summary: 'Foydalanuvchini yangilash' })
  @ApiResponse({ status: 200, description: 'Foydalanuvchi yangilandi ✅' })
  @ApiResponse({ status: 404, description: 'Foydalanuvchi topilmadi' })
  @Put(':id')
  @ApiOperation({ summary: 'Foydalanuvchini yangilash' })
  update(@Param('id', ) id: string, @Body() dto: UpdateUserDto) {
    return this.authService.update(id, dto);
  }


  @Roles('Admin', 'Superadmin')
  @ApiOperation({ summary: 'Foydalanuvchini o‘chirish' })
  @ApiResponse({ status: 200, description: 'Foydalanuvchi o‘chirildi 🗑️' })
  @ApiResponse({ status: 404, description: 'Foydalanuvchi topilmadi' })
  @Delete(':id')
  @ApiOperation({ summary: 'Foydalanuvchini o‘chirish' })
  remove(@Param('id', ) id: string) {
    return this.authService.remove(id);
  }



}
