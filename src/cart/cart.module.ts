// src/cart/cart.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cart } from './entity/cart-item.entity';
import { CartService } from './cart.service';
import { CartController } from './cart.controller';
import { User } from 'src/auth/entity/user.entity';

// Product entity'lar
import { SmartphoneProduct } from '../products/entity/product.entity';
import { ComputerProduct } from '../products/entity/product.entity';
import { HeadphonesProduct } from '../products/entity/product.entity';
import { SmartwatchProduct } from '../products/entity/product.entity';
import { GameStationProduct } from '../products/entity/product.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Cart,
      User,
      SmartphoneProduct,
      ComputerProduct,
      HeadphonesProduct,
      SmartwatchProduct,
      GameStationProduct,
    ]),
  ],
  controllers: [CartController],
  providers: [CartService],
})
export class CartModule {}
