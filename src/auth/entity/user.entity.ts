import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

import { Wishlist } from 'src/wishlist/entity/wishlist.entity';
import { Cart } from 'src/cart/entity/cart-item.entity';
import { Comment } from 'src/community/entity/comment.entity';

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

  @OneToMany(() => Wishlist, wishlist => wishlist.user)
  wishlist: Wishlist[];

  @OneToMany(() => Cart, cart => cart.user)

  cartItems: Cart[];

  // @OneToMany(() => Comment, comment => comment.user) 
  // comments: Comment[];

  @Column({ nullable: true })
  refreshToken: string;

  @Column({ nullable: true })
  otp: string;

  @Column({ default: false })
  isVerified: boolean;
}
