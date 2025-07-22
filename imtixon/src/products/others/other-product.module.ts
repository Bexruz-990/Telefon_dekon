// src/products/other-product.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OtherProduct } from '../entity/product.entity';
import { Brand } from 'src/categories/brands/entities/brand.entity';
import { Category } from 'src/categories/entity/category.entity';
import { OtherProductService } from './other-product.service';
import { OtherProductController } from './other-product.controller';

@Module({
  imports: [TypeOrmModule.forFeature([OtherProduct, Brand, Category])],
  controllers: [OtherProductController],
  providers: [OtherProductService],
})
export class OtherProductModule {}
