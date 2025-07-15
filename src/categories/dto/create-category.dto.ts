// src/categories/dto/create-category.dto.ts
import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { CategoryType } from '../../products/enums/category.enum';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCategoryDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ enum: CategoryType })
  @IsEnum(CategoryType)
  type: CategoryType;
}
