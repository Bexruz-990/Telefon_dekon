import { Repository } from 'typeorm';
import { SmartphoneProduct } from '../entity/product.entity';
import { CreateSmartphoneDto } from '../dto/create-product.dto';
import { UpdateSmartphoneDto } from '../dto/update-product.dto';
import { Brand } from 'src/categories/brands/entities/brand.entity';
import { Category } from 'src/categories/entity/category.entity';
export declare class SmartphoneProductService {
    private readonly repo;
    private readonly brandRepo;
    private readonly categoryRepo;
    constructor(repo: Repository<SmartphoneProduct>, brandRepo: Repository<Brand>, categoryRepo: Repository<Category>);
    create(dto: CreateSmartphoneDto): Promise<{
        message: string;
        product: SmartphoneProduct;
    }>;
    findAll(): Promise<{
        count: number;
        products: SmartphoneProduct[];
    }>;
    findOne(id: string): Promise<SmartphoneProduct>;
    update(id: string, dto: UpdateSmartphoneDto): Promise<{
        message: string;
        updated: {
            name: string;
            price: number;
            cpu: string;
            screenSize: string;
            mainCamera: string;
            frontCamera: string;
            battery: string;
            storage: string;
            ram: string;
            os: string;
            amount: number;
            imageUrl: string;
            brandId?: number | undefined;
            categoryId?: number | undefined;
            id: string;
            brand: Brand;
            category: Category;
        } & SmartphoneProduct;
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
