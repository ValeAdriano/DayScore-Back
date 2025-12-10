import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpDto } from './dto/signup.dto';

// Importa os decorators do Swagger
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // Rota: POST /auth/signup
  @Post('signup')
  @ApiOperation({ summary: 'Cadastrar um novo usuário' }) // Descrição curta da operação
  @ApiResponse({ status: 201, description: 'Usuário criado com sucesso' })
  @ApiResponse({
    status: 400,
    description: 'Email já está em uso ou dados inválidos',
  })
  @ApiBody({ type: SignUpDto }) // Diz para o Swagger que o body segue o SignUpDto
  signUp(@Body() body: SignUpDto) {
    return this.authService.signUp(body);
  }
}
