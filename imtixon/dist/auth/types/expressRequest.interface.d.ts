import { Request } from 'express';
export interface ExpressRequest extends Request {
    user: {
        sub: string;
        email?: string;
        role?: string;
        iat?: number;
        exp?: number;
    };
}
