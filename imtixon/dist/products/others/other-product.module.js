"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OtherProductModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const product_entity_1 = require("../entity/product.entity");
const brand_entity_1 = require("../../categories/brands/entities/brand.entity");
const category_entity_1 = require("../../categories/entity/category.entity");
const other_product_service_1 = require("./other-product.service");
const other_product_controller_1 = require("./other-product.controller");
let OtherProductModule = class OtherProductModule {
};
exports.OtherProductModule = OtherProductModule;
exports.OtherProductModule = OtherProductModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([product_entity_1.OtherProduct, brand_entity_1.Brand, category_entity_1.Category])],
        controllers: [other_product_controller_1.OtherProductController],
        providers: [other_product_service_1.OtherProductService],
    })
], OtherProductModule);
//# sourceMappingURL=other-product.module.js.map