import { ApiProperty } from '@nestjs/swagger';
import { UserResponseDto } from './user-response.dto';

// DTO de resposta para login/signup com token
export class AuthResponseDto {
  @ApiProperty({
    description: 'Dados públicos do usuário autenticado',
    type: UserResponseDto,
  })
  user: UserResponseDto;

  @ApiProperty({
    description: 'Token de acesso JWT (Bearer)',
    example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
  })
  accessToken: string;
}
