// src/wishlist/entity/wishlist.entity.ts
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
} from 'typeorm';
import { User } from 'src/auth/entity/user.entity';

export type ProductType =
  | 'smartphone'
  | 'computer'
  | 'headphones'
  | 'smartwatch'
  | 'gamestation';

@Entity('wishlists')
export class Wishlist {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => User, { eager: true, onDelete: 'CASCADE' })
  user: User;

  @Column()
  productId: string; // Mahsulotning ID si (uuid)

  @Column({ type: 'enum', enum: ['smartphone', 'computer', 'headphones', 'smartwatch', 'gamestation'] })
  productType: ProductType; // Mahsulot turi

  @Column()
  name: string; // Mahsulot nomi

  @Column('decimal')
  price: number; // Mahsulot narxi

  @Column()
  imageUrl: string; // Mahsulot rasmi

  @Column({ default: 1 })
  quantity: number; // Nechta istayapti

  @Column('decimal')
  totalPrice: number; // Umumiy narx

  @CreateDateColumn()
  createdAt: Date;
}
