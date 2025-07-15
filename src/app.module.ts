import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { AuthModule } from './auth/auth.module';
import { ProductModule } from './products/products.module';
import { CategoryModule } from './categories/categories.module';
import { UsersModule } from './users/users.module';
import { OrdersModule } from './orders/orders.module';
import { CartModule } from './cart/cart.module';
import { WishlistModule } from './wishlist/wishlist.module';
import { CommunityModule } from './community/community.module';
import { BrandModule } from './categories/brands/brand.module';

@Module({
  imports: [
    // ✅ ENV o‘qish uchun
    ConfigModule.forRoot({
      isGlobal: true, // Har joyda ishlashi uchun
    }),

    // ✅ DATABASE ulanishi
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: config.get<'postgres'>('DB_TYPE'), // postgres
        host: config.get<string>('DB_HOST'),
        port: config.get<number>('DB_PORT'),
        username: config.get<string>('DB_USERNAME'),
        password: config.get<string>('DB_PASSWORD'),
        database: config.get<string>('DB_NAME'),
        autoLoadEntities: true,
        synchronize: true,
      }),
    }),

    // ✅ Boshqa modullar
    AuthModule,
    BrandModule,
    ProductModule,
    CategoryModule,
    UsersModule,
    OrdersModule,
    CartModule,
    WishlistModule,
    CommunityModule,
  ],
})
export class AppModule {}
