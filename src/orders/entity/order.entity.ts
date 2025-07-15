import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { User } from 'src/users/entity/user.entity';
import { Product } from 'src/products/entity/product.entity';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, user => user.orders, { eager: true })
  user: User;

  @ManyToMany(() => Product, { eager: true })
  @JoinTable()
  products: Product[];

  @Column({ default: 'pending' }) // status: 'pending', 'shipped', 'delivered', etc.
  status: string;
}
