import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsUUID } from 'class-validator';

export class CreateWishlistDto {
  @ApiProperty({ example: 'uuid-product-id' })
  @IsUUID() // 👉 faqat UUID bo'lishi shart
  productId: string;

  @ApiProperty({ example: 'uuid-user-id' })
  @IsUUID()
  userId: string;

  @ApiProperty({ example: 2 })
  @IsNumber() // 👉 raqam bo'lishi shart (masalan: 1, 2, 3)
  quantity: number;
}

