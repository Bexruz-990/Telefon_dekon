// src/auth/guards/jwt-auth.guard.ts
import {
    CanActivate,
    ExecutionContext,
    Injectable,
    UnauthorizedException,
  } from '@nestjs/common';
  import { Reflector } from '@nestjs/core';
  import { JwtService } from '@nestjs/jwt';
  import { Request } from 'express';
  import { IS_PUBLIC_KEY } from '../decorators/public.decarator';
  import { ConfigService } from '@nestjs/config';
  
  @Injectable()
  export class JwtAuthGuard implements CanActivate {
    constructor(
      private jwtService: JwtService,
      private reflector: Reflector,
      private config: ConfigService,
    ) {}
  
    async canActivate(context: ExecutionContext): Promise<boolean> {
      // Public endpointlarni tekshirish
      const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
        context.getHandler(),
        context.getClass(),
      ]);
      if (isPublic) {
        return true;
      }
  
      // Token ni olish
      const request = context.switchToHttp().getRequest();
      const token = this.extractTokenFromHeader(request);
      if (!token) {
        throw new UnauthorizedException('Token not found');
      }
  
      // Token ni tekshirish
      try {
        const payload = await this.jwtService.verifyAsync(token, {
          secret: this.config.get<string>('JWT_SECRET'),
        });
        request.user = payload;
      } catch {
        throw new UnauthorizedException('Invalid token');
      }
  
      return true;
    }
  
    private extractTokenFromHeader(request: Request): string | undefined {
      const [type, token] = request.headers.authorization?.split(' ') ?? [];
      return type === 'Bearer' ? token : undefined;
    }
  }