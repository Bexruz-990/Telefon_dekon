// src/products/product.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entity/product.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Brand } from 'src/categories/brands/entities/brand.entity';
import { Category } from 'src/categories/entity/category.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,

    @InjectRepository(Brand)
    private readonly brandRepository: Repository<Brand>,

    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) {}

  async create(dto: CreateProductDto) {
    const { name, price, description, brandId, categoryId, ...details } = dto;

    const brand = await this.brandRepository.findOne({
      where: { id: String(brandId) },
    });
    if (!brand) throw new NotFoundException('Brand topilmadi');

    const category = await this.categoryRepository.findOne({
      where: { id: Number(categoryId) },
    });
    if (!category) throw new NotFoundException('Category topilmadi');

    const product = this.productRepository.create({
      name,
      price,
      description,
      brand,
      category,
    });

    const saved = await this.productRepository.save(product);

    return {
      message: 'Mahsulot yaratildi ✅',
      product: saved,
    };
  }

  async findAll() {
    const products = await this.productRepository.find({
      relations: ['brand', 'category'],
    });

    return {
      count: products.length,
      products,
    };
  }

  async findOne(id: string) {
    const product = await this.productRepository.findOne({
      where: { id },
      relations: ['brand', 'category'],
    });

    if (!product) {
      throw new NotFoundException('Mahsulot topilmadi');
    }

    return product;
  }

  async update(id: string, dto: UpdateProductDto) {
    const product = await this.productRepository.findOne({
      where: { id },
      relations: ['brand', 'category'],
    });
    if (!product) throw new NotFoundException('Mahsulot topilmadi');

    const { brandId, categoryId, ...rest } = dto;

    if (brandId) {
      const brand = await this.brandRepository.findOneBy({ id: String(brandId) });
      if (!brand) throw new NotFoundException('Brand topilmadi');
      product.brand = brand;
    }

    if (categoryId) {
      const category = await this.categoryRepository.findOneBy({ id: Number(categoryId) });
      if (!category) throw new NotFoundException('Category topilmadi');
      product.category = category;
    }

    const updated = await this.productRepository.save({
      ...product,
      ...rest,
    });

    return {
      message: 'Mahsulot yangilandi ✅',
      updated,
    };
  }

  async remove(id: string) {
    const product = await this.productRepository.findOneBy({ id });
    if (!product) throw new NotFoundException('Mahsulot topilmadi');

    await this.productRepository.remove(product);

    return {
      message: 'Mahsulot o‘chirildi 🗑️',
    };
  }
}
