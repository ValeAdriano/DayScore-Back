import { ApiProperty } from "@nestjs/swagger";  
import { IsString, IsNotEmpty, IsOptional, IsDateString, MaxLength } from "class-validator";


export class CreateHabitDto {
  @ApiProperty({
    description: 'Nome do hábito que será acompanhado diariamente',
    example: 'Ler por 30 minutos',
    maxLength: 100,
  })
  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  name: string;

  @ApiProperty({
    description: 'Descrição opcional do hábito',
    example: 'Ler livros de desenvolvimento pessoal',
    maxLength: 255,
    required: false,
  })
  @IsOptional()
  @IsString()
  @MaxLength(255)
  description?: string;
}