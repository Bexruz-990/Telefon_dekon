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
exports.SmartwatchProductController = void 0;
const common_1 = require("@nestjs/common");
const smartwatch_service_1 = require("./smartwatch.service");
const swagger_1 = require("@nestjs/swagger");
const create_product_dto_1 = require("../dto/create-product.dto");
const update_product_dto_1 = require("../dto/update-product.dto");
const roles_decorator_1 = require("../../auth/decorators/roles.decorator");
let SmartwatchProductController = class SmartwatchProductController {
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
exports.SmartwatchProductController = SmartwatchProductController;
__decorate([
    (0, common_1.Post)(),
    (0, roles_decorator_1.Roles)('Admin', 'Superadmin'),
    (0, swagger_1.ApiOperation)({ summary: 'Smart Watch yaratish' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Smart Watch yaratildi ✅' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Noto‘g‘ri ma’lumotlar' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Server xatosi' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Smart Watch topilmadi' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Ruxsat etilmagan' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Autentifikatsiya xatosi' }),
    (0, swagger_1.ApiResponse)({ status: 409, description: 'Konflikt' }),
    (0, swagger_1.ApiResponse)({ status: 422, description: 'Unprocessable Entity' }),
    (0, swagger_1.ApiResponse)({ status: 503, description: 'Xizmat mavjud emas' }),
    (0, swagger_1.ApiResponse)({ status: 504, description: 'Gateway Timeout' }),
    (0, swagger_1.ApiResponse)({ status: 429, description: 'Too Many Requests' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_product_dto_1.CreateSmartwatchDto]),
    __metadata("design:returntype", void 0)
], SmartwatchProductController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Barcha Smart Watch lar' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Barcha Smart Watch lar ro‘yxati' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Smart Watch topilmadi' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Server xatosi' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Ruxsat etilmagan' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Autentifikatsiya xatosi' }),
    (0, swagger_1.ApiResponse)({ status: 409, description: 'Konflikt' }),
    (0, swagger_1.ApiResponse)({ status: 422, description: 'Unprocessable Entity' }),
    (0, swagger_1.ApiResponse)({ status: 503, description: 'Xizmat mavjud emas' }),
    (0, swagger_1.ApiResponse)({ status: 504, description: 'Gateway Timeout' }),
    (0, swagger_1.ApiResponse)({ status: 429, description: 'Too Many Requests' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SmartwatchProductController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Bitta Smart Watch olish' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Bitta Smart Watch' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Smart Watch topilmadi' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Server xatosi' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Ruxsat etilmagan' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Autentifikatsiya xatosi' }),
    (0, swagger_1.ApiResponse)({ status: 409, description: 'Konflikt' }),
    (0, swagger_1.ApiResponse)({ status: 422, description: 'Unprocessable Entity' }),
    (0, swagger_1.ApiResponse)({ status: 503, description: 'Xizmat mavjud emas' }),
    (0, swagger_1.ApiResponse)({ status: 504, description: 'Gateway Timeout' }),
    (0, swagger_1.ApiResponse)({ status: 429, description: 'Too Many Requests' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SmartwatchProductController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, roles_decorator_1.Roles)('Admin', 'Superadmin'),
    (0, swagger_1.ApiOperation)({ summary: 'Smart Watch yangilash' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Smart Watch yangilandi ✅' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Smart Watch topilmadi' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Server xatosi' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Ruxsat etilmagan' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Autentifikatsiya xatosi' }),
    (0, swagger_1.ApiResponse)({ status: 409, description: 'Konflikt' }),
    (0, swagger_1.ApiResponse)({ status: 422, description: 'Unprocessable Entity' }),
    (0, swagger_1.ApiResponse)({ status: 503, description: 'Xizmat mavjud emas' }),
    (0, swagger_1.ApiResponse)({ status: 504, description: 'Gateway Timeout' }),
    (0, swagger_1.ApiResponse)({ status: 429, description: 'Too Many Requests' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_product_dto_1.UpdateSmartwatchDto]),
    __metadata("design:returntype", void 0)
], SmartwatchProductController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, roles_decorator_1.Roles)('Admin', 'Superadmin'),
    (0, swagger_1.ApiOperation)({ summary: 'Smart Watch o‘chirish' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Smart Watch o‘chirildi 🗑️' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Smart Watch topilmadi' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Server xatosi' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Ruxsat etilmagan' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Autentifikatsiya xatosi' }),
    (0, swagger_1.ApiResponse)({ status: 409, description: 'Konflikt' }),
    (0, swagger_1.ApiResponse)({ status: 422, description: 'Unprocessable Entity' }),
    (0, swagger_1.ApiResponse)({ status: 503, description: 'Xizmat mavjud emas' }),
    (0, swagger_1.ApiResponse)({ status: 504, description: 'Gateway Timeout' }),
    (0, swagger_1.ApiResponse)({ status: 429, description: 'Too Many Requests' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SmartwatchProductController.prototype, "remove", null);
__decorate([
    (0, common_1.Post)(':id/sell'),
    (0, swagger_1.ApiOperation)({ summary: 'Sotish (amount kamayadi)' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Sotish muvaffaqiyatli ✅' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Smart Watch topilmadi' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Server xatosi' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Ruxsat etilmagan' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Autentifikatsiya xatosi' }),
    (0, swagger_1.ApiResponse)({ status: 409, description: 'Konflikt' }),
    (0, swagger_1.ApiResponse)({ status: 422, description: 'Unprocessable Entity' }),
    (0, swagger_1.ApiResponse)({ status: 503, description: 'Xizmat mavjud emas' }),
    (0, swagger_1.ApiResponse)({ status: 504, description: 'Gateway Timeout' }),
    (0, swagger_1.ApiResponse)({ status: 429, description: 'Too Many Requests' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Query)('quantity')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", void 0)
], SmartwatchProductController.prototype, "sell", null);
__decorate([
    (0, common_1.Post)(':id/restock'),
    (0, swagger_1.ApiOperation)({ summary: 'Omborga qo‘shish (amount oshadi)' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Omborga qo‘shildi ✅' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Smart Watch topilmadi' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Server xatosi' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Ruxsat etilmagan' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Autentifikatsiya xatosi' }),
    (0, swagger_1.ApiResponse)({ status: 409, description: 'Konflikt' }),
    (0, swagger_1.ApiResponse)({ status: 422, description: 'Unprocessable Entity' }),
    (0, swagger_1.ApiResponse)({ status: 503, description: 'Xizmat mavjud emas' }),
    (0, swagger_1.ApiResponse)({ status: 504, description: 'Gateway Timeout' }),
    (0, swagger_1.ApiResponse)({ status: 429, description: 'Too Many Requests' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Query)('quantity')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", void 0)
], SmartwatchProductController.prototype, "restock", null);
exports.SmartwatchProductController = SmartwatchProductController = __decorate([
    (0, swagger_1.ApiTags)('products/Smart Watches'),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, common_1.Controller)('products/smartwatches'),
    __metadata("design:paramtypes", [smartwatch_service_1.SmartwatchProductService])
], SmartwatchProductController);
//# sourceMappingURL=smartwatch.controller.js.map