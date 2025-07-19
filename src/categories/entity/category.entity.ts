// src/categories/entity/category.entity.ts
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Brand } from '../brands/entities/brand.entity';

@Entity('categories')
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Brand, (brand) => brand.category)
  brands: Brand[];

  @OneToMany(() => Brand, (brand) => brand.category, { cascade: true })
  brandscount: Brand[];
}
