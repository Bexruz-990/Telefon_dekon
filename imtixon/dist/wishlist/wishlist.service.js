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
exports.WishlistService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const wishlist_entity_1 = require("./entity/wishlist.entity");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("../auth/entity/user.entity");
let WishlistService = class WishlistService {
    wishlistRepo;
    userRepo;
    constructor(wishlistRepo, userRepo) {
        this.wishlistRepo = wishlistRepo;
        this.userRepo = userRepo;
    }
    async addToWishlist(dto) {
        const user = await this.userRepo.findOne({ where: { id: dto.userId } });
        if (!user)
            throw new common_1.NotFoundException('Foydalanuvchi topilmadi');
        let item = await this.wishlistRepo.findOne({
            where: {
                user: { id: dto.userId },
                productId: dto.productId,
                productType: dto.productType,
            },
        });
        if (item) {
            item.quantity += dto.quantity;
            item.totalPrice = item.quantity * Number(item.price);
        }
        else {
            item = this.wishlistRepo.create({
                user,
                ...dto,
                totalPrice: dto.quantity * Number(dto.price),
            });
        }
        return await this.wishlistRepo.save(item);
    }
    async findUserWishlist(userId) {
        const items = await this.wishlistRepo.find({
            where: { user: { id: userId } },
        });
        const totalCost = items.reduce((sum, item) => sum + Number(item.totalPrice), 0);
        return {
            count: items.length,
            totalCost,
            items,
        };
    }
    async incrementQuantity(id) {
        const item = await this.wishlistRepo.findOneBy({ id });
        if (!item)
            throw new common_1.NotFoundException('Element topilmadi');
        item.quantity++;
        item.totalPrice = item.quantity * Number(item.price);
        return await this.wishlistRepo.save(item);
    }
    async decrementQuantity(id) {
        const item = await this.wishlistRepo.findOneBy({ id });
        if (!item)
            throw new common_1.NotFoundException('Element topilmadi');
        if (item.quantity > 1) {
            item.quantity--;
            item.totalPrice = item.quantity * Number(item.price);
            return await this.wishlistRepo.save(item);
        }
        else {
            await this.wishlistRepo.remove(item);
            return { message: 'Element o‘chirildi' };
        }
    }
    async remove(id) {
        const item = await this.wishlistRepo.findOneBy({ id });
        if (!item)
            throw new common_1.NotFoundException('Element topilmadi');
        await this.wishlistRepo.remove(item);
        return { message: 'Element o‘chirildi 🗑️' };
    }
};
exports.WishlistService = WishlistService;
exports.WishlistService = WishlistService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(wishlist_entity_1.Wishlist)),
    __param(1, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], WishlistService);
//# sourceMappingURL=wishlist.service.js.map