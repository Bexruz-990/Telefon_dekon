// src/categories/dto/create-category.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCategoryDto {
  @ApiProperty({ example: 'Smartphone', description: 'Kategoriya nomi' })
  @IsString()
  @IsNotEmpty()
  name: string;
}
