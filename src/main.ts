import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

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
      'access-token', // bu keyinchalik ishlatiladi (Swagger security)
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
