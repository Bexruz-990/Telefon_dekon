import { ValidationPipe } from '@nestjs/common';
import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { RolesGuard } from './auth/guards/roles.guard';
import { JwtService } from '@nestjs/jwt';
import * as express from 'express';
import { join } from 'path';
const cookieParser = require('cookie-parser');




async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use('/.well-known', express.static(join(__dirname, '..', '.well-known')));

  app.use(cookieParser());
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

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

  const reflector = app.get(Reflector);
  const jwtService = app.get(JwtService);
  app.useGlobalGuards(new RolesGuard(reflector, jwtService));

  const PORT = process.env.PORT || 3000;
  await app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
    console.log(`📚 Swagger UI: http://localhost:${PORT}/api`);
  });

}
bootstrap();
