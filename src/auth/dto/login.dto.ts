import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({ example: 'user@example.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'password123' })
  @IsString()
  password: string;
  

  @ApiProperty({ example: 'Ali' })
    @IsString()
    @MinLength(3)
    @IsNotEmpty()
    name: string;
}
