import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, Length } from 'class-validator';

export class VerifyOtpDto {
  @ApiProperty({
    description: 'Foydalanuvchi email manzili',
    example: 'marimovbehruz57@gmail.com',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'Bir martalik parol (OTP)',
    example: '123456',
  })
  @IsString()
  @Length(6, 6)
  otp: string;
}