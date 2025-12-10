import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import 'dotenv/config';


// Imports do Swagger
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  // Cria a aplicação Nest a partir do módulo raiz
  const app = await NestFactory.create(AppModule);

  // Configura o Swagger (título, descrição, versão, etc.)
  const config = new DocumentBuilder()
    .setTitle('DayScore API') // Título que aparece na UI
    .setDescription('API do DayScore para hábitos diários e sono') // Descrição geral
    .setVersion('1.0') // Versão da API
    .build();

  // Gera o documento OpenAPI com base nos decorators dos controllers/DTOs
  const document = SwaggerModule.createDocument(app, config);

  // Configura a rota onde o Swagger UI ficará disponível (ex.: /api)
  SwaggerModule.setup('api', app, document);

  // Habilita validação global baseada nos DTOs (class-validator)
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Remove campos que não estão no DTO
      forbidNonWhitelisted: true, // Lança erro se vier campo extra
      transform: true, // Converte payload em instância da classe do DTO
    }),
  );

  await app.listen(3000);
}
bootstrap();
