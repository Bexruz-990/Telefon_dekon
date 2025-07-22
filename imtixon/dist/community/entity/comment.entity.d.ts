import { User } from 'src/auth/entity/user.entity';
export declare class Comment {
    id: string;
    productId: number;
    productType: string;
    text: string;
    createdAt: Date;
    user: User;
    userId: string;
}
