import { WishlistService } from './wishlist.service';
import { CreateWishlistDto } from './dto/create-wishlist.dto';
export declare class WishlistController {
    private readonly wishlistService;
    constructor(wishlistService: WishlistService);
    addToWishlist(dto: CreateWishlistDto): Promise<import("./entity/wishlist.entity").Wishlist>;
    getUserWishlist(userId: string): Promise<{
        count: number;
        totalCost: number;
        items: import("./entity/wishlist.entity").Wishlist[];
    }>;
    increment(id: string): Promise<import("./entity/wishlist.entity").Wishlist>;
    decrement(id: string): Promise<import("./entity/wishlist.entity").Wishlist | {
        message: string;
    }>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
