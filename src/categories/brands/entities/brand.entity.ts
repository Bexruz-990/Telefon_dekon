// src/categories/brands/entities/brand.entity.ts
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Category } from 'src/categories/entity/category.entity';
import { Product } from 'src/products/entity/product.entity';

@Entity()
export class Brand {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  name: string;

  @Column({ type: 'text', nullable: true })
  description?: string;

  @ManyToOne(() => Category, category => category.brands, {
    onDelete: 'CASCADE',
    eager: true,
  })
  category: Category;

  @OneToMany(() => Product, product => product.brand)
  products: Product[];
}
