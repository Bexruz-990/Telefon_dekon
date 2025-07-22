import { Repository } from 'typeorm';
import { Brand } from 'src/categories/brands/entities/brand.entity';
import { Category } from 'src/categories/entity/category.entity';
import { GameStationProduct } from '../entity/product.entity';
import { CreateGameStationDto } from '../dto/create-product.dto';
import { UpdateGameStationDto } from '../dto/update-product.dto';
export declare class GameStationService {
    private readonly repo;
    private readonly brandRepo;
    private readonly categoryRepo;
    constructor(repo: Repository<GameStationProduct>, brandRepo: Repository<Brand>, categoryRepo: Repository<Category>);
    create(dto: CreateGameStationDto): Promise<{
        message: string;
        product: GameStationProduct;
    }>;
    findAll(): Promise<{
        count: number;
        products: GameStationProduct[];
    }>;
    findOne(id: string): Promise<GameStationProduct>;
    update(id: string, dto: UpdateGameStationDto): Promise<{
        message: string;
        updated: {
            name: string;
            price: number;
            cpu: string;
            gpu: string;
            storage: string;
            supportsVR: boolean;
            edition: string;
            amount: number;
            imageUrl: string;
            brandId?: number | undefined;
            categoryId?: number | undefined;
            id: string;
            category: Category;
            brand: Brand;
        } & GameStationProduct;
    }>;
    remove(id: string): Promise<{
        message: string;
    }>;
    sell(id: string, quantity: number): Promise<{
        message: string;
        remaining: number;
    }>;
    restock(id: string, quantity: number): Promise<{
        message: string;
        newAmount: number;
    }>;
}
