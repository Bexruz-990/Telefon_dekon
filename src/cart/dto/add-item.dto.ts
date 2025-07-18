import { IsNotEmpty, IsUUID, IsNumber, Min } from 'class-validator';

export class CreateCartDto {
  @IsNotEmpty()
  @IsUUID()
  userId: string;

  @IsNotEmpty()
  @IsUUID()
  productId: string;

  @IsNumber()
  @Min(1)
  quantity: number;
}
