import { SmartwatchProductService } from './smartwatch.service';
import { CreateSmartwatchDto } from '../dto/create-product.dto';
import { UpdateSmartwatchDto } from '../dto/update-product.dto';
export declare class SmartwatchProductController {
    private readonly service;
    constructor(service: SmartwatchProductService);
    create(dto: CreateSmartwatchDto): Promise<{
        message: string;
        product: import("../entity/product.entity").SmartwatchProduct;
    }>;
    findAll(): Promise<{
        count: number;
        products: import("../entity/product.entity").SmartwatchProduct[];
    }>;
    findOne(id: string): Promise<import("../entity/product.entity").SmartwatchProduct>;
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
            category: import("../../categories/entity/category.entity").Category;
            brand: import("../../categories/brands/entities/brand.entity").Brand;
        } & import("../entity/product.entity").SmartwatchProduct;
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
