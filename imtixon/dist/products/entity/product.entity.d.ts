import { Brand } from 'src/categories/brands/entities/brand.entity';
import { Category } from 'src/categories/entity/category.entity';
export declare class ComputerProduct {
    id: string;
    name: string;
    price: number;
    cpu: string;
    ram: string;
    storage: string;
    gpu: string;
    screen: string;
    amount: number;
    battery: string;
    os: string;
    category: Category;
    brand: Brand;
}
export declare class SmartphoneProduct {
    id: string;
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
    brand: Brand;
    category: Category;
}
export declare class HeadphonesProduct {
    id: string;
    name: string;
    price: number;
    type: string;
    battery: string;
    noiseCancel: boolean;
    mic: boolean;
    bluetoothVersion: string;
    amount: number;
    imageUrl: string;
    category: Category;
    brand: Brand;
}
export declare class SmartwatchProduct {
    id: string;
    name: string;
    price: number;
    screen: string;
    battery: string;
    waterproof: boolean;
    healthSensors: string[];
    os: string;
    amount: number;
    imageUrl: string;
    category: Category;
    brand: Brand;
}
export declare class GameStationProduct {
    id: string;
    name: string;
    price: number;
    cpu: string;
    gpu: string;
    storage: string;
    supportsVR: boolean;
    edition: string;
    amount: number;
    imageUrl: string;
    category: Category;
    brand: Brand;
}
export declare class OtherProduct {
    id: string;
    name: string;
    price: number;
    description?: string;
    amount: number;
    imageUrl: string;
    brand: Brand;
    category: Category;
}
