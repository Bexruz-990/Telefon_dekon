import { CartService } from './cart.service';
import { CreateCartDto } from './dto/add-item.dto';
export declare class CartController {
    private readonly cartService;
    constructor(cartService: CartService);
    addToCart(dto: CreateCartDto, req: any): Promise<{
        message: string;
        item: import("./entity/cart-item.entity").Cart;
    }>;
    getUserCart(userId: string): Promise<{
        count: number;
        totalCost: number;
        items: import("./entity/cart-item.entity").Cart[];
    }>;
    increment(id: string): Promise<import("./entity/cart-item.entity").Cart>;
    decrement(id: string): Promise<import("./entity/cart-item.entity").Cart | {
        message: string;
    }>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
