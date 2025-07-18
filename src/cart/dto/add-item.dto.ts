// src/cart/dto/create-cart.dto.ts
import { IsString, IsNumber, IsNotEmpty, IsUrl } from 'class-validator';

export class CreateCartDto {
  @IsString()
  @IsNotEmpty()
  userId: string;

  @IsString()
  @IsNotEmpty()
  productId: string;

  @IsString()
  @IsNotEmpty()
  productType: string; // Masalan: 'smartphone', 'computer', 'headphones'

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  price: number;

  @IsNumber()
  quantity: number;

  @IsUrl()
  imageUrl: string;
}
