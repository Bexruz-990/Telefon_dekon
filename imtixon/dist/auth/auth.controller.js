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
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const register_dto_1 = require("./dto/register.dto");
const login_dto_1 = require("./dto/login.dto");
const swagger_1 = require("@nestjs/swagger");
const verify_dto_1 = require("./dto/verify.dto");
const update_user_dto_1 = require("./dto/update-user.dto");
const roles_decorator_1 = require("./decorators/roles.decorator");
const public_decarator_1 = require("./decorators/public.decarator");
let AuthController = class AuthController {
    authService;
    constructor(authService) {
        this.authService = authService;
    }
    register(dto) {
        return this.authService.register(dto);
    }
    verify(verifyOtpDto) {
        return this.authService.verifyOtp(verifyOtpDto.email, verifyOtpDto.otp);
    }
    async login(loginDto, res) {
        const result = await this.authService.login(loginDto, res);
        return res.status(common_1.HttpStatus.OK).json(result);
    }
    logout(res) {
        return this.authService.logout(res);
    }
    findAll() {
        return this.authService.findAll();
    }
    findOne(id) {
        return this.authService.findOne(id);
    }
    update(id, dto) {
        return this.authService.update(id, dto);
    }
    remove(id) {
        return this.authService.remove(id);
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Registratsiya qilish' }),
    (0, public_decarator_1.Public)(),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Registratsiya muvaffaqiyatli tasdiqlandi' }),
    (0, common_1.Post)('register'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [register_dto_1.RegisterDto]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "register", null);
__decorate([
    (0, public_decarator_1.Public)(),
    (0, common_1.Post)('verify'),
    (0, swagger_1.ApiOperation)({ summary: 'OTP kodni tasdiqlash' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'OTP muvaffaqiyatli tasdiqlandi' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Noto‘g‘ri OTP yoki email' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [verify_dto_1.VerifyOtpDto]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "verify", null);
__decorate([
    (0, public_decarator_1.Public)(),
    (0, common_1.Post)('login'),
    (0, swagger_1.ApiOperation)({ summary: 'Foydalanuvchi tizimga kirishi' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Muvaffaqiyatli kirish' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Email yoki parol noto‘g‘ri' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Email tasdiqlanmagan' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_dto_1.LoginDto, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    (0, public_decarator_1.Public)(),
    (0, swagger_1.ApiOperation)({ summary: 'Foydalanuvchini tizimdan chiqarish' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Logout muvaffaqiyatli ✅' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Autentifikatsiya xatosi' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Ruxsat etilmagan' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Server xatosi' }),
    (0, swagger_1.ApiResponse)({ status: 503, description: 'Xizmat mavjud emas' }),
    (0, swagger_1.ApiResponse)({ status: 504, description: 'Gateway Timeout' }),
    (0, swagger_1.ApiResponse)({ status: 429, description: 'Too Many Requests' }),
    (0, common_1.Post)('logout'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "logout", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Barcha foydalanuvchilarni olish' }),
    (0, roles_decorator_1.Roles)('Admin', 'Superadmin'),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Foydalanuvchilar ro‘yxati' }),
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Barcha foydalanuvchilar' }),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "findAll", null);
__decorate([
    (0, roles_decorator_1.Roles)('Admin', 'Superadmin'),
    (0, swagger_1.ApiOperation)({ summary: 'ID orqali foydalanuvchini olish' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Foydalanuvchi topildi ✅' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Foydalanuvchi topilmadi' }),
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'ID orqali foydalanuvchini olish' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "findOne", null);
__decorate([
    (0, roles_decorator_1.Roles)('Admin', 'Superadmin'),
    (0, swagger_1.ApiOperation)({ summary: 'Foydalanuvchini yangilash' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Foydalanuvchi yangilandi ✅' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Foydalanuvchi topilmadi' }),
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Foydalanuvchini yangilash' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_user_dto_1.UpdateUserDto]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "update", null);
__decorate([
    (0, roles_decorator_1.Roles)('Admin', 'Superadmin'),
    (0, swagger_1.ApiOperation)({ summary: 'Foydalanuvchini o‘chirish' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Foydalanuvchi o‘chirildi 🗑️' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Foydalanuvchi topilmadi' }),
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Foydalanuvchini o‘chirish' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "remove", null);
exports.AuthController = AuthController = __decorate([
    (0, common_1.Controller)('auth'),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
//# sourceMappingURL=auth.controller.js.map