import { PartialType } from '@nestjs/swagger';
import { CreateComputerDto, CreateGameStationDto, CreateHeadphonesDto, CreateOtherProductDto, CreateSmartphoneDto, CreateSmartwatchDto } from './create-product.dto';

export class UpdateComputerDto extends PartialType(CreateComputerDto) {}

export class UpdateSmartphoneDto extends PartialType(CreateSmartphoneDto) {}

export class UpdateHeadphonesDto extends PartialType(CreateHeadphonesDto) {}

export class UpdateSmartwatchDto extends PartialType(CreateSmartwatchDto) {}

export class UpdateGameStationDto extends PartialType(CreateGameStationDto) {}

export class UpdateOtherProductDto extends PartialType(CreateOtherProductDto) {}