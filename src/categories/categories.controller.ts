// src/categories/categories.controller.ts
import { Controller, Post, Body, Get, Delete, Param } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('Categories')
@Controller('categories')
export class CategoriesController {
  constructor(private readonly service: CategoriesService) {}

  @Post()
  @ApiOperation({ summary: 'Create new category' })
  create(@Body() dto: CreateCategoryDto) {
    return this.service.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all categories' })
  findAll() {
    return this.service.findAll();
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete category by ID' })
  remove(@Param('id') id: number) {
    return this.service.remove(+id);
  }
}
