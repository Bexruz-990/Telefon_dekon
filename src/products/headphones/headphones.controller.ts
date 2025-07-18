// src/products/headphones/headphones.controller.ts
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
  import { HeadphonesProductService } from './headphones.service';

  import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { CreateHeadphonesDto } from '../dto/create-product.dto';
import { UpdateHeadphonesDto } from '../dto/update-product.dto';
  
  @ApiTags('products/Headphones')
  @Controller('products/headphones')
  export class HeadphonesProductController {
    constructor(private readonly service: HeadphonesProductService) {}
  
    @Post()
    @ApiOperation({ summary: 'Naushnik yaratish' })
    create(@Body() dto: CreateHeadphonesDto) {
      return this.service.create(dto);
    }
  
    @Get()
    @ApiOperation({ summary: 'Barcha naushniklar' })
    findAll() {
      return this.service.findAll();
    }
  
    @Get(':id')
    @ApiOperation({ summary: 'Bitta naushnik olish' })
    findOne(@Param('id', ParseUUIDPipe) id: string) {
      return this.service.findOne(id);
    }
  
    @Put(':id')
    @ApiOperation({ summary: 'Naushnik yangilash' })
    update(
      @Param('id', ParseUUIDPipe) id: string,
      @Body() dto: UpdateHeadphonesDto,
    ) {
      return this.service.update(id, dto);
    }
  
    @Delete(':id')
    @ApiOperation({ summary: 'Naushnik o‘chirish' })
    remove(@Param('id', ParseUUIDPipe) id: string) {
      return this.service.remove(id);
    }
  
    @Post(':id/sell')
    @ApiOperation({ summary: 'Naushnik sotish (amount kamayadi)' })
    sell(@Param('id', ParseUUIDPipe) id: string, @Query('quantity') quantity: number) {
      return this.service.sell(id, Number(quantity));
    }
  
    @Post(':id/restock')
    @ApiOperation({ summary: 'Naushnik omborga qo‘shish (amount oshadi)' })
    restock(@Param('id', ParseUUIDPipe) id: string, @Query('quantity') quantity: number) {
      return this.service.restock(id, Number(quantity));
    }
  }
  