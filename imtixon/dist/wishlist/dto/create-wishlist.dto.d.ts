import { ProductType } from '../entity/wishlist.entity';
export declare class CreateWishlistDto {
    userId: string;
    productId: string;
    productType: ProductType;
    name: string;
    imageUrl: string;
    price: number;
    quantity: number;
}
