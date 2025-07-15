// src/categories/entities/category.entity.ts
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Brand } from '../brands/entities/brand.entity';
import { Product } from '../../products/entity/product.entity';

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @Column()
  type: string; // CategoryType enum bilan ishlatiladi

  @OneToMany(() => Brand, brand => brand.category)
  brands: Brand[];

  @OneToMany(() => Product, product => product.category)
  products: Product[];
}
