"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SmartphoneModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const product_entity_1 = require("../entity/product.entity");
const smartphone_controller_1 = require("./smartphone.controller");
const smartphone_service_1 = require("./smartphone.service");
const brand_entity_1 = require("../../categories/brands/entities/brand.entity");
const category_entity_1 = require("../../categories/entity/category.entity");
let SmartphoneModule = class SmartphoneModule {
};
exports.SmartphoneModule = SmartphoneModule;
exports.SmartphoneModule = SmartphoneModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([product_entity_1.SmartphoneProduct, brand_entity_1.Brand, category_entity_1.Category])],
        controllers: [smartphone_controller_1.SmartphoneProductController],
        providers: [smartphone_service_1.SmartphoneProductService],
    })
], SmartphoneModule);
//# sourceMappingURL=smartphone.module.js.map