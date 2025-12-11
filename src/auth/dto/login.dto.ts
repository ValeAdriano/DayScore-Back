import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

// DTO usado para receber os dados de login
export class LoginDto {
  @ApiProperty({
    description: 'Email do usuário cadastrado',
    example: 'adriano@example.com',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'Senha do usuário',
    minLength: 6,
    example: 'minhasenha',
  })
  @IsNotEmpty()
  @MinLength(6)
  password: string;
}
