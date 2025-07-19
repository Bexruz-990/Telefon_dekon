// src/categories/dto/create-brand.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateBrandDto {
  @ApiProperty({ example: 'Iphone', description: 'Brand nomi' })
  @IsString()
  @IsNotEmpty()
  name: string;
  @ApiProperty({ example: 'CategoryID uchun', description: 'Kategoriya ID' })
  @IsNumber()
  categoryId: number;
}
