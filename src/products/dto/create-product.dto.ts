
import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import {
  ApiProperty,
  ApiPropertyOptional,
} from '@nestjs/swagger';

export class PhoneDetails {
  @ApiProperty()
  @IsString()
  screenSize: string;

  @ApiProperty()
  @IsString()
  cpu: string;

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
  @IsNumber()
  cores: number;
}

export class WatchDetails {
  @ApiProperty()
  @IsString()
  displayType: string;

  @ApiPropertyOptional()
  @IsOptional()
  waterResistant: boolean;

  @ApiProperty()
  @IsString()
   batteryLife: string;
}

export class CameraDetails {
  @ApiProperty() @IsString() resolution: string;
  @ApiProperty() @IsString() lens: string;
  @ApiProperty() @IsString() sensor: string;
}

export class HeadphoneDetails {
  @ApiProperty() @IsString() battery: string;
  @ApiProperty() @IsString() connectionType: string;
  @ApiPropertyOptional() @IsOptional() noiseCancelling: boolean;
}

export class ComputerDetails {
  @ApiProperty() @IsString() processor: string;
  @ApiProperty() @IsNumber() ram: number;
  @ApiProperty() @IsNumber() storage: number;
  @ApiProperty() @IsString() gpu: string;
}

export class GamingDetails {
  @ApiProperty()
  @IsString()
  type: string;
  @ApiProperty()
  @IsString()
  storage: string;
  @ApiPropertyOptional()
  @IsOptional()
  controllerIncluded: boolean;
}

export class CreateProductDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsNumber()
  price: number;

  @ApiProperty()
  @IsString()
  description: string;

  @ApiProperty()
  @IsNumber()
  brandId: number;

  @ApiProperty()
  @IsNumber()
  categoryId: number;

  @ApiPropertyOptional({ type: PhoneDetails })
  @IsOptional()
  @ValidateNested()
  @Type(() => PhoneDetails)
  phoneDetails?: PhoneDetails;

  @ApiPropertyOptional({ type: WatchDetails })
  @IsOptional()
  @ValidateNested()
  @Type(() => WatchDetails)
  watchDetails?: WatchDetails;

  @ApiPropertyOptional({ type: CameraDetails })
  @IsOptional()
  @ValidateNested()
  @Type(() => CameraDetails)
  cameraDetails?: CameraDetails;

  @ApiPropertyOptional({ type: HeadphoneDetails })
  @IsOptional()
  @ValidateNested()
  @Type(() => HeadphoneDetails)
  headphoneDetails?: HeadphoneDetails;

  @ApiPropertyOptional({ type: ComputerDetails })
  @IsOptional()
  @ValidateNested()
  @Type(() => ComputerDetails)
  computerDetails?: ComputerDetails;

  @ApiPropertyOptional({ type: GamingDetails })
  @IsOptional()
  @ValidateNested()
  @Type(() => GamingDetails)
  gamingDetails?: GamingDetails;
}
