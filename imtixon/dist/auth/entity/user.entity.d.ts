import { Wishlist } from 'src/wishlist/entity/wishlist.entity';
import { Cart } from 'src/cart/entity/cart-item.entity';
import { Comment } from 'src/community/entity/comment.entity';
export declare class User {
    id: string;
    name: string;
    email: string;
    password: string;
    role: string;
    wishlist: Wishlist[];
    cartItems: Cart[];
    comments: Comment[];
    refreshToken: string;
    otp: string;
    isVerified: boolean;
}
