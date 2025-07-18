// src/categories/categories.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './entity/category.entity';
import { CreateCategoryDto } from './dto/create-category.dto';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private categoryRepo: Repository<Category>,
  ) {}

  async create(dto: CreateCategoryDto) {
    const category = this.categoryRepo.create(dto);
    return await this.categoryRepo.save(category);
  }

  async findAll() {
    const categories = await this.categoryRepo.find({ relations: ['brands'] });
    return {
      count: categories.length,
      categories,
    };
  }

  async remove(id: number) {
    const category = await this.categoryRepo.findOne({ where: { id } });
    if (!category) throw new NotFoundException('Category topilmadi');
    await this.categoryRepo.remove(category);
    return { message: 'Category o‘chirildi' };
  }
}
