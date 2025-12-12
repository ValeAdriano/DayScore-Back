import { ApiProperty } from '@nestjs/swagger';

export class HabitResponseDto {
  @ApiProperty({
    description: 'ID único do hábito',
    example: '9f2c1d47-6d6d-4f47-9a33-1f8c6c1ef123',
  })
  id: string;

  @ApiProperty({
    description: 'Nome do hábito',
    example: 'Ler por 30 minutos',
  })
  name: string;

  @ApiProperty({
    description: 'Indica se o hábito está ativo',
    example: true,
  })
  isActive: boolean;

  @ApiProperty({
    description: 'Data/hora de criação do hábito',
    example: '2025-12-10T22:10:00.000Z',
  })
  createdAt: Date;

  @ApiProperty({
    description: 'Data/hora da última atualização do hábito',
    example: '2025-12-10T22:15:00.000Z',
  })
  updatedAt: Date;
}
