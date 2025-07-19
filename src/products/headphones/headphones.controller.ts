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
  import { HeadphonesProductService } from './headphones.service';

  import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { CreateHeadphonesDto } from '../dto/create-product.dto';
import { UpdateHeadphonesDto } from '../dto/update-product.dto';
import { Roles } from 'src/auth/decorators/roles.decorator';
  
  @ApiTags('products/Headphones')
  @Controller('products/headphones')
@ApiBearerAuth('access-token')
  export class HeadphonesProductController {
    constructor(private readonly service: HeadphonesProductService) {}
  
    @Post()
  @Roles('Admin', 'Superadmin')
    @ApiResponse({ status: 201, description: 'Naushnik yaratildi ✅' })
    @ApiResponse({ status: 400, description: 'Noto‘g‘ri ma’lumotlar' })
    @ApiResponse({ status: 500, description: 'Server xatosi' })
    @ApiResponse({ status: 404, description: 'Naushnik topilmadi' })
    @ApiResponse({ status: 403, description: 'Ruxsat etilmagan' })
    @ApiResponse({ status: 401, description: 'Autentifikatsiya xatosi' })
    @ApiResponse({ status: 409, description: 'Konflikt' })
    @ApiResponse({ status: 422, description: 'Unprocessable Entity' })
    @ApiResponse({ status: 503, description: 'Xizmat mavjud emas' })
    @ApiResponse({ status: 504, description: 'Gateway Timeout' })
    @ApiResponse({ status: 429, description: 'Too Many Requests' })
    @ApiOperation({ summary: 'Naushnik yaratish' })
    create(@Body() dto: CreateHeadphonesDto) {
      return this.service.create(dto);
    }
  
    @Get()
    @ApiResponse({ status: 200, description: 'Barcha naushniklar ro‘yxati' })
    @ApiResponse({ status: 404, description: 'Naushnik topilmadi' })
    @ApiResponse({ status: 500, description: 'Server xatosi' })
    @ApiResponse({ status: 403, description: 'Ruxsat etilmagan' })
    @ApiResponse({ status: 401, description: 'Autentifikatsiya xatosi' })
    @ApiResponse({ status: 409, description: 'Konflikt' })
    @ApiResponse({ status: 422, description: 'Unprocessable Entity' })
    @ApiResponse({ status: 503, description: 'Xizmat mavjud emas' })
    @ApiResponse({ status: 504, description: 'Gateway Timeout' })
      @ApiResponse({ status: 429, description: 'Too Many Requests' })
    
    @ApiOperation({ summary: 'Barcha naushniklar' })
    findAll() {
      return this.service.findAll();
    }
  
    @Get(':id')
    @ApiResponse({ status: 200, description: 'Bitta naushnik' })
    @ApiResponse({ status: 404, description: 'Naushnik topilmadi' })
    @ApiResponse({ status: 500, description: 'Server xatosi' })
    @ApiResponse({ status: 403, description: 'Ruxsat etilmagan' })
    @ApiResponse({ status: 401, description: 'Autentifikatsiya xatosi' })
    @ApiResponse({ status: 409, description: 'Konflikt' })
    @ApiResponse({ status: 422, description: 'Unprocessable Entity' })
    @ApiResponse({ status: 503, description: 'Xizmat mavjud emas' })
    @ApiResponse({ status: 504, description: 'Gateway Timeout' })
    @ApiResponse({ status: 429, description: 'Too Many Requests' })
    @ApiOperation({ summary: 'Bitta naushnik olish' })
    findOne(@Param('id', ) id: string) {
      return this.service.findOne(id);
    }
  
    @Put(':id')
  @Roles('Admin', 'Superadmin')
    @ApiResponse({ status: 200, description: 'Naushnik yangilandi ✅' })
    @ApiResponse({ status: 404, description: 'Naushnik topilmadi' })
    @ApiResponse({ status: 500, description: 'Server xatosi' })
    @ApiResponse({ status: 403, description: 'Ruxsat etilmagan' })
    @ApiResponse({ status: 401, description: 'Autentifikatsiya xatosi' })
    @ApiResponse({ status: 409, description: 'Konflikt' })
    @ApiResponse({ status: 422, description: 'Unprocessable Entity' })
    @ApiResponse({ status: 503, description: 'Xizmat mavjud emas' })
    @ApiResponse({ status: 504, description: 'Gateway Timeout' })
    @ApiResponse({ status: 429, description: 'Too Many Requests' })
    @ApiOperation({ summary: 'Naushnik yangilash' })
    update(
      @Param('id', ) id: string,
      @Body() dto: UpdateHeadphonesDto,
    ) {
      return this.service.update(id, dto);
    }
  
    @Delete(':id')
  @Roles('Admin', 'Superadmin')
    @ApiResponse({ status: 200, description: 'Naushnik o‘chirildi 🗑️' })
    @ApiResponse({ status: 404, description: 'Naushnik topilmadi' })
    @ApiResponse({ status: 500, description: 'Server xatosi' })
    @ApiResponse({ status: 403, description: 'Ruxsat etilmagan' })
    @ApiResponse({ status: 401, description: 'Autentifikatsiya xatosi' })
    @ApiResponse({ status: 409, description: 'Konflikt' })
    @ApiResponse({ status: 422, description: 'Unprocessable Entity' })
    @ApiResponse({ status: 503, description: 'Xizmat mavjud emas' })
    @ApiResponse({ status: 504, description: 'Gateway Timeout' })
    @ApiResponse({ status: 429, description: 'Too Many Requests' })
    @ApiOperation({ summary: 'Naushnik o‘chirish' })
    remove(@Param('id', ) id: string) {
      return this.service.remove(id);
    }
  
    @Post(':id/sell')
    @ApiResponse({ status: 200, description: 'Naushnik sotildi ✅' })
    @ApiResponse({ status: 404, description: 'Naushnik topilmadi' })
    @ApiResponse({ status: 500, description: 'Server xatosi' })
    @ApiResponse({ status: 403, description: 'Ruxsat etilmagan' })
    @ApiResponse({ status: 401, description: 'Autentifikatsiya xatosi' })
    @ApiResponse({ status: 409, description: 'Konfl ikt' })
    @ApiResponse({ status: 422, description: 'Unprocessable Entity' })
    @ApiResponse({ status: 503, description: 'Xizmat mavjud emas' })
    @ApiResponse({ status: 504, description: 'Gateway Timeout' })
    @ApiResponse({ status: 429, description: 'Too Many Requests' })
    @ApiOperation({ summary: 'Naushnik sotish (amount kamayadi)' })
    sell(@Param('id', ) id: string, @Query('quantity') quantity: number) {
      return this.service.sell(id, Number(quantity));
    }
  
    @Post(':id/restock')
    @ApiResponse({ status: 200, description: 'Naushnik omborga qo‘shildi ✅' })
    @ApiResponse({ status: 404, description: 'Naushnik topilmadi' })
    @ApiResponse({ status: 500, description: 'Server xatosi' })
    @ApiResponse({ status: 403, description: 'Ruxsat etilmagan' })
    @ApiResponse({ status: 401, description: 'Autentifikatsiya xatosi' })
    @ApiResponse({ status: 409, description: 'Konflikt' })
    @ApiResponse({ status: 422, description: 'Unprocessable Entity' })
    @ApiResponse({ status: 503, description: 'Xizmat mavjud emas' })
    @ApiResponse({ status: 504, description: 'Gateway Timeout' })
    @ApiResponse({ status: 429, description: 'Too Many Requests' })
    @ApiOperation({ summary: 'Naushnik omborga qo‘shish (amount oshadi)' })
    restock(@Param('id', ) id: string, @Query('quantity') quantity: number) {
      return this.service.restock(id, Number(quantity));
    }
  }
  