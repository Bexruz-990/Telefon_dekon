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
exports.CartController = void 0;
const common_1 = require("@nestjs/common");
const cart_service_1 = require("./cart.service");
const add_item_dto_1 = require("./dto/add-item.dto");
const swagger_1 = require("@nestjs/swagger");
let CartController = class CartController {
    cartService;
    constructor(cartService) {
        this.cartService = cartService;
    }
    async addToCart(dto, req) {
        const userId = req.user.id;
        return this.cartService.addToCart(dto, userId);
    }
    getUserCart(userId) {
        return this.cartService.getUserCart(userId);
    }
    increment(id) {
        return this.cartService.increment(id);
    }
    decrement(id) {
        return this.cartService.decrement(id);
    }
    remove(id) {
        return this.cartService.remove(id);
    }
};
exports.CartController = CartController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Mahsulotni savatga qo‘shish' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Mahsulot savatga qo‘shildi ✅' }),
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Mahsulotni savatga qo‘shish' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [add_item_dto_1.CreateCartDto, Object]),
    __metadata("design:returntype", Promise)
], CartController.prototype, "addToCart", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Foydalanuvchi savatidagi mahsulotlarni ko‘rish' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Savatdagi mahsulotlar ro‘yxati' }),
    (0, common_1.Get)(':userId'),
    (0, swagger_1.ApiParam)({ name: 'userId', type: 'string' }),
    __param(0, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CartController.prototype, "getUserCart", null);
__decorate([
    (0, common_1.Patch)('increment/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Savatdagi mahsulot miqdorini +1 qilish' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Mahsulot miqdori oshirildi' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CartController.prototype, "increment", null);
__decorate([
    (0, common_1.Patch)('decrement/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Savatdagi mahsulot miqdorini -1 qilish' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Mahsulot miqdori kamaytirildi' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Mahsulot topilmadi' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: 'string' }),
    (0, common_1.Patch)(':id/decrement'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CartController.prototype, "decrement", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Savatdagi mahsulotni o‘chirish' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Mahsulot savatdan o‘chirildi 🗑️' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CartController.prototype, "remove", null);
exports.CartController = CartController = __decorate([
    (0, swagger_1.ApiTags)('Cart (Savat)'),
    (0, common_1.Controller)('cart'),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    __metadata("design:paramtypes", [cart_service_1.CartService])
], CartController);
//# sourceMappingURL=cart.controller.js.map