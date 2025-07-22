export interface JwtPayload {
    id: string;
    email: string;
    role: 'User' | 'Admin' | 'Superadmin';
}
