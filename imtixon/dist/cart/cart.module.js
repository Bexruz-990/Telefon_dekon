"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const cart_item_entity_1 = require("./entity/cart-item.entity");
const cart_service_1 = require("./cart.service");
const cart_controller_1 = require("./cart.controller");
const user_entity_1 = require("../auth/entity/user.entity");
const product_entity_1 = require("../products/entity/product.entity");
const product_entity_2 = require("../products/entity/product.entity");
const product_entity_3 = require("../products/entity/product.entity");
const product_entity_4 = require("../products/entity/product.entity");
const product_entity_5 = require("../products/entity/product.entity");
let CartModule = class CartModule {
};
exports.CartModule = CartModule;
exports.CartModule = CartModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                cart_item_entity_1.Cart,
                user_entity_1.User,
                product_entity_1.SmartphoneProduct,
                product_entity_2.ComputerProduct,
                product_entity_3.HeadphonesProduct,
                product_entity_4.SmartwatchProduct,
                product_entity_5.GameStationProduct,
            ]),
        ],
        controllers: [cart_controller_1.CartController],
        providers: [cart_service_1.CartService],
    })
], CartModule);
//# sourceMappingURL=cart.module.js.map