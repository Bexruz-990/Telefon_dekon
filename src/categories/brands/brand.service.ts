// src/categories/brands/brands.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Brand } from './entities/brand.entity';
import { Category } from '../entity/category.entity';
import { CreateBrandDto } from './dto/create-brand.dto';

@Injectable()
export class BrandsService {
  constructor(
    @InjectRepository(Brand)
    private brandRepo: Repository<Brand>,
    @InjectRepository(Category)
    private categoryRepo: Repository<Category>,
  ) {}

  async create(dto: CreateBrandDto) {
    const category = await this.categoryRepo.findOne({
      where: { id: dto.categoryId },
    });
    if (!category) throw new NotFoundException('Category topilmadi');

    const brand = this.brandRepo.create({
      name: dto.name,
      category,
    });

    return await this.brandRepo.save(brand);
  }

  async findAll() {
    const brands = await this.brandRepo.find({ relations: ['category'] });
    return {
      count: brands.length,
      brands,
    };
  }


  async getCategoryWithBrandCount(id: number,) {
    const category = await this.categoryRepo.findOne({
      where: { id },
      relations: ['brands'],
    });
  
    if (!category) {
      throw new NotFoundException('Kategoriya topilmadi');
    }
  
    return {
      id: category.id,
      name: category.name,
      brandCount: category.brands.length,
      brands: category.brands,
    };
  }
  


  async remove(id: string) {
    const brand = await this.brandRepo.findOne({ where: { id: Number(id) } });
    if (!brand) throw new NotFoundException('Brand topilmadi');
    await this.brandRepo.remove(brand);
    return { message: 'Brand o‘chirildi' };
  }
}
