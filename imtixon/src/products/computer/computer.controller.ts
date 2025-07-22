import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Put,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { ComputerProductService } from './computer.service';
import { CreateComputerDto } from '../dto/create-product.dto';
import { UpdateComputerDto } from '../dto/update-product.dto';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';

@ApiTags('products/Computers')
@ApiBearerAuth('access-token')
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('products/computers')
export class ComputerProductController {
  constructor(private readonly service: ComputerProductService) {}

  @Post()
  @Roles('Admin', 'Superadmin')
  @ApiOperation({ summary: 'Yangi kompyuter yaratish' })
  @ApiResponse({ status: 201, description: 'Kompyuter yaratildi ✅' })
  @ApiResponse({ status: 400, description: 'Noto‘g‘ri ma’lumotlar' })
  @ApiResponse({ status: 403, description: 'Ruxsat etilmagan' })
  @ApiResponse({ status: 401, description: 'Token noto‘g‘ri yoki muddati o‘tgan' })
  create(@Body() dto: CreateComputerDto) {
    return this.service.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Barcha kompyuterlarni olish' })
  @ApiResponse({ status: 200, description: 'Barcha kompyuterlar ro‘yxati' })
  @ApiResponse({ status: 404, description: 'Kompyuterlar topilmadi' })
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'ID bo‘yicha kompyuterni olish' })
  @ApiResponse({ status: 200, description: 'Topilgan kompyuter' })
  @ApiResponse({ status: 404, description: 'Kompyuter topilmadi' })
  findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @Put(':id')
  @Roles('Admin', 'Superadmin')
  @ApiOperation({ summary: 'Kompyuterni yangilash' })
  @ApiResponse({ status: 200, description: 'Kompyuter yangilandi ✅' })
  @ApiResponse({ status: 404, description: 'Kompyuter topilmadi' })
  @ApiResponse({ status: 403, description: 'Ruxsat etilmagan' })
  @ApiResponse({ status: 401, description: 'Token xato' })
  update(@Param('id') id: string, @Body() dto: UpdateComputerDto) {
    return this.service.update(id, dto);
  }

  @Delete(':id')
  @Roles('Admin', 'Superadmin')
  @ApiOperation({ summary: 'Kompyuterni o‘chirish' })
  @ApiResponse({ status: 200, description: 'Kompyuter o‘chirildi 🗑️' })
  @ApiResponse({ status: 404, description: 'Kompyuter topilmadi' })
  @ApiResponse({ status: 403, description: 'Ruxsat etilmagan' })
  @ApiResponse({ status: 401, description: 'Token xato' })
  remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}
