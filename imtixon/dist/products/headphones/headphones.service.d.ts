import { Repository } from 'typeorm';
import { HeadphonesProduct } from '../entity/product.entity';
import { CreateHeadphonesDto } from '../dto/create-product.dto';
import { UpdateHeadphonesDto } from '../dto/update-product.dto';
import { Brand } from 'src/categories/brands/entities/brand.entity';
import { Category } from 'src/categories/entity/category.entity';
export declare class HeadphonesProductService {
    private readonly productRepo;
    private readonly brandRepo;
    private readonly categoryRepo;
    constructor(productRepo: Repository<HeadphonesProduct>, brandRepo: Repository<Brand>, categoryRepo: Repository<Category>);
    create(dto: CreateHeadphonesDto): Promise<{
        message: string;
        product: HeadphonesProduct;
    }>;
    findAll(): Promise<{
        count: number;
        products: HeadphonesProduct[];
    }>;
    findOne(id: string): Promise<HeadphonesProduct>;
    update(id: string, dto: UpdateHeadphonesDto): Promise<{
        message: string;
        updated: {
            name: string;
            price: number;
            type: string;
            battery: string;
            noiseCancel: boolean;
            mic: boolean;
            bluetoothVersion: string;
            amount: number;
            imageUrl: string;
            brandId?: number | undefined;
            categoryId?: number | undefined;
            id: string;
            category: Category;
            brand: Brand;
        } & HeadphonesProduct;
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
