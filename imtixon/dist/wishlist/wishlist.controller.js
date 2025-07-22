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
exports.WishlistController = void 0;
const common_1 = require("@nestjs/common");
const wishlist_service_1 = require("./wishlist.service");
const create_wishlist_dto_1 = require("./dto/create-wishlist.dto");
const swagger_1 = require("@nestjs/swagger");
let WishlistController = class WishlistController {
    wishlistService;
    constructor(wishlistService) {
        this.wishlistService = wishlistService;
    }
    addToWishlist(dto) {
        return this.wishlistService.addToWishlist(dto);
    }
    getUserWishlist(userId) {
        return this.wishlistService.findUserWishlist(userId);
    }
    increment(id) {
        return this.wishlistService.incrementQuantity(id);
    }
    decrement(id) {
        return this.wishlistService.decrementQuantity(id);
    }
    remove(id) {
        return this.wishlistService.remove(id);
    }
};
exports.WishlistController = WishlistController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Wishlistga mahsulot qo‘shish yoki yangilash' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Wishlist yangilandi ✅' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_wishlist_dto_1.CreateWishlistDto]),
    __metadata("design:returntype", void 0)
], WishlistController.prototype, "addToWishlist", null);
__decorate([
    (0, common_1.Get)(':userId'),
    (0, swagger_1.ApiOperation)({ summary: 'Foydalanuvchi wishlistini olish' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Wishlist ro‘yxati' }),
    __param(0, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], WishlistController.prototype, "getUserWishlist", null);
__decorate([
    (0, common_1.Patch)('increment/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Mahsulot miqdorini +1 qilish' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Miqdori oshirildi ✅' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], WishlistController.prototype, "increment", null);
__decorate([
    (0, common_1.Patch)('decrement/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Mahsulot miqdorini -1 qilish' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Miqdori kamaytirildi ✅' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], WishlistController.prototype, "decrement", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Wishlistdan mahsulotni o‘chirish' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Wishlistdan o‘chirildi 🗑️' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], WishlistController.prototype, "remove", null);
exports.WishlistController = WishlistController = __decorate([
    (0, swagger_1.ApiTags)('Wishlist'),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, common_1.Controller)('wishlist'),
    __metadata("design:paramtypes", [wishlist_service_1.WishlistService])
], WishlistController);
//# sourceMappingURL=wishlist.controller.js.map