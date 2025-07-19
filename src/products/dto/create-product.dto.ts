import { IsNotEmpty, IsString, IsUUID, IsNumber, IsUrl, IsBoolean, IsArray, IsOptional, isNumber } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateComputerDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string;



  @ApiProperty()
  @IsNumber()
  price: number;

  @ApiProperty()
  @IsString()
  cpu: string;

  @ApiProperty()
  @IsString()
  ram: string;

  @ApiProperty()
  @IsString()
  storage: string;

  @ApiProperty()
  @IsString()
  gpu: string;

  @ApiProperty()
  @IsString()
  screen: string;

  @ApiProperty()
  @IsString()
  battery: string;

  @ApiProperty()
  @IsString()
  os: string;

  @ApiProperty()
  @IsNumber()
  brandId: number;

  @ApiProperty()
  @IsNumber()
  categoryId: number;
}



export class CreateSmartphoneDto {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsNumber()
  price: number;

  @ApiProperty()
  @IsString()
  cpu: string;

  @ApiProperty()
  @IsString()
  screenSize: string;

  @ApiProperty()
  @IsString()
  mainCamera: string;

  @ApiProperty()
  @IsString()
  frontCamera: string;

  @ApiProperty()
  @IsString()
  battery: string;

  @ApiProperty()
  @IsString()
  storage: string;

  @ApiProperty()
  @IsString()
  ram: string;

  @ApiProperty()
  @IsString()
  os: string;

  @ApiProperty()
  @IsNumber()
  amount: number;

  @ApiProperty()
  @IsUrl()
  imageUrl: string;

  @ApiProperty()
  @IsNumber()
  brandId: number;

  @ApiProperty()
  @IsNumber()
  categoryId: number;
}




export class CreateHeadphonesDto {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsNumber()
  price: number;

  @ApiProperty()
  @IsString()
  type: string;

  @ApiProperty()
  @IsString()
  battery: string;

  @ApiProperty()
  @IsBoolean()
  noiseCancel: boolean;

  @ApiProperty()
  @IsBoolean()
  mic: boolean;

  @ApiProperty()
  @IsString()
  bluetoothVersion: string;

  @ApiProperty()
  @IsNumber()
  amount: number;

  @ApiProperty()
  @IsUrl()
  imageUrl: string;

  @ApiProperty()
  @IsNumber()
  brandId: number;

  @ApiProperty()
  @IsNumber()
  categoryId: number;
}





export class CreateSmartwatchDto {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsNumber()
  price: number;

  @ApiProperty()
  @IsString()
  screen: string;

  @ApiProperty()
  @IsString()
  battery: string;

  @ApiProperty()
  @IsBoolean()
  waterproof: boolean;

  @ApiProperty({ type: [String] })
  @IsArray()
  @IsString({ each: true })
  healthSensors: string[];

  @ApiProperty()
  @IsString()
  os: string;

  @ApiProperty()
  @IsNumber()
  amount: number;

  @ApiProperty()
  @IsUrl()
  imageUrl: string;

  @ApiProperty()
  @IsNumber()
  brandId: number;

  @ApiProperty()
  @IsNumber()
  categoryId: number;
}




export class CreateGameStationDto {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsNumber()
  price: number;

  @ApiProperty()
  @IsString()
  cpu: string;

  @ApiProperty()
  @IsString()
  gpu: string;

  @ApiProperty()
  @IsString()
  storage: string;

  @ApiProperty()
  @IsBoolean()
  supportsVR: boolean;

  @ApiProperty()
  @IsString()
  edition: string;

  @ApiProperty()
  @IsNumber()
  amount: number;

  @ApiProperty()
  @IsUrl()
  imageUrl: string;

  @ApiProperty()
  @IsNumber()
  brandId: number;

  @ApiProperty()
  @IsNumber()
  categoryId: number;
}




// src/products/dto/create-other-product.dto.ts

export class CreateOtherProductDto {
  @ApiProperty({ example: 'Printer HP LaserJet Pro' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 799.99 })
  @IsNumber()
  price: number;

  @ApiPropertyOptional({ example: 'A4 formatda, tez chop etadi' })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({ example: 15 })
  @IsOptional()
  @IsNumber()
  amount?: number;

  @ApiProperty({ example: 'https://example.com/image.jpg' })
  @IsString()
  imageUrl: string;

  @ApiProperty({ example: 'uuid-brand-id' })
  @IsString()
  brandId: string;

  @ApiProperty({ example: 'uuid-category-id' })
  @IsString()
  categoryId: string;
}
