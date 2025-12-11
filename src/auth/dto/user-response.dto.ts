import { ApiProperty } from '@nestjs/swagger';

// Representa o usuário que será retornado nas respostas de auth
export class UserResponseDto {
  @ApiProperty({
    description: 'ID único do usuário',
    example: 'f3b4b5e0-1234-4f56-9abc-0123456789ab',
  })
  id: string;

  @ApiProperty({
    description: 'Nome do usuário (pode ser nulo se não informado)',
    example: 'Adriano Vale',
    nullable: true,
  })
  name: string | null;

  @ApiProperty({
    description: 'Email do usuário',
    example: 'adriano@example.com',
  })
  email: string;

  @ApiProperty({
    description: 'Data e hora em que o usuário foi criado',
    example: '2025-12-10T20:00:00.000Z',
  })
  createdAt: Date;

  @ApiProperty({
    description: 'Data e hora da última atualização do usuário',
    example: '2025-12-10T20:10:00.000Z',
  })
  updatedAt: Date;

  @ApiProperty({
    description: 'Data de deleção lógica (soft delete) ou null se ativo',
    example: null,
    nullable: true,
  })
  deletedAt: Date | null;
}
