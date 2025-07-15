// create-brand.dto.ts
import { IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateBrandDto {
  @ApiProperty({ example: 'Apple' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiPropertyOptional({ example: 'Premium smartphone manufacturer' })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({ example: '7a29d02a-3ff4-48c4-9a54-b93e54d29220' })
  @IsUUID()
  @IsNotEmpty()
  categoryId: string;
}
