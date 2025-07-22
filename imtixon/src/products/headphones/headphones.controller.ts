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
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';

import { HeadphonesProductService } from './headphones.service';
import { CreateHeadphonesDto } from '../dto/create-product.dto';
import { UpdateHeadphonesDto } from '../dto/update-product.dto';
import { Roles } from 'src/auth/decorators/roles.decorator';

@ApiTags('products/Headphones')
@ApiBearerAuth('access-token')
@Controller('products/headphones')
export class HeadphonesProductController {
  constructor(private readonly service: HeadphonesProductService) {}

  @Post()
  @Roles('Admin', 'Superadmin')
  @ApiOperation({ summary: 'Naushnik yaratish' })
  @ApiResponse({ status: 201, description: 'Naushnik yaratildi ✅' })
  @ApiResponse({ status: 400, description: 'Noto‘g‘ri ma’lumotlar' })
  @ApiResponse({ status: 404, description: 'Naushnik topilmadi' })
  @ApiResponse({ status: 403, description: 'Ruxsat etilmagan' })
  @ApiResponse({ status: 401, description: 'Autentifikatsiya xatosi' })
  @ApiResponse({ status: 500, description: 'Server xatosi' })
  create(@Body() dto: CreateHeadphonesDto) {
    return this.service.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Barcha naushniklar' })
  @ApiResponse({ status: 200, description: 'Barcha naushniklar ro‘yxati' })
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Bitta naushnik olish' })
  @ApiResponse({ status: 200, description: 'Bitta naushnik' })
  @ApiResponse({ status: 404, description: 'Naushnik topilmadi' })
  findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @Put(':id')
  @Roles('Admin', 'Superadmin')
  @ApiOperation({ summary: 'Naushnik yangilash' })
  @ApiResponse({ status: 200, description: 'Naushnik yangilandi ✅' })
  @ApiResponse({ status: 404, description: 'Naushnik topilmadi' })
  update(@Param('id') id: string, @Body() dto: UpdateHeadphonesDto) {
    return this.service.update(id, dto);
  }

  @Delete(':id')
  @Roles('Admin', 'Superadmin')
  @ApiOperation({ summary: 'Naushnik o‘chirish' })
  @ApiResponse({ status: 200, description: 'Naushnik o‘chirildi 🗑️' })
  @ApiResponse({ status: 404, description: 'Naushnik topilmadi' })
  remove(@Param('id') id: string) {
    return this.service.remove(id);
  }

  @Post(':id/sell')
  @ApiOperation({ summary: 'Naushnik sotish (amount kamayadi)' })
  @ApiResponse({ status: 200, description: 'Naushnik sotildi ✅' })
  @ApiResponse({ status: 404, description: 'Naushnik topilmadi' })
  sell(@Param('id') id: string, @Query('quantity') quantity: number) {
    return this.service.sell(id, Number(quantity));
  }

  @Post(':id/restock')
  @ApiOperation({ summary: 'Naushnik omborga qo‘shish (amount oshadi)' })
  @ApiResponse({ status: 200, description: 'Naushnik omborga qo‘shildi ✅' })
  @ApiResponse({ status: 404, description: 'Naushnik topilmadi' })
  restock(@Param('id') id: string, @Query('quantity') quantity: number) {
    return this.service.restock(id, Number(quantity));
  }
}
