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
exports.BrandsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const brand_entity_1 = require("./entities/brand.entity");
const category_entity_1 = require("../entity/category.entity");
let BrandsService = class BrandsService {
    brandRepo;
    categoryRepo;
    constructor(brandRepo, categoryRepo) {
        this.brandRepo = brandRepo;
        this.categoryRepo = categoryRepo;
    }
    async create(dto) {
        const category = await this.categoryRepo.findOne({
            where: { id: dto.categoryId },
        });
        if (!category)
            throw new common_1.NotFoundException('Category topilmadi');
        const brand = this.brandRepo.create({
            name: dto.name,
            category,
        });
        return await this.brandRepo.save(brand);
    }
    async findAll() {
        const brands = await this.brandRepo.find({ relations: ['category'] });
        return {
            count: brands.length,
            brands,
        };
    }
    async getCategoryWithBrandCount(id) {
        const category = await this.categoryRepo.findOne({
            where: { id },
            relations: ['brands'],
        });
        if (!category) {
            throw new common_1.NotFoundException('Kategoriya topilmadi');
        }
        return {
            id: category.id,
            name: category.name,
            brandCount: category.brands.length,
            brands: category.brands,
        };
    }
    async remove(id) {
        const brand = await this.brandRepo.findOne({ where: { id: Number(id) } });
        if (!brand)
            throw new common_1.NotFoundException('Brand topilmadi');
        await this.brandRepo.remove(brand);
        return { message: 'Brand o‘chirildi' };
    }
};
exports.BrandsService = BrandsService;
exports.BrandsService = BrandsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(brand_entity_1.Brand)),
    __param(1, (0, typeorm_1.InjectRepository)(category_entity_1.Category)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], BrandsService);
//# sourceMappingURL=brand.service.js.map