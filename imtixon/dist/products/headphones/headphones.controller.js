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
exports.HeadphonesProductController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const headphones_service_1 = require("./headphones.service");
const create_product_dto_1 = require("../dto/create-product.dto");
const update_product_dto_1 = require("../dto/update-product.dto");
const roles_decorator_1 = require("../../auth/decorators/roles.decorator");
let HeadphonesProductController = class HeadphonesProductController {
    service;
    constructor(service) {
        this.service = service;
    }
    create(dto) {
        return this.service.create(dto);
    }
    findAll() {
        return this.service.findAll();
    }
    findOne(id) {
        return this.service.findOne(id);
    }
    update(id, dto) {
        return this.service.update(id, dto);
    }
    remove(id) {
        return this.service.remove(id);
    }
    sell(id, quantity) {
        return this.service.sell(id, Number(quantity));
    }
    restock(id, quantity) {
        return this.service.restock(id, Number(quantity));
    }
};
exports.HeadphonesProductController = HeadphonesProductController;
__decorate([
    (0, common_1.Post)(),
    (0, roles_decorator_1.Roles)('Admin', 'Superadmin'),
    (0, swagger_1.ApiOperation)({ summary: 'Naushnik yaratish' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Naushnik yaratildi ✅' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Noto‘g‘ri ma’lumotlar' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Naushnik topilmadi' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Ruxsat etilmagan' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Autentifikatsiya xatosi' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Server xatosi' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_product_dto_1.CreateHeadphonesDto]),
    __metadata("design:returntype", void 0)
], HeadphonesProductController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Barcha naushniklar' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Barcha naushniklar ro‘yxati' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], HeadphonesProductController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Bitta naushnik olish' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Bitta naushnik' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Naushnik topilmadi' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], HeadphonesProductController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, roles_decorator_1.Roles)('Admin', 'Superadmin'),
    (0, swagger_1.ApiOperation)({ summary: 'Naushnik yangilash' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Naushnik yangilandi ✅' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Naushnik topilmadi' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_product_dto_1.UpdateHeadphonesDto]),
    __metadata("design:returntype", void 0)
], HeadphonesProductController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, roles_decorator_1.Roles)('Admin', 'Superadmin'),
    (0, swagger_1.ApiOperation)({ summary: 'Naushnik o‘chirish' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Naushnik o‘chirildi 🗑️' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Naushnik topilmadi' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], HeadphonesProductController.prototype, "remove", null);
__decorate([
    (0, common_1.Post)(':id/sell'),
    (0, swagger_1.ApiOperation)({ summary: 'Naushnik sotish (amount kamayadi)' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Naushnik sotildi ✅' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Naushnik topilmadi' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Query)('quantity')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", void 0)
], HeadphonesProductController.prototype, "sell", null);
__decorate([
    (0, common_1.Post)(':id/restock'),
    (0, swagger_1.ApiOperation)({ summary: 'Naushnik omborga qo‘shish (amount oshadi)' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Naushnik omborga qo‘shildi ✅' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Naushnik topilmadi' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Query)('quantity')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", void 0)
], HeadphonesProductController.prototype, "restock", null);
exports.HeadphonesProductController = HeadphonesProductController = __decorate([
    (0, swagger_1.ApiTags)('products/Headphones'),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, common_1.Controller)('products/headphones'),
    __metadata("design:paramtypes", [headphones_service_1.HeadphonesProductService])
], HeadphonesProductController);
//# sourceMappingURL=headphones.controller.js.map