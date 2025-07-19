import { IsUUID, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCommentDto {
  @ApiProperty({ example: 'smartphone' })
  @IsString()
  productType: string;

  @ApiProperty({ example: 'b7c6a9d3-f221-4ab3-a3a5-9f4737d7aabc' })
  @IsUUID()
  productId: string;

  @ApiProperty({ example: 'Bu mahsulot juda yaxshi!' })
  @IsString()
  text: string;

  @ApiProperty({ example: 'e4f3c8f1-882b-4e36-b3f3-1234567890ab' })
  @IsUUID()
  userId: string;
}
