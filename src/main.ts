import { ValidationPipe } from '@nestjs/common';
import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { RolesGuard } from './auth/guards/roles.guard';
import { JwtService } from '@nestjs/jwt';
import * as express from 'express';
import * as cookieParser from 'cookie-parser';
import { join } from 'path';

// Faqat kerak bo‘lsa, crypto ni globalga qo‘shing
if (!(global as any).crypto) {
  (global as any).crypto = require('crypto');
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // .well-known papkasini servis qilish
  app.use('/.well-known', express.static(join(__dirname, '..', '.well-known')));

  // Cookie parsertni qo‘llash
  app.use(cookieParser());

  // DTO validatsiya
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  // Swagger sozlamasi
  const config = new DocumentBuilder()
    .setTitle('E-Store API')
    .setDescription('Category, Product, Auth, Orders va boshqalar uchun API')
    .setVersion('1.0')
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      },
      'access-token',
    )
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  // Role guardlar
  const reflector = app.get(Reflector);
  const jwtService = app.get(JwtService);
  app.useGlobalGuards(new RolesGuard(reflector, jwtService));

  // Portni eshitish
  const PORT = process.env.PORT || 3000;
  await app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
    console.log(`📚 Swagger UI: http://localhost:${PORT}/api`);
  });
}
bootstrap();
