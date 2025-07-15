import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateOrderStatusDto {
  @ApiProperty({ example: 'shipped', description: 'New status of the order' })
  @IsString()
  status: string;
}
