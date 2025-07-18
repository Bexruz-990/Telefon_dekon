// src/products/smartphone/smartphone.service.ts
import {
    Injectable,
    NotFoundException,
    BadRequestException,
  } from '@nestjs/common';
  import { InjectRepository } from '@nestjs/typeorm';
  import { Repository } from 'typeorm';
  import { SmartphoneProduct } from '../entity/product.entity';
  import { CreateSmartphoneDto } from '../dto/create-product.dto';
  import { UpdateSmartphoneDto } from '../dto/update-product.dto';
  import { Brand } from 'src/categories/brands/entities/brand.entity';
  import { Category } from 'src/categories/entity/category.entity';
  
  @Injectable()
  export class SmartphoneProductService {
    constructor(
      @InjectRepository(SmartphoneProduct)
      private readonly repo: Repository<SmartphoneProduct>,
  
      @InjectRepository(Brand)
      private readonly brandRepo: Repository<Brand>,
  
      @InjectRepository(Category)
      private readonly categoryRepo: Repository<Category>,
    ) {}
  
    async create(dto: CreateSmartphoneDto) {
      const brand = await this.brandRepo.findOneBy({ id: dto.brandId });
      if (!brand) throw new NotFoundException('Brand topilmadi');
  
      const category = await this.categoryRepo.findOneBy({ id: dto.categoryId });
      if (!category) throw new NotFoundException('Category topilmadi');
  
      const product = this.repo.create({ ...dto, brand, category });
      const saved = await this.repo.save(product);
  
      return {
        message: 'Smartfon yaratildi ✅',
        product: saved,
      };
    }
  
    async findAll() {
      const products = await this.repo.find();
      return {
        count: products.length,
        products,
      };
    }
  
    async findOne(id: string) {
      const product = await this.repo.findOne({ where: { id } });
      if (!product) throw new NotFoundException('Smartfon topilmadi');
      return product;
    }
  
    async update(id: string, dto: UpdateSmartphoneDto) {
      const product = await this.repo.findOne({ where: { id } });
      if (!product) throw new NotFoundException('Smartfon topilmadi');
  
      if (dto.brandId) {
        const brand = await this.brandRepo.findOneBy({ id: dto.brandId });
        if (!brand) throw new NotFoundException('Brand topilmadi');
        product.brand = brand;
      }
  
      if (dto.categoryId) {
        const category = await this.categoryRepo.findOneBy({ id: dto.categoryId });
        if (!category) throw new NotFoundException('Category topilmadi');
        product.category = category;
      }
  
      const updated = await this.repo.save({ ...product, ...dto });
      return {
        message: 'Smartfon yangilandi ✅',
        updated,
      };
    }
  
    async remove(id: string) {
      const product = await this.repo.findOneBy({ id });
      if (!product) throw new NotFoundException('Smartfon topilmadi');
  
      await this.repo.remove(product);
      return {
        message: 'Smartfon o‘chirildi 🗑️',
      };
    }
  
    async sell(id: string, quantity: number) {
      const product = await this.repo.findOne({ where: { id } });
      if (!product) throw new NotFoundException('Smartfon topilmadi');
  
      if (product.amount < quantity) {
        throw new BadRequestException(
          `Faqat ${product.amount} dona mavjud, siz ${quantity} so'rayapsiz.`,
        );
      }
  
      product.amount -= quantity;
      const sold = await this.repo.save(product);
  
      return {
        message: `${quantity} dona sotildi 📦`,
        remaining: sold.amount,
      };
    }
  
    async restock(id: string, quantity: number) {
      const product = await this.repo.findOne({ where: { id } });
      if (!product) throw new NotFoundException('Smartfon topilmadi');
  
      product.amount += quantity;
      const updated = await this.repo.save(product);
  
      return {
        message: `${quantity} dona qo‘shildi ✅`,
        newAmount: updated.amount,
      };
    }
  }
  