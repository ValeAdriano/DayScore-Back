import {
  IsEmail,
  IsNotEmpty,
  MinLength,
  IsOptional,
  IsString,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

// DTO usado para receber os dados de cadastro de usuário
export class SignUpDto {
  @ApiPropertyOptional({
    description: 'Nome do usuário',
    example: 'Adriano Vale',
  })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiProperty({
    description: 'Email do usuário (precisa ser único)',
    example: 'adriano@example.com',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'Senha de acesso, mínimo 6 caracteres',
    minLength: 6,
    example: 'minhasenha',
  })
  @IsNotEmpty()
  @MinLength(6)
  password: string;
}
