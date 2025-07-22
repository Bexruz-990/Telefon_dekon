import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { Response } from 'express';
import { VerifyOtpDto } from './dto/verify.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(dto: RegisterDto): Promise<{
        message: string;
    }>;
    verify(verifyOtpDto: VerifyOtpDto): Promise<any>;
    login(loginDto: LoginDto, res: Response): Promise<Response<any, Record<string, any>>>;
    logout(res: Response): {
        message: string;
    };
    findAll(): Promise<{
        count: number;
        users: import("./entity/user.entity").User[];
    }>;
    findOne(id: string): Promise<import("./entity/user.entity").User>;
    update(id: string, dto: UpdateUserDto): Promise<{
        message: string;
        user: {
            name: string;
            password: string;
            role: string;
            id: string;
            email: string;
            wishlist: import("../wishlist/entity/wishlist.entity").Wishlist[];
            cartItems: import("../cart/entity/cart-item.entity").Cart[];
            comments: import("../community/entity/comment.entity").Comment[];
            refreshToken: string;
            otp: string;
            isVerified: boolean;
        } & import("./entity/user.entity").User;
    }>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
