import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
export declare class CategoriesController {
    private readonly service;
    constructor(service: CategoriesService);
    create(dto: CreateCategoryDto): Promise<import("./entity/category.entity").Category>;
    findAll(): Promise<{
        count: number;
        categories: import("./entity/category.entity").Category[];
    }>;
    findOne(id: number): Promise<{
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
