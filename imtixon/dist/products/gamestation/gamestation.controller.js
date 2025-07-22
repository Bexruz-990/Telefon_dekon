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
exports.GameStationController = void 0;
const common_1 = require("@nestjs/common");
const gamestation_service_1 = require("./gamestation.service");
const swagger_1 = require("@nestjs/swagger");
const create_product_dto_1 = require("../dto/create-product.dto");
const update_product_dto_1 = require("../dto/update-product.dto");
const roles_decorator_1 = require("../../auth/decorators/roles.decorator");
let GameStationController = class GameStationController {
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
exports.GameStationController = GameStationController;
__decorate([
    (0, common_1.Post)(),
    (0, roles_decorator_1.Roles)('Admin', 'Superadmin'),
    (0, swagger_1.ApiOperation)({ summary: 'Game Station yaratish' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Game Station yaratildi ✅' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_product_dto_1.CreateGameStationDto]),
    __metadata("design:returntype", void 0)
], GameStationController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Barcha Game Station larni olish' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Game Station lar ro‘yxati' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], GameStationController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'ID bo‘yicha Game Station olish' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: 'string', description: 'Game Station ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Bitta Game Station' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], GameStationController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, roles_decorator_1.Roles)('Admin', 'Superadmin'),
    (0, swagger_1.ApiOperation)({ summary: 'Game Station yangilash' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: 'string', description: 'Game Station ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Game Station yangilandi ✅' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_product_dto_1.UpdateGameStationDto]),
    __metadata("design:returntype", void 0)
], GameStationController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, roles_decorator_1.Roles)('Admin', 'Superadmin'),
    (0, swagger_1.ApiOperation)({ summary: 'Game Station o‘chirish' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: 'string', description: 'Game Station ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Game Station o‘chirildi 🗑️' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], GameStationController.prototype, "remove", null);
__decorate([
    (0, common_1.Post)(':id/sell'),
    (0, swagger_1.ApiOperation)({ summary: 'Game Station sotish (amount kamayadi)' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: 'string', description: 'Game Station ID' }),
    (0, swagger_1.ApiParam)({ name: 'quantity', type: 'number', description: 'Sotiladigan miqdor' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Sotish muvaffaqiyatli ✅' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Query)('quantity')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", void 0)
], GameStationController.prototype, "sell", null);
__decorate([
    (0, common_1.Post)(':id/restock'),
    (0, swagger_1.ApiOperation)({ summary: 'Omborga Game Station qo‘shish (amount oshadi)' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: 'string', description: 'Game Station ID' }),
    (0, swagger_1.ApiParam)({ name: 'quantity', type: 'number', description: 'Qo‘shiladigan miqdor' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Omborga qo‘shildi ✅' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Query)('quantity')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", void 0)
], GameStationController.prototype, "restock", null);
exports.GameStationController = GameStationController = __decorate([
    (0, swagger_1.ApiTags)('products/Game Station'),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, common_1.Controller)('products/gamestations'),
    __metadata("design:paramtypes", [gamestation_service_1.GameStationService])
], GameStationController);
//# sourceMappingURL=gamestation.controller.js.map