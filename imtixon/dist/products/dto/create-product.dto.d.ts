export declare class CreateComputerDto {
    name: string;
    price: number;
    cpu: string;
    ram: string;
    storage: string;
    gpu: string;
    screen: string;
    battery: string;
    os: string;
    brandId: number;
    categoryId: number;
}
export declare class CreateSmartphoneDto {
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
    brandId: number;
    categoryId: number;
}
export declare class CreateHeadphonesDto {
    name: string;
    price: number;
    type: string;
    battery: string;
    noiseCancel: boolean;
    mic: boolean;
    bluetoothVersion: string;
    amount: number;
    imageUrl: string;
    brandId: number;
    categoryId: number;
}
export declare class CreateSmartwatchDto {
    name: string;
    price: number;
    screen: string;
    battery: string;
    waterproof: boolean;
    healthSensors: string[];
    os: string;
    amount: number;
    imageUrl: string;
    brandId: number;
    categoryId: number;
}
export declare class CreateGameStationDto {
    name: string;
    price: number;
    cpu: string;
    gpu: string;
    storage: string;
    supportsVR: boolean;
    edition: string;
    amount: number;
    imageUrl: string;
    brandId: number;
    categoryId: number;
}
export declare class CreateOtherProductDto {
    name: string;
    price: number;
    description?: string;
    amount?: number;
    imageUrl: string;
    brandId: string;
    categoryId: string;
}
export declare class CommentUserDto {
    text: string;
    user: string;
}
export declare class GetProductWithCommentsDto {
    id: number;
    name: string;
    brand: string;
    category: string;
    comments: CommentUserDto[];
}
