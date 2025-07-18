import { IsNotEmpty, IsString, IsUUID, IsNumber, IsUrl, IsBoolean, IsArray } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

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
  @IsUUID()
  brandId: string;

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
  @IsUUID()
  brandId: string;

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
  @IsUUID()
  brandId: string;

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
  @IsUUID()
  brandId: string;

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
  @IsUUID()
  brandId: string;

  @ApiProperty()
  @IsNumber()
  categoryId: number;
}