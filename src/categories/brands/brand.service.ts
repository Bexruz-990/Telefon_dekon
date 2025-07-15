// src/categories/brands/brand.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Brand } from './entities/brand.entity';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Category } from 'src/categories/entity/category.entity';

@Injectable()
export class BrandService {
  constructor(
    @InjectRepository(Brand)
    private readonly brandRepo: Repository<Brand>,

    @InjectRepository(Category)
    private readonly categoryRepo: Repository<Category>,
  ) {}

  async create(dto: CreateBrandDto) {
    const category = await this.categoryRepo.findOne({
      where: { id: Number(dto.categoryId) },
    });

    if (!category) {
      throw new NotFoundException('Category topilmadi');
    }

    const brand = this.brandRepo.create({
      name: dto.name,
      description: dto.description,
      category,
    });

    const saved = await this.brandRepo.save(brand);
    return { message: 'Brand yaratildi ✅', brand: saved };
  }

  async findAll() {
    const brands = await this.brandRepo.find({
      relations: ['category'],
    });
    return {
      count: brands.length,
      brands,
    };
  }

  async findOne(id: string) {
    const brand = await this.brandRepo.findOne({
      where: { id },
      relations: ['category'],
    });

    if (!brand) {
      throw new NotFoundException('Brand topilmadi');
    }

    return brand;
  }

  async update(id: string, dto: UpdateBrandDto) {
    const brand = await this.brandRepo.findOne({ where: { id } });
    if (!brand) {
      throw new NotFoundException('Brand topilmadi');
    }

    if (dto.categoryId) {
      const category = await this.categoryRepo.findOne({
        where: { id: Number(dto.categoryId) },
      });
      if (!category) throw new NotFoundException('Category topilmadi');
      brand.category = category;
    }

    Object.assign(brand, dto);
    const updated = await this.brandRepo.save(brand);

    return { message: 'Brand yangilandi ✅', updated };
  }

  async remove(id: string) {
    const brand = await this.brandRepo.findOne({ where: { id } });
    if (!brand) throw new NotFoundException('Brand topilmadi');

    await this.brandRepo.remove(brand);
    return { message: 'Brand o‘chirildi 🗑️' };
  }
}
