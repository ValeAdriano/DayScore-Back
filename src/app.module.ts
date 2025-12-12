import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { MeModule } from './me/me.module';
import { HabitsModule } from './habits/habits.module';

@Module({
  imports: [AuthModule, PrismaModule, MeModule, HabitsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
