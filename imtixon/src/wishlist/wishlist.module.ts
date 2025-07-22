// src/wishlist/wishlist.module.ts
import { Module } from '@nestjs/common';
import { WishlistService } from './wishlist.service';
import { WishlistController } from './wishlist.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Wishlist } from './entity/wishlist.entity';
import { User } from 'src/auth/entity/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Wishlist, User])],
  controllers: [WishlistController],
  providers: [WishlistService],
})
export class WishlistModule {}
