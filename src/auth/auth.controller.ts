// src/auth/auth.controller.ts

import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() body: any) {
    // Simula autenticación, normalmente aquí validarías usuario/contraseña
    const user = { userId: 1, email: body.email };
    return this.authService.login(user);
  }
}

//Todo lo que puedo hacer, rutas y subrutas de mi proyecto 