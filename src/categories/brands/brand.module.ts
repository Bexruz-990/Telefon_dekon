// src/categories/brands/brand.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Brand } from './entities/brand.entity';
import { BrandService } from './brand.service';
import { BrandController } from './brand.controller';
import { Category } from '../entity/category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Brand, Category])],
  controllers: [BrandController],
  providers: [BrandService],
})
export class BrandModule {}
