// src/categories/brands/brands.controller.ts
import { Controller, Post, Body, Get, Delete, Param, UseGuards } from '@nestjs/common';
import { BrandsService } from './brand.service';
import { CreateBrandDto } from './dto/create-brand.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('Brands')
@Controller('brands')
export class BrandsController {
  constructor(private readonly service: BrandsService) {}


  @ApiOperation({ summary: 'Yangi brand yaratish' })
  @ApiResponse({ status: 201, description: 'Brand muvaffaqiyatli yaratildi ✅' })
  @ApiResponse({ status: 400, description: 'Noto‘g‘ri ma’lumotlar' })
  @Post()
  @ApiOperation({ summary: 'Create new brand' })
  create(@Body() dto: CreateBrandDto) {
    return this.service.create(dto);
  }

  @ApiOperation({ summary: 'Barcha brandlarni olish' })
  @ApiResponse({ status: 200, description: 'Brandlar ro‘yxati qaytarildi' })
  @Get()
  @ApiOperation({ summary: 'Get all brands' })
  findAll() {
    return this.service.findAll();
  }



  @ApiOperation({ summary: 'ID orqali brandni o‘chirish' })
  @ApiResponse({ status: 200, description: 'Brand o‘chirildi 🗑️' })
  @ApiResponse({ status: 404, description: 'Brand topilmadi' })
  @Delete(':id')
  @ApiOperation({ summary: 'Delete brand by ID' })
  remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}
