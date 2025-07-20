import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { CategoriesModule } from './categories/categories.module';
import {  CartModule} from './cart/cart.module';
import { WishlistModule } from './wishlist/wishlist.module';
// import { CommentModule } from './community/community.module';
import { GameStationModule } from './products/gamestation/gamestation.module';
import { HeadphonesModule } from './products/headphones/headphones.module';
import { ComputerModule } from './products/computer/computer.module';
import { SmartphoneModule } from './products/smartphone/smartphone.module';
import { SmartwatchModule } from './products/smartwatch/smartwatch.module';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { RolesGuard } from './auth/guards/roles.guard';
import { OtherProductModule } from './products/others/other-product.module';

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
    CategoriesModule,
    CartModule,
    WishlistModule,
    // CommentModule,
    GameStationModule,
    HeadphonesModule,
    ComputerModule,
    SmartphoneModule,
    SmartwatchModule,
    OtherProductModule

  ],

})
export class AppModule {}
