// src/categories/categories.controller.ts
import { Controller, Post, Body, Get, Delete, Param, UseGuards } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('Categories')
@Controller('categories')
export class CategoriesController {
  constructor(private readonly service: CategoriesService) {}
  @ApiOperation({ summary: 'Yangi category yaratish' })
  @ApiResponse({ status: 201, description: 'Category muvaffaqiyatli yaratildi ✅' })
  @ApiResponse({ status: 400, description: 'Noto‘g‘ri ma’lumotlar' })
  @Post()
  @ApiOperation({ summary: 'Create new category' })
  create(@Body() dto: CreateCategoryDto) {
    return this.service.create(dto);
  }


  @ApiOperation({ summary: 'Barcha kategoriyalarni olish' })
  @ApiResponse({ status: 200, description: 'Kategoriya ro‘yxati qaytarildi' })
  @Get()
  @ApiOperation({ summary: 'Get all categories' })
  findAll() {
    return this.service.findAll();
  }


  @ApiOperation({ summary: 'ID orqali kategoriyani o‘chirish' })
  @ApiResponse({ status: 200, description: 'Kategoriya o‘chirildi 🗑️' })
  @ApiResponse({ status: 404, description: 'Kategoriya topilmadi' })
  @Delete(':id')
  @ApiOperation({ summary: 'Delete category by ID' })
  remove(@Param('id') id: number) {
    return this.service.remove(+id);
  }
}
