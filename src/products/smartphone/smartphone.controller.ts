// src/products/smartphone/smartphone.controller.ts
import {
    Controller,
    Post,
    Get,
    Param,
    Body,
    Put,
    Delete,
    ParseUUIDPipe,
    Query,
  } from '@nestjs/common';
  import { SmartphoneProductService } from './smartphone.service';
  import { CreateSmartphoneDto } from '../dto/create-product.dto';
  import { UpdateSmartphoneDto } from '../dto/update-product.dto';

  import { ApiTags, ApiOperation } from '@nestjs/swagger';
  
  @ApiTags('products/Smartphones')
  @Controller('products/martphones')
  export class SmartphoneProductController {
    constructor(private readonly service: SmartphoneProductService) {}
  
    @Post()
    @ApiOperation({ summary: 'Yangi smartfon yaratish' })
    create(@Body() dto: CreateSmartphoneDto) {
      return this.service.create(dto);
    }
  
    @Get()
    @ApiOperation({ summary: 'Barcha smartfonlar' })
    findAll() {
      return this.service.findAll();
    }
  
    @Get(':id')
    @ApiOperation({ summary: 'Smartfonni ID orqali olish' })
    findOne(@Param('id', ParseUUIDPipe) id: string) {
      return this.service.findOne(id);
    }
  
    @Put(':id')
    @ApiOperation({ summary: 'Smartfonni yangilash' })
    update(
      @Param('id', ParseUUIDPipe) id: string,
      @Body() dto: UpdateSmartphoneDto,
    ) {
      return this.service.update(id, dto);
    }
  
    @Delete(':id')
    @ApiOperation({ summary: 'Smartfonni o‘chirish' })
    remove(@Param('id', ParseUUIDPipe) id: string) {
      return this.service.remove(id);
    }
  
    @Post(':id/sell')
    @ApiOperation({ summary: 'Smartfonni sotish (amount kamayadi)' })
    sell(
      @Param('id', ParseUUIDPipe) id: string,
      @Query('quantity') quantity: number,
    ) {
      return this.service.sell(id, Number(quantity));
    }
  
    @Post(':id/restock')
    @ApiOperation({ summary: 'Smartfonni omborga qo‘shish (amount oshadi)' })
    restock(
      @Param('id', ParseUUIDPipe) id: string,
      @Query('quantity') quantity: number,
    ) {
      return this.service.restock(id, Number(quantity));
    }
  }
  