// src/products/headphones/headphones.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { HeadphonesProductController } from './headphones.controller';
import { HeadphonesProductService } from './headphones.service';
import { Brand } from 'src/categories/brands/entities/brand.entity';
import { Category } from 'src/categories/entity/category.entity';
import { HeadphonesProduct } from '../entity/product.entity';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([HeadphonesProduct, Brand, Category]), AuthModule],
  controllers: [HeadphonesProductController],
  providers: [HeadphonesProductService],
})
export class HeadphonesModule {}
