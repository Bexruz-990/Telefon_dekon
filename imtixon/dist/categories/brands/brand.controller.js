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
exports.BrandsController = void 0;
const common_1 = require("@nestjs/common");
const brand_service_1 = require("./brand.service");
const create_brand_dto_1 = require("./dto/create-brand.dto");
const swagger_1 = require("@nestjs/swagger");
const roles_decorator_1 = require("../../auth/decorators/roles.decorator");
let BrandsController = class BrandsController {
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
        return this.service.getCategoryWithBrandCount(id);
    }
    remove(id) {
        return this.service.remove(id);
    }
};
exports.BrandsController = BrandsController;
__decorate([
    (0, roles_decorator_1.Roles)('Admin', 'Superadmin'),
    (0, swagger_1.ApiOperation)({ summary: 'Yangi brand yaratish' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Brand muvaffaqiyatli yaratildi ✅' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Noto‘g‘ri ma’lumotlar' }),
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create new brand' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_brand_dto_1.CreateBrandDto]),
    __metadata("design:returntype", void 0)
], BrandsController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Barcha brandlarni olish' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Brandlar ro‘yxati qaytarildi' }),
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all brands' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BrandsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get one brands' }),
    (0, swagger_1.ApiOperation)({ summary: 'Kategoriya bo‘yicha maʼlumot va brandlar soni' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Kategoriya topildi' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], BrandsController.prototype, "findOne", null);
__decorate([
    (0, roles_decorator_1.Roles)('Admin', 'Superadmin'),
    (0, swagger_1.ApiOperation)({ summary: 'ID orqali brandni o‘chirish' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Brand o‘chirildi 🗑️' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Brand topilmadi' }),
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete brand by ID' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BrandsController.prototype, "remove", null);
exports.BrandsController = BrandsController = __decorate([
    (0, swagger_1.ApiTags)('Brands'),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, common_1.Controller)('brands'),
    __metadata("design:paramtypes", [brand_service_1.BrandsService])
], BrandsController);
//# sourceMappingURL=brand.controller.js.map