// src/categories/categories.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from './entity/category.entity';
import { Brand } from './brands/entities/brand.entity';
import { CategoriesService } from './categories.service';
import { CategoriesController } from './categories.controller';
import { BrandsService } from './brands/brand.service';
import { BrandsController } from './brands/brand.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Category, Brand])],
  providers: [CategoriesService, BrandsService],
  controllers: [CategoriesController, BrandsController],
  exports: [TypeOrmModule],
})
export class CategoriesModule {}
