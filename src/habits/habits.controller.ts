import {
  Controller,
  Post,
  Body,
  UseGuards,
  Req,
} from '@nestjs/common';
import type { Request } from 'express';
import {
  ApiTags,
  ApiOperation,
  ApiBody,
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiResponse,
} from '@nestjs/swagger';
import { HabitsService } from './habits.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CreateHabitDto } from './dto/create-habit.dto';
import { HabitResponseDto } from './dto/habit-response.dto';

@ApiTags('habits')
@ApiBearerAuth('access-token')
@UseGuards(JwtAuthGuard)
@Controller('habits')
export class HabitsController {
    constructor(private readonly habitsService: HabitsService) {}

    @Post()
    @ApiOperation({ summary: 'Criar um novo hábito para um usuário autenticado' })
    @ApiBody({ type: CreateHabitDto }) // Define o corpo da requisição como CreateHabitDto
    @ApiCreatedResponse({ type: HabitResponseDto, description: 'Hábito criado com sucesso' })
    @ApiResponse({ status: 401, description: 'Usuário não autorizado' })
    async createHabit(
        @Req() req: Request, // Requisição para obter o usuário autenticado
        @Body() body: CreateHabitDto, // Corpo da requisição com os dados do hábito
    ): Promise<HabitResponseDto> {

        const user = req.user as { userId: string }; // Extrai o ID do usuário autenticado
        
        return this.habitsService.createHabit(user.userId, body);
    }
}
