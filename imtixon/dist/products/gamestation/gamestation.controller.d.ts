import { GameStationService } from './gamestation.service';
import { CreateGameStationDto } from '../dto/create-product.dto';
import { UpdateGameStationDto } from '../dto/update-product.dto';
export declare class GameStationController {
    private readonly service;
    constructor(service: GameStationService);
    create(dto: CreateGameStationDto): Promise<{
        message: string;
        product: import("../entity/product.entity").GameStationProduct;
    }>;
    findAll(): Promise<{
        count: number;
        products: import("../entity/product.entity").GameStationProduct[];
    }>;
    findOne(id: string): Promise<import("../entity/product.entity").GameStationProduct>;
    update(id: string, dto: UpdateGameStationDto): Promise<{
        message: string;
        updated: {
            name: string;
            price: number;
            cpu: string;
            gpu: string;
            storage: string;
            supportsVR: boolean;
            edition: string;
            amount: number;
            imageUrl: string;
            brandId?: number | undefined;
            categoryId?: number | undefined;
            id: string;
            category: import("../../categories/entity/category.entity").Category;
            brand: import("../../categories/brands/entities/brand.entity").Brand;
        } & import("../entity/product.entity").GameStationProduct;
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
