"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameStationModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const gamestation_controller_1 = require("./gamestation.controller");
const gamestation_service_1 = require("./gamestation.service");
const brand_entity_1 = require("../../categories/brands/entities/brand.entity");
const category_entity_1 = require("../../categories/entity/category.entity");
const product_entity_1 = require("../entity/product.entity");
const auth_module_1 = require("../../auth/auth.module");
let GameStationModule = class GameStationModule {
};
exports.GameStationModule = GameStationModule;
exports.GameStationModule = GameStationModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([product_entity_1.GameStationProduct, brand_entity_1.Brand, category_entity_1.Category]), auth_module_1.AuthModule],
        controllers: [gamestation_controller_1.GameStationController],
        providers: [gamestation_service_1.GameStationService],
    })
], GameStationModule);
//# sourceMappingURL=gamestation.module.js.map