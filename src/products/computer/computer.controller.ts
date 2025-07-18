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
  import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
  
  @ApiTags('products/Computers')
  @Controller('products/computers')
  export class ComputerProductController {
    constructor(private readonly service: ComputerProductService) {}
  
    @Post()
    @ApiOperation({ summary: 'Yangi kompyuter yaratish' })
    @ApiResponse({ status: 201, description: 'Yaratildi' })
    create(@Body() dto: CreateComputerDto) {
      return this.service.create(dto);
    }
  
    @Get()
    @ApiOperation({ summary: 'Barcha kompyuterlarni olish' })
    findAll() {
      return this.service.findAll();
    }
  
    @Get(':id')
    @ApiOperation({ summary: 'ID bo‘yicha kompyuterni olish' })
    findOne(@Param('id') id: string) {
      return this.service.findOne(id);
    }
  
    @Put(':id')
    @ApiOperation({ summary: 'Kompyuterni yangilash' })
    update(@Param('id') id: string, @Body() dto: UpdateComputerDto) {
      return this.service.update(id, dto);
    }
  
    @Delete(':id')
    @ApiOperation({ summary: 'Kompyuterni o‘chirish' })
    remove(@Param('id') id: string) {
      return this.service.remove(id);
    }
  }
  