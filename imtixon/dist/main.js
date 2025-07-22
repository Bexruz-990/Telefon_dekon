"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
const roles_guard_1 = require("./auth/guards/roles.guard");
const jwt_1 = require("@nestjs/jwt");
const cookieParser = require('cookie-parser');
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.use(cookieParser());
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
    }));
    const config = new swagger_1.DocumentBuilder()
        .setTitle('E-Store API')
        .setDescription('Category, Product, Auth, Orders va boshqalar uchun API')
        .setVersion('1.0')
        .addBearerAuth({
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
    }, 'access-token')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
    const reflector = app.get(core_1.Reflector);
    const jwtService = app.get(jwt_1.JwtService);
    app.useGlobalGuards(new roles_guard_1.RolesGuard(reflector, jwtService));
    const PORT = process.env.PORT || 3000;
    await app.listen(PORT, () => {
        console.log(`🚀 Server is running on http://localhost:${PORT}`);
        console.log(`📚 Swagger UI: http://localhost:${PORT}/api`);
    });
}
bootstrap();
//# sourceMappingURL=main.js.map