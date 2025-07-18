// src/wishlist/dto/create-wishlist.dto.ts
import { IsEnum, IsNotEmpty, IsNumber, IsPositive, IsString, IsUUID } from 'class-validator';
import { ProductType } from '../entity/wishlist.entity';

export class CreateWishlistDto {
  @IsUUID()
  userId: string;

  @IsUUID()
  productId: string;

  @IsEnum(['smartphone', 'computer', 'headphones', 'smartwatch', 'gamestation'])
  productType: ProductType;

  @IsString()
  name: string;

  @IsString()
  imageUrl: string;

  @IsNumber()
  @IsPositive()
  price: number;

  @IsNumber()
  @IsPositive()
  quantity: number;
}
