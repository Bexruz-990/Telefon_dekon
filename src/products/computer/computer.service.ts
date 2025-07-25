import {
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ComputerProduct } from '../entity/product.entity';
import { CreateComputerDto } from '../dto/create-product.dto';
import { UpdateComputerDto } from './../dto/update-product.dto';
import { Brand } from 'src/categories/brands/entities/brand.entity';
import { Category } from 'src/categories/entity/category.entity';
import { Comment } from 'src/community/entity/comment.entity';
import { GetProductWithCommentsDto, CommentUserDto } from 'src/community/dto/create-comment.dto'

@Injectable()
export class ComputerProductService {
  constructor(
    @InjectRepository(ComputerProduct)
    private readonly repo: Repository<ComputerProduct>,

    @InjectRepository(Brand)
    private readonly brandRepo: Repository<Brand>,

    @InjectRepository(Category)
    private readonly categoryRepo: Repository<Category>,

    @InjectRepository(Comment)
    private readonly commentRepo: Repository<Comment>,
  ) {}

  async create(dto: CreateComputerDto) {
    const brand = await this.brandRepo.findOneBy({ id: Number(dto.brandId) });
    if (!brand) throw new NotFoundException('Brand topilmadi');

    const category = await this.categoryRepo.findOneBy({ id: Number(dto.categoryId) });
    if (!category) throw new NotFoundException('Category topilmadi');

    const computer = this.repo.create({ ...dto, brand, category });
    const saved = await this.repo.save(computer);

    return {
      message: 'Kompyuter yaratildi ✅',
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
    if (!product) throw new NotFoundException('Kompyuter topilmadi');
    return product;
  }

  async findOneWithComments(id: string): Promise<GetProductWithCommentsDto> {
    const product = await this.repo.findOne({
      where: { id },
      relations: ['brand', 'category'],
    });

    if (!product) throw new NotFoundException('Kompyuter topilmadi');

    const comments = await this.commentRepo.find({
      where: {
        productId: Number(product.id),
        productType: 'computer',
      },
      relations: ['user'],
      order: { createdAt: 'DESC' },
    });

    const commentDtos: CommentUserDto[] = comments.map(comment => ({
      text: comment.text,
      user: comment.user?.name || 'Anonim',
    }));

    return {
      id: Number(product.id),
      name: product.name,
      brand: product.brand?.name || '',
      category: product.category?.name || '',
      comments: commentDtos,
    };
  }

  async update(id: string, dto: UpdateComputerDto) {
    const product = await this.repo.findOne({ where: { id } });
    if (!product) throw new NotFoundException('Kompyuter topilmadi');

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
      message: 'Kompyuter yangilandi ✅',
      updated,
    };
  }

  async remove(id: string) {
    const product = await this.repo.findOneBy({ id });
    if (!product) throw new NotFoundException('Kompyuter topilmadi');

    await this.repo.remove(product);
    return { message: 'Kompyuter o‘chirildi 🗑️' };
  }
}
