// src/auth/types/jwt-payload-with-refresh-token.type.ts

export interface JwtPayloadWithRefreshToken {
    id: string;
    email: string;
    role: 'User' | 'Admin' | 'Superadmin';
    refreshToken: string;
  }
  