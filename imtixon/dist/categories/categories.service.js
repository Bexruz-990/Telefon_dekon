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
exports.CategoriesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const category_entity_1 = require("./entity/category.entity");
let CategoriesService = class CategoriesService {
    categoryRepo;
    constructor(categoryRepo) {
        this.categoryRepo = categoryRepo;
    }
    async create(dto) {
        const category = this.categoryRepo.create(dto);
        return await this.categoryRepo.save(category);
    }
    async findAll() {
        const categories = await this.categoryRepo.find({ relations: ['brands'] });
        return {
            count: categories.length,
            categories,
        };
    }
    async findOneWithBrandCount(id) {
        const category = await this.categoryRepo.findOne({
            where: { id },
            relations: ['brands'],
        });
        if (!category) {
            throw new common_1.NotFoundException('Kategoriya topilmadi');
        }
        const brandCount = category.brands.length;
        return {
            brandCount,
            ...category,
        };
    }
    async remove(id) {
        const category = await this.categoryRepo.findOne({ where: { id } });
        if (!category)
            throw new common_1.NotFoundException('Category topilmadi');
        await this.categoryRepo.remove(category);
        return { message: 'Category o‘chirildi' };
    }
};
exports.CategoriesService = CategoriesService;
exports.CategoriesService = CategoriesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(category_entity_1.Category)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CategoriesService);
//# sourceMappingURL=categories.service.js.map