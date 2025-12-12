import { Module } from '@nestjs/common';
import { MeService } from './me.service';
import { MeController } from './me.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [PrismaModule, AuthModule],
  providers: [MeService],
  controllers: [MeController]
})
export class MeModule {}
