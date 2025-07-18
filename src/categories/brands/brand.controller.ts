// src/categories/brands/brands.controller.ts
import { Controller, Post, Body, Get, Delete, Param } from '@nestjs/common';
import { BrandsService } from './brand.service';
import { CreateBrandDto } from './dto/create-brand.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('Brands')
@Controller('brands')
export class BrandsController {
  constructor(private readonly service: BrandsService) {}

  @Post()
  @ApiOperation({ summary: 'Create new brand' })
  create(@Body() dto: CreateBrandDto) {
    return this.service.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all brands' })
  findAll() {
    return this.service.findAll();
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete brand by ID' })
  remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}
