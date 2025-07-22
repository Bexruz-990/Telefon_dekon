import {
  Controller,
  Post,
  Get,
  Param,
  Body,
  Put,
  Delete,
  Query,
} from '@nestjs/common';
import { GameStationService } from './gamestation.service';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { CreateGameStationDto } from '../dto/create-product.dto';
import { UpdateGameStationDto } from '../dto/update-product.dto';
import { Roles } from 'src/auth/decorators/roles.decorator';

@ApiTags('products/Game Station')
@ApiBearerAuth('access-token')
@Controller('products/gamestations')
export class GameStationController {
  constructor(private readonly service: GameStationService) {}

  // ✅ CREATE
  @Post()
  @Roles('Admin', 'Superadmin')
  @ApiOperation({ summary: 'Game Station yaratish' })
  @ApiResponse({ status: 201, description: 'Game Station yaratildi ✅' })
  create(@Body() dto: CreateGameStationDto) {
    return this.service.create(dto);
  }

  // ✅ FIND ALL
  @Get()
  @ApiOperation({ summary: 'Barcha Game Station larni olish' })
  @ApiResponse({ status: 200, description: 'Game Station lar ro‘yxati' })
  findAll() {
    return this.service.findAll();
  }

  // ✅ FIND ONE
  @Get(':id')
  @ApiOperation({ summary: 'ID bo‘yicha Game Station olish' })
  @ApiParam({ name: 'id', type: 'string', description: 'Game Station ID' })
  @ApiResponse({ status: 200, description: 'Bitta Game Station' })
  findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  // ✅ UPDATE
  @Put(':id')
  @Roles('Admin', 'Superadmin')
  @ApiOperation({ summary: 'Game Station yangilash' })
  @ApiParam({ name: 'id', type: 'string', description: 'Game Station ID' })
  @ApiResponse({ status: 200, description: 'Game Station yangilandi ✅' })
  update(@Param('id') id: string, @Body() dto: UpdateGameStationDto) {
    return this.service.update(id, dto);
  }

  // ✅ DELETE
  @Delete(':id')
  @Roles('Admin', 'Superadmin')
  @ApiOperation({ summary: 'Game Station o‘chirish' })
  @ApiParam({ name: 'id', type: 'string', description: 'Game Station ID' })
  @ApiResponse({ status: 200, description: 'Game Station o‘chirildi 🗑️' })
  remove(@Param('id') id: string) {
    return this.service.remove(id);
  }

  // ✅ SELL
  @Post(':id/sell')
  @ApiOperation({ summary: 'Game Station sotish (amount kamayadi)' })
  @ApiParam({ name: 'id', type: 'string', description: 'Game Station ID' })
  @ApiParam({ name: 'quantity', type: 'number', description: 'Sotiladigan miqdor' })
  @ApiResponse({ status: 200, description: 'Sotish muvaffaqiyatli ✅' })
  sell(@Param('id') id: string, @Query('quantity') quantity: number) {
    return this.service.sell(id, Number(quantity));
  }

  // ✅ RESTOCK
  @Post(':id/restock')
  @ApiOperation({ summary: 'Omborga Game Station qo‘shish (amount oshadi)' })
  @ApiParam({ name: 'id', type: 'string', description: 'Game Station ID' })
  @ApiParam({ name: 'quantity', type: 'number', description: 'Qo‘shiladigan miqdor' })
  @ApiResponse({ status: 200, description: 'Omborga qo‘shildi ✅' })
  restock(@Param('id') id: string, @Query('quantity') quantity: number) {
    return this.service.restock(id, Number(quantity));
  }
}
