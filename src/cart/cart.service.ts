import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CartItem } from './entity/cart-item.entity';
import { CreateCartDto } from './dto/add-item.dto';
import { User } from 'src/auth/entity/user.entity';
import { Product } from 'src/products/entity/product.entity';

@Injectable()
export class CartService {
  constructor(
    @InjectRepository(CartItem)
    private cartRepo: Repository<CartItem>,
  ) {}

  async addToCart(dto: CreateCartDto) {
    const existing = await this.cartRepo.findOne({
      where: {
        user: { id: dto.userId },
        product: { id: dto.productId },
      },
    });

    if (existing) {
      existing.quantity += dto.quantity;
      return this.cartRepo.save(existing);
    }

    const newItem = this.cartRepo.create({
      user: { id: dto.userId } as User,
      product: { id: dto.productId } as Product,
      quantity: dto.quantity,
    });

    return this.cartRepo.save(newItem);
  }

  async getUserCart(userId: string) {
    const items = await this.cartRepo.find({
      where: { user: { id: userId } },
      relations: ['product'],
    });

    const total = items.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

    return {
      count: items.length,
      total,
      items,
    };
  }

  async updateQuantity(id: string, quantity: number) {
    const item = await this.cartRepo.findOneBy({ id });
    if (!item) throw new NotFoundException('Savatcha topilmadi');

    item.quantity = quantity;
    return this.cartRepo.save(item);
  }

  async removeItem(id: string) {
    const item = await this.cartRepo.findOneBy({ id });
    if (!item) throw new NotFoundException('Element topilmadi');
    return this.cartRepo.remove(item);
  }

  async clearUserCart(userId: string) {
    const items = await this.cartRepo.find({
      where: { user: { id: userId } },
    });

    return this.cartRepo.remove(items);
  }
}
