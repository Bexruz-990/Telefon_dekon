// src/products/gamestation/gamestation.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { GameStationController } from './gamestation.controller';
import { GameStationService } from './gamestation.service';
import { Brand } from 'src/categories/brands/entities/brand.entity';
import { Category } from 'src/categories/entity/category.entity';
import { GameStationProduct } from '../entity/product.entity';

@Module({
  imports: [TypeOrmModule.forFeature([GameStationProduct , Brand, Category])],
  controllers: [GameStationController],
  providers: [GameStationService],
})
export class GameStationModule {}
