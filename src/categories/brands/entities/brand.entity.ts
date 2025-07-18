// src/categories/brands/entities/brand.entity.ts
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Category } from '../../entity/category.entity';

@Entity('brands')
export class Brand {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @ManyToOne(() => Category, (category) => category.brands, {
    onDelete: 'CASCADE',
  })
  category: Category;
}
