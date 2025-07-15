// src/wishlist/wishlist.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Wishlist } from './entity/wishlist.entity';
import { Repository } from 'typeorm';
import { Product } from 'src/products/entity/product.entity';
import { User } from 'src/users/entity/user.entity';
import { CreateWishlistDto } from './dto/create-wishlist.dto';

@Injectable()
export class WishlistService {
  constructor(
    @InjectRepository(Wishlist)
    private wishlistRepo: Repository<Wishlist>,
    @InjectRepository(Product)
    private productRepo: Repository<Product>,
    @InjectRepository(User)
    private userRepo: Repository<User>,
  ) {}

  async addToWishlist(dto: CreateWishlistDto) {
    const product = await this.productRepo.findOne({ where: { id: (dto.productId) } });
    const user = await this.userRepo.findOne({ where: { id: (dto.userId) } });

    if (!product) throw new NotFoundException('Mahsulot topilmadi');
    if (!user) throw new NotFoundException('Foydalanuvchi topilmadi');

    // Tekshirish: oldin bor bo‘lsa miqdorini oshiramiz
let item = await this.wishlistRepo.findOne({
  where: {
    user: { id: (dto.userId) },
    product: { id: (dto.productId) },
  },
  relations: ['user', 'product'],
});



    if (item) {
      item.quantity += dto.quantity;
      item.totalPrice = item.quantity * Number(item.price);
    } else {
      item = this.wishlistRepo.create({
        user,
        product,
        quantity: dto.quantity,
        price: product.price,
        totalPrice: dto.quantity * Number(product.price),
      });
    }

    const saved = await this.wishlistRepo.save(item);
    return {
      message: 'Wishlist yangilandi yoki qo‘shildi ✅',
      item: saved,
    };
  }

  async findUserWishlist(userId: string) {
    const items = await this.wishlistRepo.find({
      where: { user: { id: (userId) } },
      relations: ['product', 'product.brand', 'product.category'],
    });

    const totalCost = items.reduce(
      (sum, item) => sum + Number(item.totalPrice),
      0,
    );

    return {
      count: items.length,
      totalCost,
      items,
    };
  }

  async incrementQuantity(wishlistId: string) {
    const item = await this.wishlistRepo.findOne({ where: { id: wishlistId } });
    if (!item) throw new NotFoundException('Wishlist elementi topilmadi');

    item.quantity++;
    item.totalPrice = item.quantity * Number(item.price);
    return await this.wishlistRepo.save(item);
  }

  async decrementQuantity(wishlistId: string) {
    const item = await this.wishlistRepo.findOne({ where: { id: wishlistId } });
    if (!item) throw new NotFoundException('Wishlist elementi topilmadi');

    if (item.quantity > 1) {
      item.quantity--;
      item.totalPrice = item.quantity * Number(item.price);
      return await this.wishlistRepo.save(item);
    } else {
      await this.wishlistRepo.remove(item);
      return { message: 'Mahsulot wishlistdan o‘chirildi' };
    }
  }

  async remove(wishlistId: string) {
    const item = await this.wishlistRepo.findOne({ where: { id: wishlistId } });
    if (!item) throw new NotFoundException('Wishlist topilmadi');
    await this.wishlistRepo.remove(item);
    return { message: 'O‘chirildi 🗑️' };
  }
}
