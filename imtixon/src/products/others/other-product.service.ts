// src/products/other-product.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OtherProduct } from '../entity/product.entity';
import { CreateOtherProductDto } from '../dto/create-product.dto';
import { UpdateOtherProductDto } from '../dto/update-product.dto';
import { Brand } from 'src/categories/brands/entities/brand.entity';
import { Category } from 'src/categories/entity/category.entity';

@Injectable()
export class OtherProductService {
  constructor(
    @InjectRepository(OtherProduct)
    private otherRepo: Repository<OtherProduct>,

    @InjectRepository(Brand)
    private brandRepo: Repository<Brand>,

    @InjectRepository(Category)
    private categoryRepo: Repository<Category>,
  ) {}

  async create(dto: CreateOtherProductDto) {
    const brand = await this.brandRepo.findOne({ where: { id: Number(dto.brandId) } });
    const category = await this.categoryRepo.findOne({ where: { id: Number(dto.categoryId) } });

    if (!brand) throw new NotFoundException('Brand topilmadi');
    if (!category) throw new NotFoundException('Category topilmadi');

    const product = this.otherRepo.create({
      name: dto.name,
      price: dto.price,
      amount: dto.amount || 0,
      imageUrl: dto.imageUrl,
      description: dto.description,
      brand,
      category,
    });

    const saved = await this.otherRepo.save(product);
    return {
      message: 'Mahsulot qo‘shildi ✅',
      product: saved,
    };
  }

  async findAll() {
    const items = await this.otherRepo.find({
      relations: ['brand', 'category'],
    });

    return {
      count: items.length,
      items,
    };
  }

  async findOne(id: string) {
    const item = await this.otherRepo.findOne({
      where: { id },
      relations: ['brand', 'category'],
    });

    if (!item) throw new NotFoundException('Mahsulot topilmadi');
    return item;
  }

  async update(id: string, dto: UpdateOtherProductDto) {
    const product = await this.otherRepo.findOne({ where: { id } });
    if (!product) throw new NotFoundException('Mahsulot topilmadi');

    const brand =   dto.brandId
      ? await this.brandRepo.findOne({ where: { id: Number
        (dto.brandId) } })
      : product.brand;

    const category = dto.categoryId
      ? await this.categoryRepo.findOne({ where: { id: Number(dto.categoryId) } })
      : product.category;

    const updated = await this.otherRepo.save({
      ...product,
      ...dto,
      brand: brand as any,
  category: category as any,
    });

    return {
      message: 'Yangilandi ✅',
      updated,
    };
  }

  async remove(id: string) {
    const product = await this.otherRepo.findOne({ where: { id } });
    if (!product) throw new NotFoundException('Mahsulot topilmadi');

    await this.otherRepo.remove(product);
    return { message: 'O‘chirildi 🗑️' };
  }
}
