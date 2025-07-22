import { SmartphoneProductService } from './smartphone.service';
import { CreateSmartphoneDto } from '../dto/create-product.dto';
import { UpdateSmartphoneDto } from '../dto/update-product.dto';
export declare class SmartphoneProductController {
    private readonly service;
    constructor(service: SmartphoneProductService);
    create(dto: CreateSmartphoneDto): Promise<{
        message: string;
        product: import("../entity/product.entity").SmartphoneProduct;
    }>;
    findAll(): Promise<{
        count: number;
        products: import("../entity/product.entity").SmartphoneProduct[];
    }>;
    findOne(id: string): Promise<import("../entity/product.entity").SmartphoneProduct>;
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
            brand: import("../../categories/brands/entities/brand.entity").Brand;
            category: import("../../categories/entity/category.entity").Category;
        } & import("../entity/product.entity").SmartphoneProduct;
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
