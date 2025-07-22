// src/cart/dto/create-cart.dto.ts
import { IsString, IsNumber, IsNotEmpty, IsUrl } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCartDto {
  @ApiProperty({ example: 'ef8126f2-8d5d-4a21-9d59-28d93e2fd8a7', description: 'Mahsulot IDsi' })
  @IsString()
  @IsNotEmpty()
  productId: number;

  @ApiProperty({ example: 'smartphone', description: 'Mahsulot turi' })
  @IsString()
  @IsNotEmpty()
  productType: string;

  @ApiProperty({ example: 'Samsung Galaxy A54', description: 'Mahsulot nomi' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 3500000, description: 'Mahsulot narxi (donalik)' })
  @IsNumber()
  price: number;

  @ApiProperty({ example: 2, description: 'Mahsulot soni' })
  @IsNumber()
  quantity: number;

  @ApiProperty({
    example: 'https://cdn.example.com/images/smartphone.jpg',
    description: 'Mahsulot rasmi URL manzili',
  })
  @IsUrl()
  imageUrl: string;
}
