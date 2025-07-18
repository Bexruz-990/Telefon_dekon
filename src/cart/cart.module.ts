import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CartItem } from './entity/cart-item.entity';
import { CartService } from './cart.service';
import { CartController } from './cart.controller';
import { ProductModule } from '../products/products.module'; // Importing ProductModule

@Module({
  imports: [
    TypeOrmModule.forFeature([CartItem]),
    ProductModule,
  ],
  providers: [CartService],
  controllers: [CartController],
})
export class CartModule {}