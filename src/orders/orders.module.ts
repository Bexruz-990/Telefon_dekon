import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './entity/order.entity';
import { OrdersService } from './order.service';
import { OrdersController } from './order.controller';
import { UsersModule } from '../users/users.module';
import { ProductsModule } from '../products/products.module'; // 👈 BU YERDA

@Module({
  imports: [
    TypeOrmModule.forFeature([Order]),
    UsersModule,
    ProductsModule, // 👈 SHU QATORNI QO‘SHING
  ],
  providers: [OrdersService],
  controllers: [OrdersController],
})
export class OrdersModule {}
