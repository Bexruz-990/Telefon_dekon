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
exports.SmartphoneProductController = void 0;
const common_1 = require("@nestjs/common");
const smartphone_service_1 = require("./smartphone.service");
const create_product_dto_1 = require("../dto/create-product.dto");
const update_product_dto_1 = require("../dto/update-product.dto");
const swagger_1 = require("@nestjs/swagger");
const roles_decorator_1 = require("../../auth/decorators/roles.decorator");
let SmartphoneProductController = class SmartphoneProductController {
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
exports.SmartphoneProductController = SmartphoneProductController;
__decorate([
    (0, common_1.Post)(),
    (0, roles_decorator_1.Roles)('Admin', 'Superadmin'),
    (0, swagger_1.ApiOperation)({ summary: 'Yangi smartfon yaratish' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Smartfon yaratildi ✅' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Noto‘g‘ri ma’lumotlar' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Server xatosi' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Smartfon topilmadi' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Ruxsat etilmagan' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Autentifikatsiya xatosi' }),
    (0, swagger_1.ApiResponse)({ status: 409, description: 'Konflikt' }),
    (0, swagger_1.ApiResponse)({ status: 422, description: 'Unprocessable Entity' }),
    (0, swagger_1.ApiResponse)({ status: 503, description: 'Xizmat mavjud emas' }),
    (0, swagger_1.ApiResponse)({ status: 504, description: 'Gateway Timeout' }),
    (0, swagger_1.ApiResponse)({ status: 429, description: 'Too Many Requests' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_product_dto_1.CreateSmartphoneDto]),
    __metadata("design:returntype", void 0)
], SmartphoneProductController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Barcha smartfonlar' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Barcha smartfonlar ro‘yxati' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Smartfon topilmadi' }),
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
], SmartphoneProductController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Smartfonni ID orqali olish' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Bitta smartfon' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Smartfon topilmadi' }),
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
], SmartphoneProductController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, roles_decorator_1.Roles)('Admin', 'Superadmin'),
    (0, swagger_1.ApiOperation)({ summary: 'Smartfonni yangilash' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Smartfon yangilandi ✅' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Smartfon topilmadi' }),
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
    __metadata("design:paramtypes", [String, update_product_dto_1.UpdateSmartphoneDto]),
    __metadata("design:returntype", void 0)
], SmartphoneProductController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, roles_decorator_1.Roles)('Admin', 'Superadmin'),
    (0, swagger_1.ApiOperation)({ summary: 'Smartfonni o‘chirish' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Smartfon o‘chirildi 🗑️' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Smartfon topilmadi' }),
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
], SmartphoneProductController.prototype, "remove", null);
__decorate([
    (0, common_1.Post)(':id/sell'),
    (0, swagger_1.ApiOperation)({ summary: 'Smartfonni sotish (amount kamayadi)' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Sotish muvaffaqiyatli ✅' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Smartfon topilmadi' }),
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
], SmartphoneProductController.prototype, "sell", null);
__decorate([
    (0, common_1.Post)(':id/restock'),
    (0, swagger_1.ApiOperation)({ summary: 'Smartfonni omborga qo‘shish (amount oshadi)' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Omborga qo‘shildi ✅' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Smartfon topilmadi' }),
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
], SmartphoneProductController.prototype, "restock", null);
exports.SmartphoneProductController = SmartphoneProductController = __decorate([
    (0, swagger_1.ApiTags)('products/Smartphones'),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, common_1.Controller)('products/smartphones'),
    __metadata("design:paramtypes", [smartphone_service_1.SmartphoneProductService])
], SmartphoneProductController);
//# sourceMappingURL=smartphone.controller.js.map