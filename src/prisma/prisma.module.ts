// Importa o decorator Module do NestJS, usado para declarar módulos
import { Module } from '@nestjs/common';
// Importa o PrismaService que encapsula o PrismaClient
import { PrismaService } from './prisma.service';

// Módulo responsável por disponibilizar o PrismaService para outros módulos
@Module({
  // Lista de serviços gerenciados por este módulo
  providers: [PrismaService],

  // Lista de serviços exportados para outros módulos
  exports: [PrismaService],
})
export class PrismaModule {}
