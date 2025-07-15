// src/categories/category.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from './entity/category.entity';
import { CategoryService } from './categories.service';
import { CategoryController } from './categories.controller';
import { Brand } from './brands/entities/brand.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Category, Brand])],
  providers: [CategoryService],
  controllers: [CategoryController],
  exports: [CategoryService],
})
export class CategoryModule {}
