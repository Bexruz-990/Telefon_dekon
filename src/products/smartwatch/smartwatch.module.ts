import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SmartwatchProductController } from './smartwatch.controller';
import { SmartwatchProductService } from './smartwatch.service';
import { Brand } from 'src/categories/brands/entities/brand.entity';
import { Category } from 'src/categories/entity/category.entity';
import { SmartwatchProduct } from '../entity/product.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SmartwatchProduct, Brand, Category])],
  controllers: [SmartwatchProductController],
  providers: [SmartwatchProductService],
})
export class SmartwatchModule {}
