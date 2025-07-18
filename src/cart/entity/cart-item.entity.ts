// src/cart/entity/cart.entity.ts
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { User } from 'src/auth/entity/user.entity';

@Entity('cart')
export class Cart {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  productId: string; // Mahsulotning IDsi

  @Column()
  productType: string; // Mahsulot turi (smartphone, computer, headphones...)

  @Column()
  name: string; // Mahsulot nomi

  @Column('decimal')
  price: number; // Donalik narx

  @Column()
  imageUrl: string;

  @Column({ default: 1 })
  quantity: number;

  @Column('decimal')
  totalPrice: number; // quantity * price

  @ManyToOne(() => User,user => user.cartItems)
  user: User;


  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
