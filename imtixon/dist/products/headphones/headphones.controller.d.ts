import { HeadphonesProductService } from './headphones.service';
import { CreateHeadphonesDto } from '../dto/create-product.dto';
import { UpdateHeadphonesDto } from '../dto/update-product.dto';
export declare class HeadphonesProductController {
    private readonly service;
    constructor(service: HeadphonesProductService);
    create(dto: CreateHeadphonesDto): Promise<{
        message: string;
        product: import("../entity/product.entity").HeadphonesProduct;
    }>;
    findAll(): Promise<{
        count: number;
        products: import("../entity/product.entity").HeadphonesProduct[];
    }>;
    findOne(id: string): Promise<import("../entity/product.entity").HeadphonesProduct>;
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
            category: import("../../categories/entity/category.entity").Category;
            brand: import("../../categories/brands/entities/brand.entity").Brand;
        } & import("../entity/product.entity").HeadphonesProduct;
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
