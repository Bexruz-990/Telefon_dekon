import { Repository } from 'typeorm';
import { Brand } from './entities/brand.entity';
import { Category } from '../entity/category.entity';
import { CreateBrandDto } from './dto/create-brand.dto';
export declare class BrandsService {
    private brandRepo;
    private categoryRepo;
    constructor(brandRepo: Repository<Brand>, categoryRepo: Repository<Category>);
    create(dto: CreateBrandDto): Promise<Brand>;
    findAll(): Promise<{
        count: number;
        brands: Brand[];
    }>;
    getCategoryWithBrandCount(id: number): Promise<{
        id: number;
        name: string;
        brandCount: number;
        brands: Brand[];
    }>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
