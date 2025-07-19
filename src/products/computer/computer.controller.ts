import {
    Controller,
    Post,
    Body,
    Get,
    Param,
    Put,
    Delete,
  } from '@nestjs/common';
  import { ComputerProductService } from './computer.service';
  import { CreateComputerDto } from '../dto/create-product.dto';
  import { UpdateComputerDto } from '../dto/update-product.dto';
  import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { Roles } from 'src/auth/decorators/roles.decorator';
  
  @ApiTags('products/Computers')
  @ApiBearerAuth('access-token')
  @Controller('products/computers')
  export class ComputerProductController {
    constructor(private readonly service: ComputerProductService) {}
  
    @Post()
  @Roles('Admin', 'Superadmin')
    @ApiOperation({ summary: 'Yangi kompyuter yaratish' })
    @ApiResponse({ status: 201, description: 'Yaratildi' })
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
    create(@Body() dto: CreateComputerDto) {
      return this.service.create(dto);
    }
  
    @Get()
    @ApiOperation({ summary: 'Barcha kompyuterlarni olish' })
    @ApiResponse({ status: 200, description: 'Barcha kompyuterlar ro‘yxati' })
    @ApiResponse({ status: 404, description: 'Kompyuter topilmadi' })
    @ApiResponse({ status: 500, description: 'Server xatosi' })
    @ApiResponse({ status: 403, description: 'Ruxsat etilmagan' })
    @ApiResponse({ status: 401, description: 'Autentifikatsiya xatosi' })
    @ApiResponse({ status: 409, description: 'Konflikt' })
    @ApiResponse({ status: 422, description: 'Unprocessable Entity' })
    @ApiResponse({ status: 503, description: 'Xizmat mavjud emas' })
    @ApiResponse({ status: 504, description: 'Gateway Timeout' })
    @ApiResponse({ status: 429, description: 'Too Many Requests' })
    @ApiOperation({ summary: 'Barcha kompyuterlar' }) 
    findAll() {
      return this.service.findAll();
    }
  
    @Get(':id')
    @ApiOperation({ summary: 'ID bo‘yicha kompyuterni olish' })
    @ApiResponse({ status: 200, description: 'Bitta kompyuter' })
    @ApiResponse({ status: 404, description: 'Kompyuter topilmadi' })
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
  
    @Put(':id')
    @ApiOperation({ summary: 'Kompyuterni yangilash' })
    @ApiResponse({ status: 200, description: 'Kompyuter yangilandi ✅' })
    @ApiResponse({ status: 404, description: 'Kompyuter topilmadi' })
    @ApiResponse({ status: 500, description: 'Server xatosi' })
    @ApiResponse({ status: 403, description: 'Ruxsat etilmagan' })
    @ApiResponse({ status: 401, description: 'Autentifikatsiya xatosi' })
    @ApiResponse({ status: 409, description: 'Konflikt' })
    @ApiResponse({ status: 422, description: 'Unprocessable Entity' })
    @ApiResponse({ status: 503, description: 'Xizmat mavjud emas' })
    @ApiResponse({ status: 504, description: 'Gateway Timeout' })
    @ApiResponse({ status: 429, description: 'Too Many Requests' })
    update(@Param('id') id: string, @Body() dto: UpdateComputerDto) {
      return this.service.update(id, dto);
    }
  
    @Delete(':id')
  @Roles('Admin', 'Superadmin')
    @ApiOperation({ summary: 'Kompyuterni o‘chirish' })
    @ApiResponse({ status: 200, description: 'Kompyuter o‘chirildi 🗑️' })
    @ApiResponse({ status: 404, description: 'Kompyuter topilmadi' })
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
  