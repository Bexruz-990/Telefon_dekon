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
exports.CommentController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const comment_service_1 = require("./comment.service");
const create_comment_dto_1 = require("./dto/create-comment.dto");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const roles_decorator_1 = require("../auth/decorators/roles.decorator");
const roles_guard_1 = require("../auth/guards/roles.guard");
let CommentController = class CommentController {
    commentService;
    constructor(commentService) {
        this.commentService = commentService;
    }
    create(dto, req) {
        const userId = req.user.sub;
        return this.commentService.create({ ...dto, userId });
    }
    findByProduct(productId, productType) {
        return this.commentService.findByProduct(productId, productType);
    }
    remove(id) {
        return this.commentService.remove(id);
    }
};
exports.CommentController = CommentController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Izoh qoldirish' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Izoh qo‘shildi ✅' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Noto‘g‘ri ma’lumotlar' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Token talab qilinadi' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_comment_dto_1.CreateCommentDto, Object]),
    __metadata("design:returntype", void 0)
], CommentController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('admin', 'Superadmin'),
    (0, swagger_1.ApiOperation)({ summary: 'Mahsulotga yozilgan izohlarni olish' }),
    (0, swagger_1.ApiParam)({ name: 'productId', required: true, description: 'Mahsulot IDsi' }),
    (0, swagger_1.ApiParam)({ name: 'productType', required: true, description: 'Mahsulot turi' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Izohlar ro‘yxati' }),
    __param(0, (0, common_1.Query)('productId')),
    __param(1, (0, common_1.Query)('productType')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", void 0)
], CommentController.prototype, "findByProduct", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('admin', 'Superadmin'),
    (0, swagger_1.ApiOperation)({ summary: 'Izohni o‘chirish' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Izoh o‘chirildi 🗑️' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CommentController.prototype, "remove", null);
exports.CommentController = CommentController = __decorate([
    (0, swagger_1.ApiTags)('Comments'),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, common_1.Controller)('comments'),
    __metadata("design:paramtypes", [comment_service_1.CommentService])
], CommentController);
//# sourceMappingURL=comment.controller.js.map