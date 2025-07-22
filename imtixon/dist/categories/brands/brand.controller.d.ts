import { BrandsService } from './brand.service';
import { CreateBrandDto } from './dto/create-brand.dto';
export declare class BrandsController {
    private readonly service;
    constructor(service: BrandsService);
    create(dto: CreateBrandDto): Promise<import("./entities/brand.entity").Brand>;
    findAll(): Promise<{
        count: number;
        brands: import("./entities/brand.entity").Brand[];
    }>;
    findOne(id: number): Promise<{
        id: number;
        name: string;
        brandCount: number;
        brands: import("./entities/brand.entity").Brand[];
    }>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
