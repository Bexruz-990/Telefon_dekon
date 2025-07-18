import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { AuthModule } from './auth/auth.module';
import {ProductModule} from './products/products.module';
import { CategoryModule } from './categories/categories.module';
import { OrdersModule } from './orders/orders.module';
import {  CartModule} from './cart/cart.module';
import { WishlistModule } from './wishlist/wishlist.module';
import { CommunityModule } from './community/community.module';
import { BrandModule } from './categories/brands/brand.module';

@Module({
  imports: [
    // ✅ ENV o‘qish uchun
    ConfigModule.forRoot({
      isGlobal: true, // Har joyda ishlashi uchun
    }),


    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: '2007',
        database: 'estore',
        autoLoadEntities: true,
        synchronize: true,
      }),
    }),


    AuthModule,
    BrandModule,
    ProductModule,
    CategoryModule,
    OrdersModule,
    CartModule,
    WishlistModule,
    CommunityModule,
  ],
})
export class AppModule {}
