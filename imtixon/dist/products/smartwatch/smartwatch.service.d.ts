import { Repository } from 'typeorm';
import { Brand } from 'src/categories/brands/entities/brand.entity';
import { Category } from 'src/categories/entity/category.entity';
import { SmartwatchProduct } from '../entity/product.entity';
import { CreateSmartwatchDto } from '../dto/create-product.dto';
import { UpdateSmartwatchDto } from '../dto/update-product.dto';
export declare class SmartwatchProductService {
    private readonly repo;
    private readonly brandRepo;
    private readonly categoryRepo;
    constructor(repo: Repository<SmartwatchProduct>, brandRepo: Repository<Brand>, categoryRepo: Repository<Category>);
    create(dto: CreateSmartwatchDto): Promise<{
        message: string;
        product: SmartwatchProduct;
    }>;
    findAll(): Promise<{
        count: number;
        products: SmartwatchProduct[];
    }>;
    findOne(id: string): Promise<SmartwatchProduct>;
    update(id: string, dto: UpdateSmartwatchDto): Promise<{
        message: string;
        updated: {
            name: string;
            price: number;
            screen: string;
            battery: string;
            waterproof: boolean;
            healthSensors: string[];
            os: string;
            amount: number;
            imageUrl: string;
            brandId?: number | undefined;
            categoryId?: number | undefined;
            id: string;
            category: Category;
            brand: Brand;
        } & SmartwatchProduct;
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
