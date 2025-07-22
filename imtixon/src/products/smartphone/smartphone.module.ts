import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SmartphoneProduct } from '../entity/product.entity';
import { SmartphoneProductController } from './smartphone.controller';
import { SmartphoneProductService } from './smartphone.service';
import { Brand } from 'src/categories/brands/entities/brand.entity';
import { Category } from 'src/categories/entity/category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SmartphoneProduct, Brand, Category])],
  controllers: [SmartphoneProductController],
  providers: [SmartphoneProductService],
})
export class SmartphoneModule {}
