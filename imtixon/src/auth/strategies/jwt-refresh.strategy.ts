import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
import { Request } from 'express';
import { JwtPayload } from '../types/jwt-payload.type';
import { JwtPayloadWithRefreshToken } from '../types/jwt-payload-with-refresh-token.type';

@Injectable()
export class JwtRefreshStrategy extends PassportStrategy(
  Strategy,
  'jwt-refresh',
) {
  constructor(private config: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        (req: Request) => req?.cookies?.['refresh-token'],
      ]),
      secretOrKey: config.get<any>('REFRESH_TOKEN_SECRET'),
      passReqToCallback: true,
    });
  }


  async validate(
    req: Request,
    payload: JwtPayload,
  ): Promise<JwtPayloadWithRefreshToken> {
    const refreshToken = req.cookies['refresh-token'];
    return {
      ...payload,
      refreshToken,
    };
  }
}
