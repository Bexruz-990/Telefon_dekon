// src/products/product.controller.ts

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ProductService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiBody,
} from '@nestjs/swagger';

@ApiTags('Products')
@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  @ApiOperation({ summary: 'Mahsulot yaratish' })
  @ApiResponse({ status: 201, description: 'Mahsulot yaratildi ✅' })
  @ApiBody({ type: CreateProductDto })
  create(@Body() dto: CreateProductDto) {
    return this.productService.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Barcha mahsulotlarni olish' })
  @ApiResponse({ status: 200, description: 'Mahsulotlar ro‘yxati' })
  findAll() {
    return this.productService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'ID orqali mahsulotni olish' })
  @ApiParam({ name: 'id', type: String })
  @ApiResponse({ status: 200, description: 'Mahsulot topildi' })
  @ApiResponse({ status: 404, description: 'Mahsulot topilmadi' })
  findOne(@Param('id') id: string) {
    return this.productService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Mahsulotni yangilash' })
  @ApiParam({ name: 'id', type: String })
  @ApiResponse({ status: 200, description: 'Mahsulot yangilandi' })
  @ApiBody({ type: UpdateProductDto })
  update(@Param('id') id: string, @Body() dto: UpdateProductDto) {
    return this.productService.update(id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Mahsulotni o‘chirish' })
  @ApiParam({ name: 'id', type: String })
  @ApiResponse({ status: 200, description: 'Mahsulot o‘chirildi' })
  remove(@Param('id') id: string) {
    return this.productService.remove(id);
  }
}
