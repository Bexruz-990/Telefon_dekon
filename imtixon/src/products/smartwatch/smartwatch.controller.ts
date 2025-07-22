// src/products/smartwatch/smartwatch.controller.ts
import {
  Controller,
  Post,
  Get,
  Param,
  Body,
  Put,
  Delete,
  Query
} from '@nestjs/common';
import { SmartwatchProductService } from './smartwatch.service';

import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { CreateSmartwatchDto } from '../dto/create-product.dto';
import { UpdateSmartwatchDto } from '../dto/update-product.dto';
import { Roles } from 'src/auth/decorators/roles.decorator';

@ApiTags('products/Smart Watches')
@ApiBearerAuth('access-token')
@Controller('products/smartwatches')
export class SmartwatchProductController {
  constructor(private readonly service: SmartwatchProductService) { }

  @Post()
  @Roles('Admin', 'Superadmin')
  @ApiOperation({ summary: 'Smart Watch yaratish' })
  @ApiResponse({ status: 201, description: 'Smart Watch yaratildi ✅' })
  @ApiResponse({ status: 400, description: 'Noto‘g‘ri ma’lumotlar' })
  @ApiResponse({ status: 500, description: 'Server xatosi' })
  @ApiResponse({ status: 404, description: 'Smart Watch topilmadi' })
  @ApiResponse({ status: 403, description: 'Ruxsat etilmagan' })
  @ApiResponse({ status: 401, description: 'Autentifikatsiya xatosi' })
  @ApiResponse({ status: 409, description: 'Konflikt' })
  @ApiResponse({ status: 422, description: 'Unprocessable Entity' })
  @ApiResponse({ status: 503, description: 'Xizmat mavjud emas' })
  @ApiResponse({ status: 504, description: 'Gateway Timeout' })
  @ApiResponse({ status: 429, description: 'Too Many Requests' })
  create(@Body() dto: CreateSmartwatchDto) {
    return this.service.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Barcha Smart Watch lar' })
  @ApiResponse({ status: 200, description: 'Barcha Smart Watch lar ro‘yxati' })
  @ApiResponse({ status: 404, description: 'Smart Watch topilmadi' })
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
  @ApiOperation({ summary: 'Bitta Smart Watch olish' })
  @ApiResponse({ status: 200, description: 'Bitta Smart Watch' })
  @ApiResponse({ status: 404, description: 'Smart Watch topilmadi' })
  @ApiResponse({ status: 500, description: 'Server xatosi' })
  @ApiResponse({ status: 403, description: 'Ruxsat etilmagan' })
  @ApiResponse({ status: 401, description: 'Autentifikatsiya xatosi' })
  @ApiResponse({ status: 409, description: 'Konflikt' })
  @ApiResponse({ status: 422, description: 'Unprocessable Entity' })
  @ApiResponse({ status: 503, description: 'Xizmat mavjud emas' })
  @ApiResponse({ status: 504, description: 'Gateway Timeout' })
  @ApiResponse({ status: 429, description: 'Too Many Requests' })
  findOne(@Param('id',) id: string) {
    return this.service.findOne(id);
  }

  @Put(':id')
  @Roles('Admin', 'Superadmin')
  @ApiOperation({ summary: 'Smart Watch yangilash' })
  @ApiResponse({ status: 200, description: 'Smart Watch yangilandi ✅' })
  @ApiResponse({ status: 404, description: 'Smart Watch topilmadi' })
  @ApiResponse({ status: 500, description: 'Server xatosi' })
  @ApiResponse({ status: 403, description: 'Ruxsat etilmagan' })
  @ApiResponse({ status: 401, description: 'Autentifikatsiya xatosi' })
  @ApiResponse({ status: 409, description: 'Konflikt' })
  @ApiResponse({ status: 422, description: 'Unprocessable Entity' })
  @ApiResponse({ status: 503, description: 'Xizmat mavjud emas' })
  @ApiResponse({ status: 504, description: 'Gateway Timeout' })
  @ApiResponse({ status: 429, description: 'Too Many Requests' })
  update(
    @Param('id',) id: string,
    @Body() dto: UpdateSmartwatchDto,
  ) {
    return this.service.update(id, dto);
  }

  @Delete(':id')
  @Roles('Admin', 'Superadmin')
  @ApiOperation({ summary: 'Smart Watch o‘chirish' })
  @ApiResponse({ status: 200, description: 'Smart Watch o‘chirildi 🗑️' })
  @ApiResponse({ status: 404, description: 'Smart Watch topilmadi' })
  @ApiResponse({ status: 500, description: 'Server xatosi' })
  @ApiResponse({ status: 403, description: 'Ruxsat etilmagan' })
  @ApiResponse({ status: 401, description: 'Autentifikatsiya xatosi' })
  @ApiResponse({ status: 409, description: 'Konflikt' })
  @ApiResponse({ status: 422, description: 'Unprocessable Entity' })
  @ApiResponse({ status: 503, description: 'Xizmat mavjud emas' })
  @ApiResponse({ status: 504, description: 'Gateway Timeout' })
  @ApiResponse({ status: 429, description: 'Too Many Requests' })
  remove(@Param('id',) id: string) {
    return this.service.remove(id);
  }

  @Post(':id/sell')
  @ApiOperation({ summary: 'Sotish (amount kamayadi)' })
  @ApiResponse({ status: 200, description: 'Sotish muvaffaqiyatli ✅' })
  @ApiResponse({ status: 404, description: 'Smart Watch topilmadi' })
  @ApiResponse({ status: 500, description: 'Server xatosi' })
  @ApiResponse({ status: 403, description: 'Ruxsat etilmagan' })
  @ApiResponse({ status: 401, description: 'Autentifikatsiya xatosi' })
  @ApiResponse({ status: 409, description: 'Konflikt' })
  @ApiResponse({ status: 422, description: 'Unprocessable Entity' })
  @ApiResponse({ status: 503, description: 'Xizmat mavjud emas' })
  @ApiResponse({ status: 504, description: 'Gateway Timeout' })
  @ApiResponse({ status: 429, description: 'Too Many Requests' })
  sell(@Param('id',) id: string, @Query('quantity') quantity: number) {
    return this.service.sell(id, Number(quantity));
  }

  @Post(':id/restock')
  @ApiOperation({ summary: 'Omborga qo‘shish (amount oshadi)' })
  @ApiResponse({ status: 200, description: 'Omborga qo‘shildi ✅' })
  @ApiResponse({ status: 404, description: 'Smart Watch topilmadi' })
  @ApiResponse({ status: 500, description: 'Server xatosi' })
  @ApiResponse({ status: 403, description: 'Ruxsat etilmagan' })
  @ApiResponse({ status: 401, description: 'Autentifikatsiya xatosi' })
  @ApiResponse({ status: 409, description: 'Konflikt' })
  @ApiResponse({ status: 422, description: 'Unprocessable Entity' })
  @ApiResponse({ status: 503, description: 'Xizmat mavjud emas' })
  @ApiResponse({ status: 504, description: 'Gateway Timeout' })
  @ApiResponse({ status: 429, description: 'Too Many Requests' })
  restock(@Param('id',) id: string, @Query('quantity') quantity: number) {
    return this.service.restock(id, Number(quantity));
  }
}
