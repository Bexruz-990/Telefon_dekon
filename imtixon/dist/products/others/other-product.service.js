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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OtherProductService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const product_entity_1 = require("../entity/product.entity");
const brand_entity_1 = require("../../categories/brands/entities/brand.entity");
const category_entity_1 = require("../../categories/entity/category.entity");
let OtherProductService = class OtherProductService {
    otherRepo;
    brandRepo;
    categoryRepo;
    constructor(otherRepo, brandRepo, categoryRepo) {
        this.otherRepo = otherRepo;
        this.brandRepo = brandRepo;
        this.categoryRepo = categoryRepo;
    }
    async create(dto) {
        const brand = await this.brandRepo.findOne({ where: { id: Number(dto.brandId) } });
        const category = await this.categoryRepo.findOne({ where: { id: Number(dto.categoryId) } });
        if (!brand)
            throw new common_1.NotFoundException('Brand topilmadi');
        if (!category)
            throw new common_1.NotFoundException('Category topilmadi');
        const product = this.otherRepo.create({
            name: dto.name,
            price: dto.price,
            amount: dto.amount || 0,
            imageUrl: dto.imageUrl,
            description: dto.description,
            brand,
            category,
        });
        const saved = await this.otherRepo.save(product);
        return {
            message: 'Mahsulot qo‘shildi ✅',
            product: saved,
        };
    }
    async findAll() {
        const items = await this.otherRepo.find({
            relations: ['brand', 'category'],
        });
        return {
            count: items.length,
            items,
        };
    }
    async findOne(id) {
        const item = await this.otherRepo.findOne({
            where: { id },
            relations: ['brand', 'category'],
        });
        if (!item)
            throw new common_1.NotFoundException('Mahsulot topilmadi');
        return item;
    }
    async update(id, dto) {
        const product = await this.otherRepo.findOne({ where: { id } });
        if (!product)
            throw new common_1.NotFoundException('Mahsulot topilmadi');
        const brand = dto.brandId
            ? await this.brandRepo.findOne({ where: { id: Number(dto.brandId) } })
            : product.brand;
        const category = dto.categoryId
            ? await this.categoryRepo.findOne({ where: { id: Number(dto.categoryId) } })
            : product.category;
        const updated = await this.otherRepo.save({
            ...product,
            ...dto,
            brand: brand,
            category: category,
        });
        return {
            message: 'Yangilandi ✅',
            updated,
        };
    }
    async remove(id) {
        const product = await this.otherRepo.findOne({ where: { id } });
        if (!product)
            throw new common_1.NotFoundException('Mahsulot topilmadi');
        await this.otherRepo.remove(product);
        return { message: 'O‘chirildi 🗑️' };
    }
};
exports.OtherProductService = OtherProductService;
exports.OtherProductService = OtherProductService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(product_entity_1.OtherProduct)),
    __param(1, (0, typeorm_1.InjectRepository)(brand_entity_1.Brand)),
    __param(2, (0, typeorm_1.InjectRepository)(category_entity_1.Category)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], OtherProductService);
//# sourceMappingURL=other-product.service.js.map