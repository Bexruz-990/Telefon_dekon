// src/wishlist/wishlist.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Wishlist } from './entity/wishlist.entity';
import { Repository } from 'typeorm';
import { User } from 'src/auth/entity/user.entity';
import { CreateWishlistDto } from './dto/create-wishlist.dto';

@Injectable()
export class WishlistService {
  constructor(
    @InjectRepository(Wishlist)
    private wishlistRepo: Repository<Wishlist>,

    @InjectRepository(User)
    private userRepo: Repository<User>,
  ) {}

  async addToWishlist(dto: CreateWishlistDto) {
    const user = await this.userRepo.findOne({ where: { id: dto.userId } });
    if (!user) throw new NotFoundException('Foydalanuvchi topilmadi');

    // Oldin borligini tekshiramiz
    let item = await this.wishlistRepo.findOne({
      where: {
        user: { id: dto.userId },
        productId: dto.productId,
        productType: dto.productType,
      },
    });

    if (item) {
      item.quantity += dto.quantity;
      item.totalPrice = item.quantity * Number(item.price);
    } else {
      item = this.wishlistRepo.create({
        user,
        ...dto,
        totalPrice: dto.quantity * Number(dto.price),
      });
    }

    return await this.wishlistRepo.save(item);
  }

  async findUserWishlist(userId: string) {
    const items = await this.wishlistRepo.find({
      where: { user: { id: userId } },
    });

    const totalCost = items.reduce((sum, item) => sum + Number(item.totalPrice), 0);

    return {
      count: items.length,
      totalCost,
      items,
    };
  }

  async incrementQuantity(id: string) {
    const item = await this.wishlistRepo.findOneBy({ id });
    if (!item) throw new NotFoundException('Element topilmadi');
    item.quantity++;
    item.totalPrice = item.quantity * Number(item.price);
    return await this.wishlistRepo.save(item);
  }

  async decrementQuantity(id: string) {
    const item = await this.wishlistRepo.findOneBy({ id });
    if (!item) throw new NotFoundException('Element topilmadi');

    if (item.quantity > 1) {
      item.quantity--;
      item.totalPrice = item.quantity * Number(item.price);
      return await this.wishlistRepo.save(item);
    } else {
      await this.wishlistRepo.remove(item);
      return { message: 'Element o‘chirildi' };
    }
  }

  async remove(id: string) {
    const item = await this.wishlistRepo.findOneBy({ id });
    if (!item) throw new NotFoundException('Element topilmadi');
    await this.wishlistRepo.remove(item);
    return { message: 'Element o‘chirildi 🗑️' };
  }
}
