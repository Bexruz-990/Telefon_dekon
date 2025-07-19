// src/products/other-product.controller.ts
import {
  Controller,
  Post,
  Get,
  Param,
  Patch,
  Body,
  Delete,
} from '@nestjs/common';
import { OtherProductService } from './other-product.service';
import { CreateOtherProductDto } from '../dto/create-product.dto';
import { UpdateOtherProductDto } from '../dto/update-product.dto';
import { ApiTags, ApiOperation, ApiParam, ApiResponse } from '@nestjs/swagger';

@ApiTags('Other Products')
@Controller('other-products')
export class OtherProductController {
  constructor(private service: OtherProductService) {}

  @Post()
  @ApiOperation({ summary: 'Yangi boshqa mahsulot qo‘shish' })
  @ApiResponse({ status: 201, description: 'Boshqa mahsulot yaratildi ✅' })
  @ApiResponse({ status: 400, description: 'Noto‘g‘ri ma’lumotlar' })
  @ApiResponse({ status: 500, description: 'Server xatosi' })
  @ApiResponse({ status: 404, description: 'Topilmadi' })
  @ApiResponse({ status: 403, description: 'Ruxsat etilmagan' })
  @ApiResponse({ status: 401, description: 'Autentifikatsiya xatosi' })
  @ApiResponse({ status: 409, description: 'Konflikt' })
  @ApiResponse({ status: 422, description: 'Unprocessable Entity' })
  @ApiResponse({ status: 503, description: 'Xizmat mavjud emas' })
  @ApiResponse({ status: 504, description: 'Gateway Timeout' })
  @ApiResponse({ status: 429, description: 'Too Many Requests' })
  create(@Body() dto: CreateOtherProductDto) {
    return this.service.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Barcha boshqa mahsulotlarni olish' })
  @ApiResponse({ status: 200, description: 'Barcha boshqa mahsulotlar ro‘yxati' })
  @ApiResponse({ status: 404, description: 'Boshqa mahsulot topilmadi' })
  @ApiResponse({ status: 500, description: 'Server xatosi' })
  @ApiResponse({ status: 403, description: 'Ruxsat etilmagan' })
  @ApiResponse({ status: 401, description: 'Autentifikatsiya xatosi' })
  @ApiResponse({ status: 409, description: 'Konflikt' })
  @ApiResponse({ status: 422, description: 'Unprocessable Entity' })
  @ApiResponse({ status: 503, description: 'Xizmat mavjud emas' })
  @ApiResponse({ status: 504, description: 'Gateway Timeout' })
  @ApiResponse({ status: 429, description: 'Too Many Requests' })
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  @ApiParam({ name: 'id', type: 'string' })
  @ApiOperation({ summary: 'Bitta mahsulotni olish' })
  @ApiResponse({ status: 200, description: 'Bitta boshqa mahsulot' })
  @ApiResponse({ status: 404, description: 'Boshqa mahsulot topilmadi' })
  @ApiResponse({ status: 500, description: 'Server xatosi' })
  @ApiResponse({ status: 403, description: 'Ruxsat etilmagan' })
  @ApiResponse({ status: 401, description: 'Autentifikatsiya xatosi' })
  @ApiResponse({ status: 409, description: 'Konflikt' })
  @ApiResponse({ status: 422, description: 'Unprocessable Entity' })
  @ApiResponse({ status: 503, description: 'Xizmat mavjud emas' })
  @ApiResponse({ status: 504, description: 'Gateway Timeout' })
  @ApiResponse({ status: 429, description: 'Too Many Requests' })
  findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @Patch(':id')
  @ApiParam({ name: 'id', type: 'string' })
  @ApiOperation({ summary: 'Mahsulotni yangilash' })
  @ApiResponse({ status: 200, description: 'Mahsulot yangilandi ✅' })
  @ApiResponse({ status: 404, description: 'Mahsulot topilmadi' })
  @ApiResponse({ status: 500, description: 'Server xatosi' })
  @ApiResponse({ status: 403, description: 'Ruxsat etilmagan' })
  @ApiResponse({ status: 401, description: 'Autentifikatsiya xatosi' })
  @ApiResponse({ status: 409, description: 'Konflikt' })
  @ApiResponse({ status: 422, description: 'Unprocessable Entity' })
  @ApiResponse({ status: 503, description: 'Xizmat mavjud emas' })
  @ApiResponse({ status: 504, description: 'Gateway Timeout' })
  @ApiResponse({ status: 429, description: 'Too Many Requests' })
  update(@Param('id') id: string, @Body() dto: UpdateOtherProductDto) {
    return this.service.update(id, dto);
  }

  @Delete(':id')
  @ApiParam({ name: 'id', type: 'string' })
  @ApiOperation({ summary: 'Mahsulotni o‘chirish' })
  @ApiResponse({ status: 200, description: 'Mahsulot o‘chirildi 🗑️' })
  @ApiResponse({ status: 404, description: 'Mahsulot topilmadi' })
  @ApiResponse({ status: 500, description: 'Server xatosi' })
  @ApiResponse({ status: 403, description: 'Ruxsat etilmagan' })
  @ApiResponse({ status: 401, description: 'Autentifikatsiya xatosi' })
  @ApiResponse({ status: 409, description: 'Konflikt' })
  @ApiResponse({ status: 422, description: 'Unprocessable Entity' })
  @ApiResponse({ status: 503, description: 'Xizmat mavjud emas' })
  @ApiResponse({ status: 504, description: 'Gateway Timeout' })
  @ApiResponse({ status: 429, description: 'Too Many Requests' })
  remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}
