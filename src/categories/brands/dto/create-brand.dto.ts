// src/categories/dto/create-brand.dto.ts
import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateBrandDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  categoryId: number;
}
