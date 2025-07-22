import { Wishlist } from './entity/wishlist.entity';
import { Repository } from 'typeorm';
import { User } from 'src/auth/entity/user.entity';
import { CreateWishlistDto } from './dto/create-wishlist.dto';
export declare class WishlistService {
    private wishlistRepo;
    private userRepo;
    constructor(wishlistRepo: Repository<Wishlist>, userRepo: Repository<User>);
    addToWishlist(dto: CreateWishlistDto): Promise<Wishlist>;
    findUserWishlist(userId: string): Promise<{
        count: number;
        totalCost: number;
        items: Wishlist[];
    }>;
    incrementQuantity(id: string): Promise<Wishlist>;
    decrementQuantity(id: string): Promise<Wishlist | {
        message: string;
    }>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
