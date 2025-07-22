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
exports.CartService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const cart_item_entity_1 = require("./entity/cart-item.entity");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("../auth/entity/user.entity");
const product_entity_1 = require("../products/entity/product.entity");
const product_entity_2 = require("../products/entity/product.entity");
const product_entity_3 = require("../products/entity/product.entity");
const product_entity_4 = require("../products/entity/product.entity");
const product_entity_5 = require("../products/entity/product.entity");
let CartService = class CartService {
    cartRepo;
    userRepo;
    smartphoneRepo;
    computerRepo;
    headphoneRepo;
    smartwatchRepo;
    gamestationRepo;
    constructor(cartRepo, userRepo, smartphoneRepo, computerRepo, headphoneRepo, smartwatchRepo, gamestationRepo) {
        this.cartRepo = cartRepo;
        this.userRepo = userRepo;
        this.smartphoneRepo = smartphoneRepo;
        this.computerRepo = computerRepo;
        this.headphoneRepo = headphoneRepo;
        this.smartwatchRepo = smartwatchRepo;
        this.gamestationRepo = gamestationRepo;
    }
    async getProductByType(type, id) {
        switch (type) {
            case 'smartphone':
                return this.smartphoneRepo.findOne({ where: { id } });
            case 'computer':
                return this.computerRepo.findOne({ where: { id } });
            case 'headphones':
                return this.headphoneRepo.findOne({ where: { id } });
            case 'smartwatch':
                return this.smartwatchRepo.findOne({ where: { id } });
            case 'gamestation':
                return this.gamestationRepo.findOne({ where: { id } });
            default:
                throw new common_1.BadRequestException('Noto‘g‘ri product turi');
        }
    }
    async addToCart(dto, userId) {
        const user = await this.userRepo.findOne({ where: ({ id: userId }) });
        if (!user)
            throw new common_1.NotFoundException('Foydalanuvchi topilmadi');
        const product = await this.getProductByType(dto.productType, String(dto.productId));
        if (!product)
            throw new common_1.NotFoundException('Mahsulot topilmadi');
        if (dto.quantity > product.amount) {
            throw new common_1.BadRequestException(`Omborda faqat ${product.amount} ta mavjud`);
        }
        let item = await this.cartRepo.findOne({
            where: {
                user: { id: userId },
                productId: dto.productId,
                productType: dto.productType,
            },
            relations: ['user'],
        });
        if (item) {
            const newQuantity = item.quantity + dto.quantity;
            if (newQuantity > product.amount) {
                throw new common_1.BadRequestException('Zaxiradan ortiq qo‘shib bo‘lmaydi');
            }
            item.quantity = newQuantity;
            item.totalPrice = item.quantity * Number(item.price);
        }
        else {
            item = this.cartRepo.create({
                user,
                productId: dto.productId,
                productType: dto.productType,
                name: dto.name,
                price: dto.price,
                quantity: dto.quantity,
                totalPrice: dto.price * dto.quantity,
                imageUrl: dto.imageUrl,
            });
        }
        const saved = await this.cartRepo.save(item);
        return {
            message: 'Savat yangilandi yoki qo‘shildi ✅',
            item: saved,
        };
    }
    async getUserCart(userId) {
        const items = await this.cartRepo.find({
            where: { user: { id: userId } },
        });
        const totalCost = items.reduce((sum, item) => sum + Number(item.totalPrice), 0);
        return {
            count: items.length,
            totalCost,
            items,
        };
    }
    async increment(cartId) {
        const item = await this.cartRepo.findOne({ where: { id: cartId } });
        if (!item)
            throw new common_1.NotFoundException('Savat elementi topilmadi');
        const product = await this.getProductByType(item.productType, String(item.productId));
        if (!product)
            throw new common_1.NotFoundException('Mahsulot topilmadi');
        if (item.quantity + 1 > product.amount) {
            throw new common_1.BadRequestException('Omborda yetarli mahsulot yo‘q');
        }
        item.quantity++;
        item.totalPrice = item.quantity * Number(item.price);
        return await this.cartRepo.save(item);
    }
    async decrement(cartId) {
        const item = await this.cartRepo.findOne({ where: { id: cartId } });
        if (!item)
            throw new common_1.NotFoundException('Savat topilmadi');
        if (item.quantity > 1) {
            item.quantity--;
            item.totalPrice = item.quantity * Number(item.price);
            return await this.cartRepo.save(item);
        }
        else {
            await this.cartRepo.remove(item);
            return { message: 'Savatdan mahsulot o‘chirildi' };
        }
    }
    async remove(cartId) {
        const item = await this.cartRepo.findOne({ where: { id: cartId } });
        if (!item)
            throw new common_1.NotFoundException('Savat elementi topilmadi');
        await this.cartRepo.remove(item);
        return { message: 'O‘chirildi 🗑️' };
    }
};
exports.CartService = CartService;
exports.CartService = CartService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(cart_item_entity_1.Cart)),
    __param(1, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __param(2, (0, typeorm_1.InjectRepository)(product_entity_1.SmartphoneProduct)),
    __param(3, (0, typeorm_1.InjectRepository)(product_entity_2.ComputerProduct)),
    __param(4, (0, typeorm_1.InjectRepository)(product_entity_3.HeadphonesProduct)),
    __param(5, (0, typeorm_1.InjectRepository)(product_entity_4.SmartwatchProduct)),
    __param(6, (0, typeorm_1.InjectRepository)(product_entity_5.GameStationProduct)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], CartService);
//# sourceMappingURL=cart.service.js.map