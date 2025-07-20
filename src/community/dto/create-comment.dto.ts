import { IsUUID, IsString, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCommentDto {
  @ApiProperty({ example: 'smartphone' })
  @IsString()
  productType: string;

  @ApiProperty({ example: 123 }) // number bo‘lsa shunday qoldiring
  @IsNumber()
  productId: number;

  @ApiProperty({ example: 'Bu mahsulot juda yaxshi!' })
  @IsString()
  text: string;


}


export class CommentUserDto {
  @ApiProperty()
  text: string;

  @ApiProperty()
  user: string;
}




export class GetProductWithCommentsDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  brand: string;

  @ApiProperty()
  category: string;

  @ApiProperty({ type: [CommentUserDto] })
  comments: CommentUserDto[];
}