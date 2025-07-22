// src/products/smartwatch/smartwatch.service.ts
import {
    Injectable,
    NotFoundException,
    BadRequestException,
  } from '@nestjs/common';
  import { InjectRepository } from '@nestjs/typeorm';
  import { Repository } from 'typeorm';

  import { Brand } from 'src/categories/brands/entities/brand.entity';
  import { Category } from 'src/categories/entity/category.entity';
import { SmartwatchProduct } from '../entity/product.entity';
import { CreateSmartwatchDto } from '../dto/create-product.dto';
import { UpdateSmartwatchDto } from '../dto/update-product.dto';
  
  @Injectable()
  export class SmartwatchProductService {
    constructor(
      @InjectRepository(SmartwatchProduct)
      private readonly repo: Repository<SmartwatchProduct>,
  
      @InjectRepository(Brand)
      private readonly brandRepo: Repository<Brand>,
  
      @InjectRepository(Category)
      private readonly categoryRepo: Repository<Category>,
    ) {}
  
    async create(dto: CreateSmartwatchDto) {
      const brand = await this.brandRepo.findOneBy({ id: Number(dto.brandId) });
      if (!brand) throw new NotFoundException('Brand topilmadi');
  
      const category = await this.categoryRepo.findOneBy({ id: dto.categoryId });
      if (!category) throw new NotFoundException('Category topilmadi');
  
      const product = this.repo.create({ ...dto, brand, category });
      const saved = await this.repo.save(product);
  
      return {
        message: 'Smart Watch yaratildi ✅',
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
      if (!product) throw new NotFoundException('Smart Watch topilmadi');
      return product;
    }
  
    async update(id: string, dto: UpdateSmartwatchDto) {
      const product = await this.repo.findOne({ where: { id } });
      if (!product) throw new NotFoundException('Smart Watch topilmadi');
  
      if (dto.brandId) {
        const brand = await this.brandRepo.findOneBy({ id: Number(dto.brandId) });
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
        message: 'Smart Watch yangilandi ✅',
        updated,
      };
    }
  
    async remove(id: string) {
      const product = await this.repo.findOneBy({ id });
      if (!product) throw new NotFoundException('Smart Watch topilmadi');
  
      await this.repo.remove(product);
      return {
        message: 'Smart Watch o‘chirildi 🗑️',
      };
    }
  
    async sell(id: string, quantity: number) {
      const product = await this.repo.findOne({ where: { id } });
      if (!product) throw new NotFoundException('Smart Watch topilmadi');
  
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
      if (!product) throw new NotFoundException('Smart Watch topilmadi');
  
      product.amount += quantity;
      const updated = await this.repo.save(product);
  
      return {
        message: `${quantity} dona qo‘shildi ✅`,
        newAmount: updated.amount,
      };
    }
  }
  