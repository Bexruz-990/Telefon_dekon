import { OtherProductService } from './other-product.service';
import { CreateOtherProductDto } from '../dto/create-product.dto';
import { UpdateOtherProductDto } from '../dto/update-product.dto';
export declare class OtherProductController {
    private service;
    constructor(service: OtherProductService);
    create(dto: CreateOtherProductDto): Promise<{
        message: string;
        product: import("../entity/product.entity").OtherProduct;
    }>;
    findAll(): Promise<{
        count: number;
        items: import("../entity/product.entity").OtherProduct[];
    }>;
    findOne(id: string): Promise<import("../entity/product.entity").OtherProduct>;
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
        } & import("../entity/product.entity").OtherProduct;
    }>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
