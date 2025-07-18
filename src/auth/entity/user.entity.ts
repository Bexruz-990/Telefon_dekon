import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Order } from 'src/orders/entity/order.entity';
import { Wishlist } from 'src/wishlist/entity/wishlist.entity';
import { CartItem } from 'src/cart/entity/cart-item.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ default: 'user' })
  role: string;

  @OneToMany(() => Order, order => order.user)
  orders: Order[];

  @OneToMany(() => Wishlist, wishlist => wishlist.user)
  wishlist: Wishlist[];

  @OneToMany(() => CartItem, cart => cart.user)

  cartItems: CartItem[];


  
  @Column({ nullable: true })
  refreshToken: string;

@Column({ nullable: true })
otp: string;

@Column({ default: false })
isVerified: boolean;
}
