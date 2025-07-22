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
exports.HeadphonesProductService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const product_entity_1 = require("../entity/product.entity");
const brand_entity_1 = require("../../categories/brands/entities/brand.entity");
const category_entity_1 = require("../../categories/entity/category.entity");
let HeadphonesProductService = class HeadphonesProductService {
    productRepo;
    brandRepo;
    categoryRepo;
    constructor(productRepo, brandRepo, categoryRepo) {
        this.productRepo = productRepo;
        this.brandRepo = brandRepo;
        this.categoryRepo = categoryRepo;
    }
    async create(dto) {
        const brand = await this.brandRepo.findOneBy({ id: +dto.brandId });
        if (!brand)
            throw new common_1.NotFoundException('Brand topilmadi');
        const category = await this.categoryRepo.findOneBy({ id: dto.categoryId });
        if (!category)
            throw new common_1.NotFoundException('Category topilmadi');
        const product = this.productRepo.create({ ...dto, brand, category });
        const saved = await this.productRepo.save(product);
        return {
            message: 'Naushnik yaratildi ✅',
            product: saved,
        };
    }
    async findAll() {
        const products = await this.productRepo.find({
            relations: ['brand', 'category'],
        });
        return {
            count: products.length,
            products,
        };
    }
    async findOne(id) {
        const product = await this.productRepo.findOne({
            where: { id },
            relations: ['brand', 'category'],
        });
        if (!product)
            throw new common_1.NotFoundException('Naushnik topilmadi');
        return product;
    }
    async update(id, dto) {
        const product = await this.productRepo.findOne({ where: { id } });
        if (!product)
            throw new common_1.NotFoundException('Naushnik topilmadi');
        if (dto.brandId) {
            const brand = await this.brandRepo.findOneBy({ id: +dto.brandId });
            if (!brand)
                throw new common_1.NotFoundException('Brand topilmadi');
            product.brand = brand;
        }
        if (dto.categoryId) {
            const category = await this.categoryRepo.findOneBy({ id: dto.categoryId });
            if (!category)
                throw new common_1.NotFoundException('Category topilmadi');
            product.category = category;
        }
        const updated = await this.productRepo.save({ ...product, ...dto });
        return {
            message: 'Naushnik yangilandi ✅',
            updated,
        };
    }
    async remove(id) {
        const product = await this.productRepo.findOneBy({ id });
        if (!product)
            throw new common_1.NotFoundException('Naushnik topilmadi');
        await this.productRepo.remove(product);
        return {
            message: 'Naushnik o‘chirildi 🗑️',
        };
    }
    async sell(id, quantity) {
        const product = await this.productRepo.findOne({ where: { id } });
        if (!product)
            throw new common_1.NotFoundException('Naushnik topilmadi');
        if (product.amount < quantity) {
            throw new common_1.BadRequestException(`Faqat ${product.amount} dona mavjud, siz ${quantity} so'rayapsiz.`);
        }
        product.amount -= quantity;
        const sold = await this.productRepo.save(product);
        return {
            message: `${quantity} dona sotildi 📦`,
            remaining: sold.amount,
        };
    }
    async restock(id, quantity) {
        const product = await this.productRepo.findOne({ where: { id } });
        if (!product)
            throw new common_1.NotFoundException('Naushnik topilmadi');
        product.amount += quantity;
        const updated = await this.productRepo.save(product);
        return {
            message: `${quantity} dona qo‘shildi ✅`,
            newAmount: updated.amount,
        };
    }
};
exports.HeadphonesProductService = HeadphonesProductService;
exports.HeadphonesProductService = HeadphonesProductService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(product_entity_1.HeadphonesProduct)),
    __param(1, (0, typeorm_1.InjectRepository)(brand_entity_1.Brand)),
    __param(2, (0, typeorm_1.InjectRepository)(category_entity_1.Category)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], HeadphonesProductService);
//# sourceMappingURL=headphones.service.js.map