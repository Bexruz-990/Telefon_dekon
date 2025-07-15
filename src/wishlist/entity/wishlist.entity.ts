// src/wishlist/wishlist.entity.ts
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Product } from 'src/products/entity/product.entity';
import { User } from 'src/users/entity/user.entity'; // Agar foydalanuvchi bo‘lsa

@Entity()
export class Wishlist {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => User, user => user.wishlist, { eager: true })
  user: User;

  @ManyToOne(() => Product, { eager: true })
  product: Product;

  @Column({ default: 1 })
  quantity: number;

  @Column('decimal')
  price: number;

  @Column('decimal')
  totalPrice: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
