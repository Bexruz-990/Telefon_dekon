// src/products/smartphone/smartphone.controller.ts
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
import { SmartphoneProductService } from './smartphone.service';
import { CreateSmartphoneDto } from '../dto/create-product.dto';
import { UpdateSmartphoneDto } from '../dto/update-product.dto';

import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { Roles } from 'src/auth/decorators/roles.decorator';

@ApiTags('products/Smartphones')
@ApiBearerAuth('access-token')
@Controller('products/smartphones')
export class SmartphoneProductController {
  constructor(private readonly service: SmartphoneProductService) {}

  @Post()
  @Roles('Admin', 'Superadmin')
  @ApiOperation({ summary: 'Yangi smartfon yaratish' })
  @ApiResponse({ status: 201, description: 'Smartfon yaratildi ✅' })
  @ApiResponse({ status: 400, description: 'Noto‘g‘ri ma’lumotlar' })
  @ApiResponse({ status: 500, description: 'Server xatosi' })
  @ApiResponse({ status: 404, description: 'Smartfon topilmadi' })
  @ApiResponse({ status: 403, description: 'Ruxsat etilmagan' })
  @ApiResponse({ status: 401, description: 'Autentifikatsiya xatosi' })
  @ApiResponse({ status: 409, description: 'Konflikt' })
  @ApiResponse({ status: 422, description: 'Unprocessable Entity' })
  @ApiResponse({ status: 503, description: 'Xizmat mavjud emas' })
  @ApiResponse({ status: 504, description: 'Gateway Timeout' })
  @ApiResponse({ status: 429, description: 'Too Many Requests' })
  create(@Body() dto: CreateSmartphoneDto) {
    return this.service.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Barcha smartfonlar' })
  @ApiResponse({ status: 200, description: 'Barcha smartfonlar ro‘yxati' })
  @ApiResponse({ status: 404, description: 'Smartfon topilmadi' })
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
  @ApiOperation({ summary: 'Smartfonni ID orqali olish' })
  @ApiResponse({ status: 200, description: 'Bitta smartfon' })
  @ApiResponse({ status: 404, description: 'Smartfon topilmadi' })
  @ApiResponse({ status: 500, description: 'Server xatosi' })
  @ApiResponse({ status: 403, description: 'Ruxsat etilmagan' })
  @ApiResponse({ status: 401, description: 'Autentifikatsiya xatosi' })
  @ApiResponse({ status: 409, description: 'Konflikt' })
  @ApiResponse({ status: 422, description: 'Unprocessable Entity' })
  @ApiResponse({ status: 503, description: 'Xizmat mavjud emas' })
  @ApiResponse({ status: 504, description: 'Gateway Timeout' })
  @ApiResponse({ status: 429, description: 'Too Many Requests' })
  findOne(@Param('id', ) id: string) {
    return this.service.findOne(id);
  }

  @Put(':id')
  @Roles('Admin', 'Superadmin')
  @ApiOperation({ summary: 'Smartfonni yangilash' })
  @ApiResponse({ status: 200, description: 'Smartfon yangilandi ✅' })
  @ApiResponse({ status: 404, description: 'Smartfon topilmadi' })
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
    @Body() dto: UpdateSmartphoneDto,
  ) {
    return this.service.update(id, dto);
  }

  @Delete(':id')
  @Roles('Admin', 'Superadmin')
  @ApiOperation({ summary: 'Smartfonni o‘chirish' })
  @ApiResponse({ status: 200, description: 'Smartfon o‘chirildi 🗑️' })
  @ApiResponse({ status: 404, description: 'Smartfon topilmadi' })
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
  @ApiOperation({ summary: 'Smartfonni sotish (amount kamayadi)' })
  @ApiResponse({ status: 200, description: 'Sotish muvaffaqiyatli ✅' })
  @ApiResponse({ status: 404, description: 'Smartfon topilmadi' })
  @ApiResponse({ status: 500, description: 'Server xatosi' })
  @ApiResponse({ status: 403, description: 'Ruxsat etilmagan' })
  @ApiResponse({ status: 401, description: 'Autentifikatsiya xatosi' })
  @ApiResponse({ status: 409, description: 'Konflikt' })
  @ApiResponse({ status: 422, description: 'Unprocessable Entity' })
  @ApiResponse({ status: 503, description: 'Xizmat mavjud emas' })
  @ApiResponse({ status: 504, description: 'Gateway Timeout' })
  @ApiResponse({ status: 429, description: 'Too Many Requests' })
  sell(
    @Param('id', ) id: string,
    @Query('quantity') quantity: number,
  ) {
    return this.service.sell(id, Number(quantity));
  }

  @Post(':id/restock')
  @ApiOperation({ summary: 'Smartfonni omborga qo‘shish (amount oshadi)' })
  @ApiResponse({ status: 200, description: 'Omborga qo‘shildi ✅' })
  @ApiResponse({ status: 404, description: 'Smartfon topilmadi' })
  @ApiResponse({ status: 500, description: 'Server xatosi' })
  @ApiResponse({ status: 403, description: 'Ruxsat etilmagan' })
  @ApiResponse({ status: 401, description: 'Autentifikatsiya xatosi' })
  @ApiResponse({ status: 409, description: 'Konflikt' })
  @ApiResponse({ status: 422, description: 'Unprocessable Entity' })
  @ApiResponse({ status: 503, description: 'Xizmat mavjud emas' })
  @ApiResponse({ status: 504, description: 'Gateway Timeout' })
  @ApiResponse({ status: 429, description: 'Too Many Requests' })
  restock(
    @Param('id',) id: string,
    @Query('quantity') quantity: number,
  ) {
    return this.service.restock(id, Number(quantity));
  }
}
