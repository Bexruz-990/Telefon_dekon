import { Cart } from './entity/cart-item.entity';
import { Repository } from 'typeorm';
import { User } from 'src/auth/entity/user.entity';
import { CreateCartDto } from './dto/add-item.dto';
import { SmartphoneProduct } from '../products/entity/product.entity';
import { ComputerProduct } from '../products/entity/product.entity';
import { HeadphonesProduct } from '../products/entity/product.entity';
import { SmartwatchProduct } from '../products/entity/product.entity';
import { GameStationProduct } from '../products/entity/product.entity';
export declare class CartService {
    private cartRepo;
    private userRepo;
    private smartphoneRepo;
    private computerRepo;
    private headphoneRepo;
    private smartwatchRepo;
    private gamestationRepo;
    constructor(cartRepo: Repository<Cart>, userRepo: Repository<User>, smartphoneRepo: Repository<SmartphoneProduct>, computerRepo: Repository<ComputerProduct>, headphoneRepo: Repository<HeadphonesProduct>, smartwatchRepo: Repository<SmartwatchProduct>, gamestationRepo: Repository<GameStationProduct>);
    private getProductByType;
    addToCart(dto: CreateCartDto, userId: string): Promise<{
        message: string;
        item: Cart;
    }>;
    getUserCart(userId: string): Promise<{
        count: number;
        totalCost: number;
        items: Cart[];
    }>;
    increment(cartId: string): Promise<Cart>;
    decrement(cartId: string): Promise<Cart | {
        message: string;
    }>;
    remove(cartId: string): Promise<{
        message: string;
    }>;
}
