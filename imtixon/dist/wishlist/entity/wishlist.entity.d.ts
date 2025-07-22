import { User } from 'src/auth/entity/user.entity';
export type ProductType = 'smartphone' | 'computer' | 'headphones' | 'smartwatch' | 'gamestation';
export declare class Wishlist {
    id: string;
    user: User;
    productId: string;
    productType: ProductType;
    name: string;
    price: number;
    imageUrl: string;
    quantity: number;
    totalPrice: number;
    createdAt: Date;
}
