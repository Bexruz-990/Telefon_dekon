import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './entity/order.entity';
import { OrdersService } from './order.service';
import { OrdersController } from './order.controller';

import {ProductModule} from 'src/products/products.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Order]),
    ProductModule,
  ],
  providers: [OrdersService],
  controllers: [OrdersController],
})
export class OrdersModule {}
