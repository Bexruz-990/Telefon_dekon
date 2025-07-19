// src/products/gamestation/gamestation.controller.ts
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

  import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBearerAuth } from '@nestjs/swagger';
import { CreateGameStationDto } from '../dto/create-product.dto';
import { UpdateGameStationDto } from '../dto/update-product.dto';
import { Roles } from 'src/auth/decorators/roles.decorator';
  
  @ApiTags('products/Game Station')
@ApiBearerAuth('access-token')
  @Controller('products/gamestations')
  export class GameStationController {
    constructor(private readonly service: GameStationService) {}
  
    @Post()
  @Roles('Admin', 'Superadmin')
    @ApiResponse({ status: 201, description: 'Game Station yaratildi ✅' })
    @ApiResponse({ status: 400, description: 'Noto‘g‘ri ma’lumotlar' })
    @ApiResponse({ status: 500, description: 'Server xatosi' })
    @ApiResponse({ status: 404, description: 'Topilmadi' })
    @ApiResponse({ status: 403, description: 'Ruxsat etilmagan' })
    @ApiResponse({ status: 401, description: 'Autentifikatsiya xatosi' })
    @ApiResponse({ status: 409, description: 'Konflikt' })
    @ApiResponse({ status: 422, description: 'Unprocessable Entity' })
    @ApiResponse({ status: 503, description: 'Xizmat mavjud emas' })
    @ApiResponse({ status: 504, description: 'Gateway Timeout' })
    @ApiResponse({ status: 429, description: 'Too Many Requests' })
    @ApiOperation({ summary: 'Game Station yaratish' })
    create(@Body() dto: CreateGameStationDto) {
      return this.service.create(dto);
    }
  
    @Get()
    @ApiResponse({ status: 200, description: 'Barcha Game Station lar ro‘yxati' })
    @ApiResponse({ status: 404, description: 'Game Station topilmadi' })
    @ApiResponse({ status: 500, description: 'Server xatosi' })
    @ApiResponse({ status: 403, description: 'Ruxsat etilmagan' })
    @ApiResponse({ status: 401, description: 'Autentifikatsiya xatosi' })
    @ApiResponse({ status: 409, description: 'Konflikt' })
    @ApiResponse({ status: 422, description: 'Unprocessable Entity' })
    @ApiResponse({ status: 503, description: 'Xizmat mavjud emas' })
    @ApiResponse({ status: 504, description: 'Gateway Timeout' })
    @ApiResponse({ status: 429, description: 'Too Many Requests' })
    @ApiOperation({ summary: 'Barcha Game Station lar' })
    findAll() {
      return this.service.findAll();
    }
  
    @Get(':id')
    @ApiResponse({ status: 200, description: 'Bitta Game Station' })
    @ApiResponse({ status: 404, description: 'Game Station topilmadi' })
    @ApiResponse({ status: 500, description: 'Server xatosi' })
    @ApiResponse({ status: 403, description: 'Ruxsat etilmagan' })
    @ApiResponse({ status: 401, description: 'Autentifikatsiya xatosi' })
    @ApiResponse({ status: 409, description: 'Konflikt' })
    @ApiResponse({ status: 422, description: 'Unprocessable Entity' })
    @ApiResponse({ status: 503, description: 'Xizmat mavjud emas' })
    @ApiResponse({ status: 504, description: 'Gateway Timeout' })
    @ApiResponse({ status: 429, description: 'Too Many Requests' })
    @ApiParam({ name: 'id', type: 'string', description: 'Game Station ID' })
    findOne(@Param('id',) id: string) {
      return this.service.findOne(id);
    }
  
    @Put(':id')
  @Roles('Admin', 'Superadmin')
    @ApiResponse({ status: 200, description: 'Game Station yangilandi ✅' })
    @ApiResponse({ status: 404, description: 'Game Station topilmadi' })
    @ApiResponse({ status: 500, description: 'Server xatosi' })
    @ApiResponse({ status: 403, description: 'Ruxsat etilmagan' })
    @ApiResponse({ status: 401, description: 'Autentifikatsiya xatosi' })
    @ApiResponse({ status: 409, description: 'Konflikt' })
    @ApiResponse({ status: 422, description: 'Unprocessable Entity' })
    @ApiResponse({ status: 503, description: 'Xizmat mavjud emas' })
    @ApiResponse({ status: 504, description: 'Gateway Timeout' })
    @ApiResponse({ status: 429, description: 'Too Many Requests' })
    @ApiParam({ name: 'id', type: 'string', description: 'Game Station ID' })
    @ApiOperation({ summary: 'Game Station yangilash' })
    update(
      @Param('id',) id: string,
      @Body() dto: UpdateGameStationDto,
    ) {
      return this.service.update(id, dto);
    }
  
    @Delete(':id')
  @Roles('Admin', 'Superadmin')
    @ApiOperation({ summary: 'Game Station o‘chirish' })
    remove(@Param('id',) id: string) {
      return this.service.remove(id);
    }
  
    @Post(':id/sell')
    @ApiResponse({ status: 200, description: 'Sotish muvaffaqiyatli ✅' })
    @ApiResponse({ status: 404, description: 'Game Station topilmadi' })
    @ApiResponse({ status: 500, description: 'Server xatosi' })
    @ApiResponse({ status: 403, description: 'Ruxsat etilmagan' })
    @ApiResponse({ status: 401, description: 'Autentifikatsiya xatosi' })
    @ApiResponse({ status: 409, description: 'Konflikt' })
    @ApiResponse({ status: 422, description: 'Unprocessable Entity' })
    @ApiResponse({ status: 503, description: 'Xizmat mavjud emas' })
    @ApiResponse({ status: 504, description: 'Gateway Timeout' })
    @ApiResponse({ status: 429, description: 'Too Many Requests' })
    @ApiParam({ name: 'id', type: 'string', description: 'Game Station ID' })
    @ApiParam({ name: 'quantity', type: 'number', description: 'Sotiladigan miqdor' })
    @ApiOperation({ summary: 'Sotish (amount kamayadi)' })
    sell(@Param('id',) id: string, @Query('quantity') quantity: number) {
      return this.service.sell(id, Number(quantity));
    }
  
    @Post(':id/restock')
    @ApiResponse({ status: 200, description: 'Omborga qo‘shildi ✅' })
    @ApiResponse({ status: 404, description: 'Game Station topilmadi' })
    @ApiResponse({ status: 500, description: 'Server xatosi' })
    @ApiResponse({ status: 403, description: 'Ruxsat etilmagan' })
    @ApiResponse({ status: 401, description: 'Autentifikatsiya xatosi' })
    @ApiResponse({ status: 409, description: 'Konflikt' })
    @ApiResponse({ status: 422, description: 'Unprocessable Entity' })
    @ApiResponse({ status: 503, description: 'Xizmat mavjud emas' })
    @ApiResponse({ status: 504, description: 'Gateway Timeout' })
    @ApiResponse({ status: 429, description: 'Too Many Requests' })
    @ApiOperation({ summary: 'Omborga qo‘shish (amount oshadi)' })
    restock(@Param('id',) id: string, @Query('quantity') quantity: number) {
      return this.service.restock(id, Number(quantity));
    }
  }
  