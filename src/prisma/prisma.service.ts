/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
// src/prisma/prisma.service.ts

import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
// Importa o PrismaClient gerado a partir do schema
import { PrismaClient } from '@prisma/client';
// Importa o Pool do driver pg (PostgreSQL)
import { Pool } from 'pg';
// Importa o adapter do Prisma para Postgres
import { PrismaPg } from '@prisma/adapter-pg';

@Injectable()
// O PrismaService herda do PrismaClient para expor os métodos de acesso ao banco
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  constructor() {
    // Cria um pool de conexões do pg usando a DATABASE_URL do .env
    const pool = new Pool({
      connectionString: process.env.DATABASE_URL,
    });

    // Cria o adapter do Prisma em cima do pool do pg
    const adapter = new PrismaPg(pool);

    // Chama o construtor da classe mãe (PrismaClient) passando o adapter
    // → É isso que o Prisma 7 passou a exigir (PrismaClientOptions não pode ser vazio)
    super({ adapter });
  }

  // Método chamado quando o módulo é inicializado (subida da aplicação)
  async onModuleInit() {
    // Abre a conexão com o banco
    await this.$connect();
  }

  // Método chamado quando o módulo é destruído (desligando a aplicação)
  async onModuleDestroy() {
    // Fecha as conexões com o banco
    await this.$disconnect();
  }
}
