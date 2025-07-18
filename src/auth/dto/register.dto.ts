import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, MinLength } from 'class-validator';

export class RegisterDto {
  @ApiProperty({
    description: 'Foydalanuvchi email manzili',
    example: 'marimovbehruz57@gmail.com',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'Foydalanuvchi ismi',
    example: 'John Doe',
  })
  @IsString()
  name: string;

  @ApiProperty({
    description: 'Foydalanuvchi paroli (kamida 6 belgi)',
    example: 'password123',
  })
  @IsString()
  @MinLength(6)
  password: string;
}