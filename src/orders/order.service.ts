import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from './entity/order.entity';
import { UsersService } from '../users/user.service';
import { ProductService } from '../products/products.service';
import { CreateOrderDto } from './dto/create-order.dto';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order)
    private readonly orderRepo: Repository<Order>,
    private readonly usersService: UsersService,
    private readonly productsService: ProductService,
  ) {}

  async createOrder(userId: number, dto: CreateOrderDto) {
    const user = await this.usersService.findById(userId);
    if (!user) throw new NotFoundException('User not found');

    const products = await Promise.all(
      dto.productIds.map(async (id) => {
        const product = await this.productsService.findOne(String(id));
        if (!product) throw new NotFoundException(`Product with ID ${id} not found`);
        return product;
      }),
    );

    const order = this.orderRepo.create({
      user,
      products,
      status: 'pending',
    });

    return this.orderRepo.save(order);
  }

  findAll() {
    return this.orderRepo.find({
      relations: ['user', 'products'],
    });
  }

  async findOne(id: number) {
    const order = await this.orderRepo.findOne({
      where: { id },
      relations: ['user', 'products'],
    });
    if (!order) throw new NotFoundException('Order not found');
    return order;
  }

  async getUserOrders(userId: number) {
    const user = await this.usersService.findById(userId);
    if (!user) throw new NotFoundException('User not found');

    return this.orderRepo.find({
      where: { user: { id: String(userId) } },
      relations: ['products'],
    });
  }

  async updateStatus(id: number, status: string) {
    const order = await this.findOne(id);
    order.status = status;
    return this.orderRepo.save(order);
  }

  async remove(id: number) {
    const order = await this.findOne(id);
    return this.orderRepo.remove(order);
  }
}
