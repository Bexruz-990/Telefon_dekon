"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriesModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const category_entity_1 = require("./entity/category.entity");
const brand_entity_1 = require("./brands/entities/brand.entity");
const categories_service_1 = require("./categories.service");
const categories_controller_1 = require("./categories.controller");
const brand_service_1 = require("./brands/brand.service");
const brand_controller_1 = require("./brands/brand.controller");
const passport_1 = require("@nestjs/passport");
let CategoriesModule = class CategoriesModule {
};
exports.CategoriesModule = CategoriesModule;
exports.CategoriesModule = CategoriesModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([category_entity_1.Category, brand_entity_1.Brand]),
            passport_1.PassportModule],
        providers: [categories_service_1.CategoriesService, brand_service_1.BrandsService],
        controllers: [categories_controller_1.CategoriesController, brand_controller_1.BrandsController],
        exports: [typeorm_1.TypeOrmModule],
    })
], CategoriesModule);
//# sourceMappingURL=categories.module.js.map