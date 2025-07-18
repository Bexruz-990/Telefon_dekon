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
    ParseUUIDPipe,
  } from '@nestjs/common';
  import { GameStationService } from './gamestation.service';

  import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { CreateGameStationDto } from '../dto/create-product.dto';
import { UpdateGameStationDto } from '../dto/update-product.dto';
  
  @ApiTags('products/Game Station')
  @Controller('products/gamestations')
  export class GameStationController {
    constructor(private readonly service: GameStationService) {}
  
    @Post()
    @ApiOperation({ summary: 'Game Station yaratish' })
    create(@Body() dto: CreateGameStationDto) {
      return this.service.create(dto);
    }
  
    @Get()
    @ApiOperation({ summary: 'Barcha Game Station lar' })
    findAll() {
      return this.service.findAll();
    }
  
    @Get(':id')
    @ApiOperation({ summary: 'Bitta Game Station olish' })
    findOne(@Param('id', ParseUUIDPipe) id: string) {
      return this.service.findOne(id);
    }
  
    @Put(':id')
    @ApiOperation({ summary: 'Game Station yangilash' })
    update(
      @Param('id', ParseUUIDPipe) id: string,
      @Body() dto: UpdateGameStationDto,
    ) {
      return this.service.update(id, dto);
    }
  
    @Delete(':id')
    @ApiOperation({ summary: 'Game Station o‘chirish' })
    remove(@Param('id', ParseUUIDPipe) id: string) {
      return this.service.remove(id);
    }
  
    @Post(':id/sell')
    @ApiOperation({ summary: 'Sotish (amount kamayadi)' })
    sell(@Param('id', ParseUUIDPipe) id: string, @Query('quantity') quantity: number) {
      return this.service.sell(id, Number(quantity));
    }
  
    @Post(':id/restock')
    @ApiOperation({ summary: 'Omborga qo‘shish (amount oshadi)' })
    restock(@Param('id', ParseUUIDPipe) id: string, @Query('quantity') quantity: number) {
      return this.service.restock(id, Number(quantity));
    }
  }
  