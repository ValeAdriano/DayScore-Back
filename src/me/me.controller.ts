import {
  Controller,
  Get,
  UseGuards,
  Req,
} from '@nestjs/common';
import type { Request } from 'express';
import { ApiTags, ApiOperation, ApiOkResponse, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { MeService } from './me.service'; // Ensure this path is correct and points to the file where getProfile is implemented
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { UserResponseDto } from '../auth/dto/user-response.dto';

declare global {
  namespace Express {
    interface Request {
      user?: { userId: string; email: string };
    }
  }
}

@ApiTags('me') // nova seção "me" no Swagger
@Controller('me') // rota base: /me
export class MeController {
  constructor(private readonly meService: MeService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Obter dados do usuário autenticado' })
  @ApiOkResponse({
    description: 'Dados do usuário autenticado',
    type: UserResponseDto,
  })
  @ApiResponse({
    status: 401,
    description: 'Token ausente ou inválido',
  })
  @ApiBearerAuth('access-token') // integra com o Authorize do Swagger
  async getMe(@Req() req: Request): Promise<UserResponseDto> {
    const user = req.user as { userId: string; email: string };

    return this.meService.getProfile(user.userId);
  }
}
