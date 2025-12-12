import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateHabitDto } from './dto/create-habit.dto';
import { HabitResponseDto } from './dto/habit-response.dto';

@Injectable()
export class HabitsService {
    constructor(private readonly prisma: PrismaService) {}

    async createHabit(
        userId: string, // ID of the user creating the habit
        data: CreateHabitDto, // Data for the new habit
    ): Promise<HabitResponseDto> {
        const habit = await this.prisma.habit.create({
            data: {
                name: data.name,
                description: data.description,
                userId: userId, // Associate habit with the user
        }
        });

        return habit;
    }

    // async getHabit(userId: String): Promise<HabitResponseDto> {
    //     const habit = await this.prisma.habit.findMany()

    //     return habit;

    // } 
}
