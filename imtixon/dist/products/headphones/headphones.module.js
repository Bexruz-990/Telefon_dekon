"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeadphonesModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const headphones_controller_1 = require("./headphones.controller");
const headphones_service_1 = require("./headphones.service");
const brand_entity_1 = require("../../categories/brands/entities/brand.entity");
const category_entity_1 = require("../../categories/entity/category.entity");
const product_entity_1 = require("../entity/product.entity");
const auth_module_1 = require("../../auth/auth.module");
let HeadphonesModule = class HeadphonesModule {
};
exports.HeadphonesModule = HeadphonesModule;
exports.HeadphonesModule = HeadphonesModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([product_entity_1.HeadphonesProduct, brand_entity_1.Brand, category_entity_1.Category]), auth_module_1.AuthModule],
        controllers: [headphones_controller_1.HeadphonesProductController],
        providers: [headphones_service_1.HeadphonesProductService],
    })
], HeadphonesModule);
//# sourceMappingURL=headphones.module.js.map