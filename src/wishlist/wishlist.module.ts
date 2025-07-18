import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Wishlist } from './entity/wishlist.entity';
import { WishlistService } from './wishlist.service';
import { WishlistController } from './wishlist.controller';
import { Product } from '../products/entity/product.entity';
import { User } from '../users/entity/user.entity';
import { UsersModule } from '../users/users.module';
import { ProductModule } from '../products/products.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Wishlist, Product, User]), // 👈 SHART!
    UsersModule,
    ProductModule,
  ],
  providers: [WishlistService],
  controllers: [WishlistController],
})
export class WishlistModule {}
