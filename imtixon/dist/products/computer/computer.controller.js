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
exports.ComputerProductController = void 0;
const common_1 = require("@nestjs/common");
const computer_service_1 = require("./computer.service");
const create_product_dto_1 = require("../dto/create-product.dto");
const update_product_dto_1 = require("../dto/update-product.dto");
const swagger_1 = require("@nestjs/swagger");
const roles_decorator_1 = require("../../auth/decorators/roles.decorator");
const jwt_auth_guard_1 = require("../../auth/guards/jwt-auth.guard");
const roles_guard_1 = require("../../auth/guards/roles.guard");
let ComputerProductController = class ComputerProductController {
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
};
exports.ComputerProductController = ComputerProductController;
__decorate([
    (0, common_1.Post)(),
    (0, roles_decorator_1.Roles)('Admin', 'Superadmin'),
    (0, swagger_1.ApiOperation)({ summary: 'Yangi kompyuter yaratish' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Kompyuter yaratildi ✅' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Noto‘g‘ri ma’lumotlar' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Ruxsat etilmagan' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Token noto‘g‘ri yoki muddati o‘tgan' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_product_dto_1.CreateComputerDto]),
    __metadata("design:returntype", void 0)
], ComputerProductController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Barcha kompyuterlarni olish' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Barcha kompyuterlar ro‘yxati' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Kompyuterlar topilmadi' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ComputerProductController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'ID bo‘yicha kompyuterni olish' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Topilgan kompyuter' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Kompyuter topilmadi' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ComputerProductController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, roles_decorator_1.Roles)('Admin', 'Superadmin'),
    (0, swagger_1.ApiOperation)({ summary: 'Kompyuterni yangilash' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Kompyuter yangilandi ✅' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Kompyuter topilmadi' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Ruxsat etilmagan' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Token xato' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_product_dto_1.UpdateComputerDto]),
    __metadata("design:returntype", void 0)
], ComputerProductController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, roles_decorator_1.Roles)('Admin', 'Superadmin'),
    (0, swagger_1.ApiOperation)({ summary: 'Kompyuterni o‘chirish' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Kompyuter o‘chirildi 🗑️' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Kompyuter topilmadi' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Ruxsat etilmagan' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Token xato' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ComputerProductController.prototype, "remove", null);
exports.ComputerProductController = ComputerProductController = __decorate([
    (0, swagger_1.ApiTags)('products/Computers'),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, common_1.Controller)('products/computers'),
    __metadata("design:paramtypes", [computer_service_1.ComputerProductService])
], ComputerProductController);
//# sourceMappingURL=computer.controller.js.map