import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from 'src/auth/entity/user.entity';
import { Product } from 'src/products/entity/product.entity';

@Entity()
export class CartItem {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => User, user => user.cartItems, { onDelete: 'CASCADE', eager: true })
  user: User;

  @ManyToOne(() => Product, product => product.cartItems, { eager: true })
  product: Product;

  @Column({ default: 1 })
  quantity: number;
}
