import { Repository } from 'typeorm';
import { OtherProduct } from '../entity/product.entity';
import { CreateOtherProductDto } from '../dto/create-product.dto';
import { UpdateOtherProductDto } from '../dto/update-product.dto';
import { Brand } from 'src/categories/brands/entities/brand.entity';
import { Category } from 'src/categories/entity/category.entity';
export declare class OtherProductService {
    private otherRepo;
    private brandRepo;
    private categoryRepo;
    constructor(otherRepo: Repository<OtherProduct>, brandRepo: Repository<Brand>, categoryRepo: Repository<Category>);
    create(dto: CreateOtherProductDto): Promise<{
        message: string;
        product: OtherProduct;
    }>;
    findAll(): Promise<{
        count: number;
        items: OtherProduct[];
    }>;
    findOne(id: string): Promise<OtherProduct>;
    update(id: string, dto: UpdateOtherProductDto): Promise<{
        message: string;
        updated: {
            brand: any;
            category: any;
            name: string;
            price: number;
            description?: string;
            amount: number;
            imageUrl: string;
            brandId?: string | undefined;
            categoryId?: string | undefined;
            id: string;
        } & OtherProduct;
    }>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
