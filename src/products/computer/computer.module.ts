import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ComputerProduct } from '../entity/product.entity';
import { ComputerProductService } from './computer.service';
import { ComputerProductController } from './computer.controller';
import { Brand } from 'src/categories/brands/entities/brand.entity';
import { Category } from 'src/categories/entity/category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ComputerProduct, Brand, Category])],
  providers: [ComputerProductService],
  controllers: [ComputerProductController],
})
export class ComputerModule {}
