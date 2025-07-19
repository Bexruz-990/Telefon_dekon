// src/main.ts
import { ValidationPipe } from '@nestjs/common';
import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { JwtAuthGuard } from './auth/strategy/jwt-auth.guard';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { RolesGuard } from './auth/strategy/guards/roles.guard';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  

  // Global Validation Pipe
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  // 🌐 Global JWT Auth Guard (foydalanuvchi token bilan kirsin)
  const reflecto = app.get(Reflector);
  app.useGlobalGuards(new JwtAuthGuard(reflecto));
  app.useGlobalGuards(new RolesGuard(reflecto));

  // Swagger konfiguratsiyasi
  const config = new DocumentBuilder()
    .setTitle('E-Store API')
    .setDescription('Category, Product, Auth, Orders va boshqalar uchun API')
    .setVersion('1.0')
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        name: 'JWT',
        description: 'JWT token kiriting',
        in: 'header',
      },
      'access-token',
    )
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document); // http://localhost:3000/api

  const PORT = process.env.PORT || 3000;
  await app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
    console.log(`📚 Swagger UI: http://localhost:${PORT}/api`);
  });
}
bootstrap();
