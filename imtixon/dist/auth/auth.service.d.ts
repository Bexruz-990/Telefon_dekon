import { JwtService } from '@nestjs/jwt';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { EmailService } from './email/email.service';
import { User } from './entity/user.entity';
import { Repository } from 'typeorm';
import { Response } from 'express';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class AuthService {
    private jwtService;
    private emailService;
    private userRepo;
    private readonly pendingUsers;
    constructor(jwtService: JwtService, emailService: EmailService, userRepo: Repository<User>);
    register(dto: RegisterDto): Promise<{
        message: string;
    }>;
    verifyOtp(email: string, otp: string): Promise<any>;
    login(dto: LoginDto, res: Response): Promise<{
        id: string;
        email: string;
        username: string;
        role: string;
        access_token: string;
        refresh_token: string;
    }>;
    logout(res: Response): {
        message: string;
    };
    findAll(): Promise<{
        count: number;
        users: User[];
    }>;
    findOne(id: string): Promise<User>;
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
        } & User;
    }>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
