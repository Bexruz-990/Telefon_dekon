// src/products/headphones/headphones.service.ts

import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { HeadphonesProduct } from '../entity/product.entity';
import { CreateHeadphonesDto } from '../dto/create-product.dto';
import { UpdateHeadphonesDto } from '../dto/update-product.dto';
import { Brand } from 'src/categories/brands/entities/brand.entity';
import { Category } from 'src/categories/entity/category.entity';

@Injectable()
export class HeadphonesProductService {
  constructor(
    @InjectRepository(HeadphonesProduct)
    private readonly productRepo: Repository<HeadphonesProduct>,

    @InjectRepository(Brand)
    private readonly brandRepo: Repository<Brand>,

    @InjectRepository(Category)
    private readonly categoryRepo: Repository<Category>,
  ) {}

  async create(dto: CreateHeadphonesDto) {
    const brand = await this.brandRepo.findOneBy({ id: +dto.brandId });
    if (!brand) throw new NotFoundException('Brand topilmadi');

    const category = await this.categoryRepo.findOneBy({ id: dto.categoryId });
    if (!category) throw new NotFoundException('Category topilmadi');

    const product = this.productRepo.create({ ...dto, brand, category });
    const saved = await this.productRepo.save(product);

    return {
      message: 'Naushnik yaratildi ✅',
      product: saved,
    };
  }

  async findAll() {
    const products = await this.productRepo.find({
      relations: ['brand', 'category'],
    });
    return {
      count: products.length,
      products,
    };
  }

  async findOne(id: string) {
    const product = await this.productRepo.findOne({
      where: { id },
      relations: ['brand', 'category'],
    });
    if (!product) throw new NotFoundException('Naushnik topilmadi');
    return product;
  }

  async update(id: string, dto: UpdateHeadphonesDto) {
    const product = await this.productRepo.findOne({ where: { id } });
    if (!product) throw new NotFoundException('Naushnik topilmadi');

    if (dto.brandId) {
      const brand = await this.brandRepo.findOneBy({ id: +dto.brandId });
      if (!brand) throw new NotFoundException('Brand topilmadi');
      product.brand = brand;
    }

    if (dto.categoryId) {
      const category = await this.categoryRepo.findOneBy({ id: dto.categoryId });
      if (!category) throw new NotFoundException('Category topilmadi');
      product.category = category;
    }

    const updated = await this.productRepo.save({ ...product, ...dto });

    return {
      message: 'Naushnik yangilandi ✅',
      updated,
    };
  }

  async remove(id: string) {
    const product = await this.productRepo.findOneBy({ id });
    if (!product) throw new NotFoundException('Naushnik topilmadi');

    await this.productRepo.remove(product);
    return {
      message: 'Naushnik o‘chirildi 🗑️',
    };
  }

  async sell(id: string, quantity: number) {
    const product = await this.productRepo.findOne({ where: { id } });
    if (!product) throw new NotFoundException('Naushnik topilmadi');

    if (product.amount < quantity) {
      throw new BadRequestException(
        `Faqat ${product.amount} dona mavjud, siz ${quantity} so'rayapsiz.`,
      );
    }

    product.amount -= quantity;
    const sold = await this.productRepo.save(product);

    return {
      message: `${quantity} dona sotildi 📦`,
      remaining: sold.amount,
    };
  }

  async restock(id: string, quantity: number) {
    const product = await this.productRepo.findOne({ where: { id } });
    if (!product) throw new NotFoundException('Naushnik topilmadi');

    product.amount += quantity;
    const updated = await this.productRepo.save(product);

    return {
      message: `${quantity} dona qo‘shildi ✅`,
      newAmount: updated.amount,
    };
  }
}
