import { IsArray, IsInt, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateOrderDto {
  @ApiProperty({ example: [1, 2, 3], description: 'Array of product IDs' })
  @IsArray()
  @IsInt({ each: true })
  productIds: number[];
}
