// src/cart/cart.service.ts
import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cart } from './entity/cart-item.entity';
import { Repository } from 'typeorm';
import { User } from 'src/auth/entity/user.entity';
import { CreateCartDto } from './dto/add-item.dto';

// Har xil product entity'lar
import { SmartphoneProduct } from '../products/entity/product.entity';
import { ComputerProduct } from '../products/entity/product.entity';
import { HeadphonesProduct } from '../products/entity/product.entity';
import { SmartwatchProduct } from '../products/entity/product.entity';
import { GameStationProduct } from '../products/entity/product.entity';

@Injectable()
export class CartService {
  constructor(
    @InjectRepository(Cart)
    private cartRepo: Repository<Cart>,

    @InjectRepository(User)
    private userRepo: Repository<User>,

    @InjectRepository(SmartphoneProduct)
    private smartphoneRepo: Repository<SmartphoneProduct>,

    @InjectRepository(ComputerProduct)
    private computerRepo: Repository<ComputerProduct>,

    @InjectRepository(HeadphonesProduct)
    private headphoneRepo: Repository<HeadphonesProduct>,

    @InjectRepository(SmartwatchProduct)
    private smartwatchRepo: Repository<SmartwatchProduct>,

    @InjectRepository(GameStationProduct)
    private gamestationRepo: Repository<GameStationProduct>,
  ) {}

  private async getProductByType(type: string, id: string) {
    switch (type) {
      case 'smartphone':
        return this.smartphoneRepo.findOne({ where: { id } });
      case 'computer':
        return this.computerRepo.findOne({ where: { id } });
      case 'headphones':
        return this.headphoneRepo.findOne({ where: { id } });
      case 'smartwatch':
        return this.smartwatchRepo.findOne({ where: { id } });
      case 'gamestation':
        return this.gamestationRepo.findOne({ where: { id } });
      default:
        throw new BadRequestException('Noto‘g‘ri product turi');
    }
  }

  async addToCart(dto: CreateCartDto) {
    const user = await this.userRepo.findOne({ where: { id: dto.userId } });
    if (!user) throw new NotFoundException('Foydalanuvchi topilmadi');

    const product = await this.getProductByType(dto.productType, dto.productId);
    if (!product) throw new NotFoundException('Mahsulot topilmadi');

    if (dto.quantity > product.amount) {
      throw new BadRequestException(`Omborda faqat ${product.amount} ta mavjud`);
    }

    let item = await this.cartRepo.findOne({
      where: {
        user: { id: dto.userId },
        productId: dto.productId,
        productType: dto.productType,
      },
      relations: ['user'],
    });

    if (item) {
      const newQuantity = item.quantity + dto.quantity;
      if (newQuantity > product.amount) {
        throw new BadRequestException('Zaxiradan ortiq qo‘shib bo‘lmaydi');
      }

      item.quantity = newQuantity;
      item.totalPrice = item.quantity * Number(item.price);
    } else {
      item = this.cartRepo.create({
        user,
        productId: dto.productId,
        productType: dto.productType,
        name: dto.name,
        price: dto.price,
        quantity: dto.quantity,
        totalPrice: dto.price * dto.quantity,
        imageUrl: dto.imageUrl,
      });
    }

    const saved = await this.cartRepo.save(item);
    return {
      message: 'Savat yangilandi yoki qo‘shildi ✅',
      item: saved,
    };
  }

  async getUserCart(userId: string) {
    const items = await this.cartRepo.find({
      where: { user: { id: userId } },
    });

    const totalCost = items.reduce((sum, item) => sum + Number(item.totalPrice), 0);

    return {
      count: items.length,
      totalCost,
      items,
    };
  }

  async increment(cartId: string) {
    const item = await this.cartRepo.findOne({ where: { id: cartId } });
    if (!item) throw new NotFoundException('Savat elementi topilmadi');

    const product = await this.getProductByType(item.productType, item.productId);
    if (!product) throw new NotFoundException('Mahsulot topilmadi');

    if (item.quantity + 1 > product.amount) {
      throw new BadRequestException('Omborda yetarli mahsulot yo‘q');
    }

    item.quantity++;
    item.totalPrice = item.quantity * Number(item.price);
    return await this.cartRepo.save(item);
  }

  async decrement(cartId: string) {
    const item = await this.cartRepo.findOne({ where: { id: cartId } });
    if (!item) throw new NotFoundException('Savat topilmadi');

    if (item.quantity > 1) {
      item.quantity--;
      item.totalPrice = item.quantity * Number(item.price);
      return await this.cartRepo.save(item);
    } else {
      await this.cartRepo.remove(item);
      return { message: 'Savatdan mahsulot o‘chirildi' };
    }
  }

  async remove(cartId: string) {
    const item = await this.cartRepo.findOne({ where: { id: cartId } });
    if (!item) throw new NotFoundException('Savat elementi topilmadi');
    await this.cartRepo.remove(item);
    return { message: 'O‘chirildi 🗑️' };
  }
}
