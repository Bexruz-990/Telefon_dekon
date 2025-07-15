import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CartItem } from './entity/cart-item.entity';
import { AddItemDto } from './dto/add-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { UsersService } from '../users/user.service';
import { ProductsService } from '../products/products.service';
import { User } from '../users/entity/user.entity';
import { Product } from '../products/entity/product.entity';

@Injectable()
export class CartService {
  constructor(
    @InjectRepository(CartItem)
    private repo: Repository<CartItem>,
    private usersService: UsersService,
    private productsService: ProductsService,
  ) {}

  async addItem(userId: number, dto: AddItemDto) {
    const user = await this.usersService.findById(userId);
    if (user == null) throw new NotFoundException('User not found');
    let item = await this.repo.findOne({ where: { user: { id: userId }, product: { id: dto.productId } } });
    if (item) {
      item.quantity += dto.quantity;
    } else {
      const product = await this.productsService.findOne(dto.productId);
      if (!product) throw new NotFoundException('Product not found');
      item = this.repo.create({ user: user as User, product: product as Product, quantity: dto.quantity });
    }
    return this.repo.save(item);
  }

  getUserCart(userId: number) {
    return this.repo.find({ where: { user: { id: userId } }, relations: ['product'] });
  }

  async updateItem(id: number, dto: UpdateItemDto) {
    const item = await this.repo.findOneBy({ id });
    if (!item) throw new NotFoundException('Item not found');
    item.quantity = dto.quantity;
    return this.repo.save(item);
  }

  async removeItem(id: number) {
    const item = await this.repo.findOneBy({ id });
    if (!item) throw new NotFoundException('Item not found');
    return this.repo.remove(item);
  }
}