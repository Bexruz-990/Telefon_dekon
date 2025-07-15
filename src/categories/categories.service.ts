// src/categories/category.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './entity/category.entity';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepo: Repository<Category>,
  ) {}

  async create(dto: CreateCategoryDto) {
    const category = this.categoryRepo.create(dto);
    await this.categoryRepo.save(category);
    return { message: 'Kategoriya yaratildi ✅', category };
  }

  async findAll() {
    const categories = await this.categoryRepo.find({ relations: ['brands'] });
    return { count: categories.length, categories };
  }

  async findOne(id: number) {
    const category = await this.categoryRepo.findOne({
      where: { id },
      relations: ['brands'],
    });
    if (!category) throw new NotFoundException('Kategoriya topilmadi');
    return category;
  }

  async update(id: number, dto: UpdateCategoryDto) {
    const category = await this.categoryRepo.preload({ id, ...dto });
    if (!category) throw new NotFoundException('Kategoriya topilmadi');
    await this.categoryRepo.save(category);
    return { message: 'Kategoriya yangilandi ✅', category };
  }

  async remove(id: number) {
    const category = await this.categoryRepo.findOneBy({ id });
    if (!category) throw new NotFoundException('Kategoriya topilmadi');
    await this.categoryRepo.remove(category);
    return { message: 'Kategoriya o‘chirildi 🗑️' };
  }
}
