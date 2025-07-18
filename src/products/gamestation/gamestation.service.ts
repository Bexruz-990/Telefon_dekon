// src/products/gamestation/gamestation.service.ts
import {
    Injectable,
    NotFoundException,
    BadRequestException,
  } from '@nestjs/common';
  import { InjectRepository } from '@nestjs/typeorm';
  import { Repository } from 'typeorm';

  import { Brand } from 'src/categories/brands/entities/brand.entity';
  import { Category } from 'src/categories/entity/category.entity';
import { GameStationProduct } from '../entity/product.entity';
import { CreateGameStationDto } from '../dto/create-product.dto';
import { UpdateGameStationDto } from '../dto/update-product.dto';
  
  @Injectable()
  export class GameStationService {
    constructor(
      @InjectRepository(GameStationProduct)
      private readonly repo: Repository<GameStationProduct>,
  
      @InjectRepository(Brand)
      private readonly brandRepo: Repository<Brand>,
  
      @InjectRepository(Category)
      private readonly categoryRepo: Repository<Category>,
    ) {}
  
    async create(dto: CreateGameStationDto) {
      const brand = await this.brandRepo.findOneBy({ id: dto.brandId });
      if (!brand) throw new NotFoundException('Brand topilmadi');
  
      const category = await this.categoryRepo.findOneBy({ id: dto.categoryId });
      if (!category) throw new NotFoundException('Category topilmadi');
  
      const product = this.repo.create({ ...dto, brand, category });
      const saved = await this.repo.save(product);
  
      return {
        message: 'Game Station yaratildi ✅',
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
      if (!product) throw new NotFoundException('Game Station topilmadi');
      return product;
    }
  
    async update(id: string, dto: UpdateGameStationDto) {
      const product = await this.repo.findOne({ where: { id } });
      if (!product) throw new NotFoundException('Game Station topilmadi');
  
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
        message: 'Game Station yangilandi ✅',
        updated,
      };
    }
  
    async remove(id: string) {
      const product = await this.repo.findOneBy({ id });
      if (!product) throw new NotFoundException('Game Station topilmadi');
  
      await this.repo.remove(product);
      return {
        message: 'Game Station o‘chirildi 🗑️',
      };
    }
  
    async sell(id: string, quantity: number) {
      const product = await this.repo.findOne({ where: { id } });
      if (!product) throw new NotFoundException('Game Station topilmadi');
  
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
      if (!product) throw new NotFoundException('Game Station topilmadi');
  
      product.amount += quantity;
      const updated = await this.repo.save(product);
  
      return {
        message: `${quantity} dona qo‘shildi ✅`,
        newAmount: updated.amount,
      };
    }
  }
  