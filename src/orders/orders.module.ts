import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './entity/order.entity';
import { OrdersService } from './order.service';
import { OrdersController } from './order.controller';

import {ProductModule} from 'src/products/products.module';
import { User } from 'src/auth/entity/user.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Order, User]),
    ProductModule,
  ],
  providers: [OrdersService],
  controllers: [OrdersController],
})
export class OrdersModule {}
