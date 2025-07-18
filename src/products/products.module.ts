import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductService } from './products.service';
import { ProductController } from './products.controller';
import { Product } from './entity/product.entity';
import { Category } from 'src/categories/entity/category.entity';
import { Brand } from 'src/categories/brands/entities/brand.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Product,  Brand, Category])],
  controllers: [ProductController],
  providers: [ProductService],
  exports: [ProductService],
})
export class ProductModule {}
