import { User } from 'src/auth/entity/user.entity';
export declare class Cart {
    id: string;
    productId: number;
    productType: string;
    name: string;
    price: number;
    imageUrl: string;
    quantity: number;
    totalPrice: number;
    user: User;
    createdAt: Date;
    updatedAt: Date;
}
