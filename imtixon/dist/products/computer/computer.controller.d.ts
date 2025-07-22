import { ComputerProductService } from './computer.service';
import { CreateComputerDto } from '../dto/create-product.dto';
import { UpdateComputerDto } from '../dto/update-product.dto';
export declare class ComputerProductController {
    private readonly service;
    constructor(service: ComputerProductService);
    create(dto: CreateComputerDto): Promise<{
        message: string;
        product: import("../entity/product.entity").ComputerProduct;
    }>;
    findAll(): Promise<{
        count: number;
        products: import("../entity/product.entity").ComputerProduct[];
    }>;
    findOne(id: string): Promise<import("../entity/product.entity").ComputerProduct>;
    update(id: string, dto: UpdateComputerDto): Promise<{
        message: string;
        updated: {
            name: string;
            price: number;
            cpu: string;
            ram: string;
            storage: string;
            gpu: string;
            screen: string;
            battery: string;
            os: string;
            brandId?: number | undefined;
            categoryId?: number | undefined;
            id: string;
            amount: number;
            category: import("../../categories/entity/category.entity").Category;
            brand: import("../../categories/brands/entities/brand.entity").Brand;
        } & import("../entity/product.entity").ComputerProduct;
    }>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
