import { Module } from '@nestjs/common';
import { HabitsService } from './habits.service';
import { HabitsController } from './habits.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Module({
  imports: [PrismaModule],
  providers: [HabitsService, JwtAuthGuard],
  controllers: [HabitsController]
})
export class HabitsModule {}
