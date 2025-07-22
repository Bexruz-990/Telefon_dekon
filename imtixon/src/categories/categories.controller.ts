// src/categories/categories.controller.ts
import {
  Controller,
  Post,
  Body,
  Get,
  Delete,
  Param,
  UseGuards,
  ParseIntPipe,
  ParseUUIDPipe,
} from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { Roles } from 'src/auth/decorators/roles.decorator';


@ApiTags('Categories')
@ApiBearerAuth('access-token') 
@Controller('categories')
export class CategoriesController {
  constructor(private readonly service: CategoriesService) {}

  @Post()
  @Roles('Admin', 'Superadmin')
  @ApiOperation({ summary: 'Yangi category yaratish' })
  @ApiResponse({ status: 201, description: 'Category muvaffaqiyatli yaratildi ✅' })
  @ApiResponse({ status: 400, description: 'Noto‘g‘ri ma’lumotlar' })
  create(@Body() dto: CreateCategoryDto) {
    return this.service.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Barcha kategoriyalarni olish' })
  @ApiResponse({ status: 200, description: 'Kategoriya ro‘yxati qaytarildi' })
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'ID orqali kategoriyani olish (brand soni bilan)' })
  @ApiResponse({ status: 200, description: 'Kategoriya topildi' })
  findOne(@Param('id', ) id: number) {
    return this.service.findOneWithBrandCount(id);
  }


  @Delete(':id')
  @Roles('Admin', 'Superadmin')
  @ApiOperation({ summary: 'ID orqali kategoriyani o‘chirish' })
  @ApiResponse({ status: 200, description: 'Kategoriya o‘chirildi 🗑️' })
  @ApiResponse({ status: 404, description: 'Kategoriya topilmadi' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.service.remove(id);
  }
}
