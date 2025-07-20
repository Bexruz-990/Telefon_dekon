import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ComputerProduct } from '../entity/product.entity';
import { ComputerProductService } from './computer.service';
import { ComputerProductController } from './computer.controller';
import { Brand } from 'src/categories/brands/entities/brand.entity';
import { Category } from 'src/categories/entity/category.entity';
import { CommentModule } from 'src/community/community.module';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([ComputerProduct, Brand, Category]),CommentModule, AuthModule],
  providers: [ComputerProductService],
  controllers: [ComputerProductController],
})
export class ComputerModule {}
