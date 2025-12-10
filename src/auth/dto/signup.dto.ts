/* eslint-disable @typescript-eslint/no-unsafe-call */
import {
  IsEmail,
  IsNotEmpty,
  MinLength,
  IsOptional,
  IsString,
} from 'class-validator';

// DTO usado para representar os dados de entrada do cadastro de usuário
export class SignUpDto {
  // Nome é opcional
  @IsOptional()
  @IsString()
  name?: string;

  // Email obrigatório e em formato válido
  @IsEmail()
  email: string;

  // Senha obrigatória com pelo menos 6 caracteres
  @IsNotEmpty()
  @MinLength(6)
  password: string;
}
