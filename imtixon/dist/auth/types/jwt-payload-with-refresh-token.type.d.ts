export interface JwtPayloadWithRefreshToken {
    id: string;
    email: string;
    role: 'User' | 'Admin' | 'Superadmin';
    refreshToken: string;
}
