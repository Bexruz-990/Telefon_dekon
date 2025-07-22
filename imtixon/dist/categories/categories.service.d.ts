import { Repository } from 'typeorm';
import { Category } from './entity/category.entity';
import { CreateCategoryDto } from './dto/create-category.dto';
export declare class CategoriesService {
    private categoryRepo;
    constructor(categoryRepo: Repository<Category>);
    create(dto: CreateCategoryDto): Promise<Category>;
    findAll(): Promise<{
        count: number;
        categories: Category[];
    }>;
    findOneWithBrandCount(id: number): Promise<{
        id: number;
        name: string;
        brands: import("./brands/entities/brand.entity").Brand[];
        smartphones: any;
        brandCount: number;
    }>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
