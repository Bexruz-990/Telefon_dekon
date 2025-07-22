import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, MinLength } from 'class-validator';

export class LoginDto {
  @ApiProperty({
    description: 'Foydalanuvchi email manzili',
    example: 'user@gmail.com',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'Foydalanuvchi paroli',
    example: 'password123',
  })
  @IsString()
  @MinLength(6)
  password: string;
}