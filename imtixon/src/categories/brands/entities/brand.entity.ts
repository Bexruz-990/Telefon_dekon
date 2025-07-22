// src/categories/brands/entities/brand.entity.ts
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Category } from '../../entity/category.entity';
import { isNumber, IsUUID } from 'class-validator';

@Entity('brands')
export class Brand {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => Category, (category) => category.brands, {
    onDelete: 'CASCADE',
  })
  category: Category;
}
