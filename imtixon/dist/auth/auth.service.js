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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const bcrypt = require("bcrypt");
const email_service_1 = require("./email/email.service");
const user_entity_1 = require("./entity/user.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let AuthService = class AuthService {
    jwtService;
    emailService;
    userRepo;
    pendingUsers = new Map();
    constructor(jwtService, emailService, userRepo) {
        this.jwtService = jwtService;
        this.emailService = emailService;
        this.userRepo = userRepo;
    }
    async register(dto) {
        const existing = await this.userRepo.findOne({ where: { email: dto.email } });
        if (existing)
            throw new common_1.BadRequestException('Email band');
        if (this.pendingUsers.has(dto.email)) {
            throw new common_1.BadRequestException('Bu emailga allaqachon kod yuborilgan');
        }
        const hashedPassword = await bcrypt.hash(dto.password, 10);
        const otp = Math.floor(100000 + Math.random() * 900000).toString();
        this.pendingUsers.set(dto.email, {
            ...dto,
            password: hashedPassword,
            otp,
        });
        await this.emailService.sendOtp(dto.email, otp);
        return { message: 'Tasdiqlash kodi emailga yuborildi' };
    }
    async verifyOtp(email, otp) {
        const data = this.pendingUsers.get(email);
        if (!data || data.otp !== otp) {
            throw new common_1.BadRequestException('Noto‘g‘ri kod yoki email');
        }
        const user = this.userRepo.create({
            email: data.email,
            name: data.name,
            password: data.password,
            isVerified: true,
            role: 'user',
        });
        await this.userRepo.save(user);
        this.pendingUsers.delete(email);
        return { message: 'Email muvaffaqiyatli tasdiqlandi ✅' };
    }
    async login(dto, res) {
        try {
            console.log('Login request received with DTO:', dto);
            const user = await this.userRepo.findOne({ where: { email: dto.email.toLowerCase() } });
            console.log('User found in database:', user);
            if (!user || !(await bcrypt.compare(dto.password, user.password))) {
                console.log('Authentication failed: User not found or password mismatch');
                throw new common_1.UnauthorizedException('Email yoki parol noto‘g‘ri');
            }
            if (!user.isVerified) {
                console.log('Verification failed: User email is not verified');
                throw new common_1.ForbiddenException('Email tasdiqlanmagan');
            }
            console.log('Generating tokens for user:', user.email);
            const payload = { sub: user.id, email: user.email, role: user.role };
            const accessToken = await this.jwtService.signAsync(payload, { expiresIn: '15m' });
            const refreshToken = await this.jwtService.signAsync(payload, { expiresIn: '7d' });
            console.log('Tokens generated - Access Token:', accessToken.substring(0, 20) + '...', 'Refresh Token:', refreshToken.substring(0, 20) + '...');
            res.cookie('accessToken', accessToken, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                maxAge: 15 * 60 * 1000,
            });
            res.cookie('refreshToken', refreshToken, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                maxAge: 7 * 24 * 60 * 60 * 1000,
            });
            console.log('Cookies set successfully');
            user.refreshToken = refreshToken;
            await this.userRepo.save(user);
            console.log('User data saved with refresh token');
            const response = {
                id: user.id,
                email: user.email,
                username: user.name,
                role: user.role,
                access_token: accessToken,
                refresh_token: refreshToken,
            };
            console.log('Login successful, response:', response);
            return response;
        }
        catch (error) {
            console.error('Login error occurred:', error.message);
            throw new common_1.InternalServerErrorException('Tizimga kirishda xatolik: ' + error.message);
        }
    }
    logout(res) {
        res.clearCookie('accessToken');
        res.clearCookie('refreshToken');
        return { message: 'Tizimdan chiqdingiz 🔓' };
    }
    async findAll() {
        const users = await this.userRepo.find();
        return { count: users.length, users };
    }
    async findOne(id) {
        const user = await this.userRepo.findOne({ where: { id } });
        if (!user)
            throw new common_1.NotFoundException('Foydalanuvchi topilmadi');
        return user;
    }
    async update(id, dto) {
        const user = await this.findOne(id);
        const updated = await this.userRepo.save({ ...user, ...dto });
        return { message: 'Foydalanuvchi yangilandi ✅', user: updated };
    }
    async remove(id) {
        const user = await this.findOne(id);
        await this.userRepo.remove(user);
        return { message: 'Foydalanuvchi o‘chirildi 🗑️' };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(2, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        email_service_1.EmailService,
        typeorm_2.Repository])
], AuthService);
//# sourceMappingURL=auth.service.js.map