// src/products/smartwatch/smartwatch.controller.ts
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
  import { SmartwatchProductService } from './smartwatch.service';

  import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { CreateSmartwatchDto } from '../dto/create-product.dto';
import { UpdateSmartwatchDto } from '../dto/update-product.dto';
  
  @ApiTags('products/Smart Watches')
  @Controller('products/smartwatches')
  export class SmartwatchProductController {
    constructor(private readonly service: SmartwatchProductService) {}
  
    @Post()
    @ApiOperation({ summary: 'Smart Watch yaratish' })
    create(@Body() dto: CreateSmartwatchDto) {
      return this.service.create(dto);
    }
  
    @Get()
    @ApiOperation({ summary: 'Barcha Smart Watch lar' })
    findAll() {
      return this.service.findAll();
    }
  
    @Get(':id')
    @ApiOperation({ summary: 'Bitta Smart Watch olish' })
    findOne(@Param('id', ParseUUIDPipe) id: string) {
      return this.service.findOne(id);
    }
  
    @Put(':id')
    @ApiOperation({ summary: 'Smart Watch yangilash' })
    update(
      @Param('id', ParseUUIDPipe) id: string,
      @Body() dto: UpdateSmartwatchDto,
    ) {
      return this.service.update(id, dto);
    }
  
    @Delete(':id')
    @ApiOperation({ summary: 'Smart Watch o‘chirish' })
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
  