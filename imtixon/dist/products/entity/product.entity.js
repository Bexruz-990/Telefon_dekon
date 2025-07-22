"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OtherProduct = exports.GameStationProduct = exports.SmartwatchProduct = exports.HeadphonesProduct = exports.SmartphoneProduct = exports.ComputerProduct = void 0;
const typeorm_1 = require("typeorm");
const brand_entity_1 = require("../../categories/brands/entities/brand.entity");
const category_entity_1 = require("../../categories/entity/category.entity");
let ComputerProduct = class ComputerProduct {
    id;
    name;
    price;
    cpu;
    ram;
    storage;
    gpu;
    screen;
    amount;
    battery;
    os;
    category;
    brand;
};
exports.ComputerProduct = ComputerProduct;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], ComputerProduct.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ComputerProduct.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal'),
    __metadata("design:type", Number)
], ComputerProduct.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ComputerProduct.prototype, "cpu", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ComputerProduct.prototype, "ram", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ComputerProduct.prototype, "storage", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ComputerProduct.prototype, "gpu", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ComputerProduct.prototype, "screen", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], ComputerProduct.prototype, "amount", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ComputerProduct.prototype, "battery", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ComputerProduct.prototype, "os", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => category_entity_1.Category, { eager: true }),
    __metadata("design:type", category_entity_1.Category)
], ComputerProduct.prototype, "category", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => brand_entity_1.Brand, { eager: true }),
    __metadata("design:type", brand_entity_1.Brand)
], ComputerProduct.prototype, "brand", void 0);
exports.ComputerProduct = ComputerProduct = __decorate([
    (0, typeorm_1.Entity)('computers')
], ComputerProduct);
let SmartphoneProduct = class SmartphoneProduct {
    id;
    name;
    price;
    cpu;
    screenSize;
    mainCamera;
    frontCamera;
    battery;
    storage;
    ram;
    os;
    amount;
    imageUrl;
    brand;
    category;
};
exports.SmartphoneProduct = SmartphoneProduct;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", String)
], SmartphoneProduct.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], SmartphoneProduct.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal'),
    __metadata("design:type", Number)
], SmartphoneProduct.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], SmartphoneProduct.prototype, "cpu", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], SmartphoneProduct.prototype, "screenSize", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], SmartphoneProduct.prototype, "mainCamera", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], SmartphoneProduct.prototype, "frontCamera", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], SmartphoneProduct.prototype, "battery", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], SmartphoneProduct.prototype, "storage", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], SmartphoneProduct.prototype, "ram", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], SmartphoneProduct.prototype, "os", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], SmartphoneProduct.prototype, "amount", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], SmartphoneProduct.prototype, "imageUrl", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => brand_entity_1.Brand, { eager: false }),
    __metadata("design:type", brand_entity_1.Brand)
], SmartphoneProduct.prototype, "brand", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => category_entity_1.Category, (category) => category.smartphones, {
        onDelete: 'CASCADE',
        nullable: true
    }),
    (0, typeorm_1.JoinColumn)({ name: 'categoryId' }),
    __metadata("design:type", category_entity_1.Category)
], SmartphoneProduct.prototype, "category", void 0);
exports.SmartphoneProduct = SmartphoneProduct = __decorate([
    (0, typeorm_1.Entity)('smartphones')
], SmartphoneProduct);
let HeadphonesProduct = class HeadphonesProduct {
    id;
    name;
    price;
    type;
    battery;
    noiseCancel;
    mic;
    bluetoothVersion;
    amount;
    imageUrl;
    category;
    brand;
};
exports.HeadphonesProduct = HeadphonesProduct;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], HeadphonesProduct.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], HeadphonesProduct.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal'),
    __metadata("design:type", Number)
], HeadphonesProduct.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], HeadphonesProduct.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], HeadphonesProduct.prototype, "battery", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], HeadphonesProduct.prototype, "noiseCancel", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], HeadphonesProduct.prototype, "mic", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], HeadphonesProduct.prototype, "bluetoothVersion", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], HeadphonesProduct.prototype, "amount", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], HeadphonesProduct.prototype, "imageUrl", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => category_entity_1.Category, { eager: true }),
    __metadata("design:type", category_entity_1.Category)
], HeadphonesProduct.prototype, "category", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => brand_entity_1.Brand, { eager: true }),
    __metadata("design:type", brand_entity_1.Brand)
], HeadphonesProduct.prototype, "brand", void 0);
exports.HeadphonesProduct = HeadphonesProduct = __decorate([
    (0, typeorm_1.Entity)('headphones')
], HeadphonesProduct);
let SmartwatchProduct = class SmartwatchProduct {
    id;
    name;
    price;
    screen;
    battery;
    waterproof;
    healthSensors;
    os;
    amount;
    imageUrl;
    category;
    brand;
};
exports.SmartwatchProduct = SmartwatchProduct;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], SmartwatchProduct.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], SmartwatchProduct.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal'),
    __metadata("design:type", Number)
], SmartwatchProduct.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], SmartwatchProduct.prototype, "screen", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], SmartwatchProduct.prototype, "battery", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], SmartwatchProduct.prototype, "waterproof", void 0);
__decorate([
    (0, typeorm_1.Column)('simple-array'),
    __metadata("design:type", Array)
], SmartwatchProduct.prototype, "healthSensors", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], SmartwatchProduct.prototype, "os", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], SmartwatchProduct.prototype, "amount", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], SmartwatchProduct.prototype, "imageUrl", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => category_entity_1.Category, { eager: true }),
    __metadata("design:type", category_entity_1.Category)
], SmartwatchProduct.prototype, "category", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => brand_entity_1.Brand, { eager: true }),
    __metadata("design:type", brand_entity_1.Brand)
], SmartwatchProduct.prototype, "brand", void 0);
exports.SmartwatchProduct = SmartwatchProduct = __decorate([
    (0, typeorm_1.Entity)('smartwatches')
], SmartwatchProduct);
let GameStationProduct = class GameStationProduct {
    id;
    name;
    price;
    cpu;
    gpu;
    storage;
    supportsVR;
    edition;
    amount;
    imageUrl;
    category;
    brand;
};
exports.GameStationProduct = GameStationProduct;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], GameStationProduct.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], GameStationProduct.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal'),
    __metadata("design:type", Number)
], GameStationProduct.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], GameStationProduct.prototype, "cpu", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], GameStationProduct.prototype, "gpu", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], GameStationProduct.prototype, "storage", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], GameStationProduct.prototype, "supportsVR", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], GameStationProduct.prototype, "edition", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], GameStationProduct.prototype, "amount", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], GameStationProduct.prototype, "imageUrl", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => category_entity_1.Category, { eager: true }),
    __metadata("design:type", category_entity_1.Category)
], GameStationProduct.prototype, "category", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => brand_entity_1.Brand, { eager: true }),
    __metadata("design:type", brand_entity_1.Brand)
], GameStationProduct.prototype, "brand", void 0);
exports.GameStationProduct = GameStationProduct = __decorate([
    (0, typeorm_1.Entity)('gamestations')
], GameStationProduct);
let OtherProduct = class OtherProduct {
    id;
    name;
    price;
    description;
    amount;
    imageUrl;
    brand;
    category;
};
exports.OtherProduct = OtherProduct;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], OtherProduct.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], OtherProduct.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal'),
    __metadata("design:type", Number)
], OtherProduct.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, type: 'text' }),
    __metadata("design:type", String)
], OtherProduct.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], OtherProduct.prototype, "amount", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], OtherProduct.prototype, "imageUrl", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => brand_entity_1.Brand, { eager: true }),
    __metadata("design:type", brand_entity_1.Brand)
], OtherProduct.prototype, "brand", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => category_entity_1.Category, { eager: true }),
    __metadata("design:type", category_entity_1.Category)
], OtherProduct.prototype, "category", void 0);
exports.OtherProduct = OtherProduct = __decorate([
    (0, typeorm_1.Entity)('other_products')
], OtherProduct);
//# sourceMappingURL=product.entity.js.map