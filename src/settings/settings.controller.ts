

import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('settings')
export class SettingsController {
  @UseGuards(JwtAuthGuard)
  @Get()
  getSettings(@Request() req) {
    return {
      mensaje: 'Bienvenido a tu configuracion , Juan Pérez',
      email: req.user.email,
    };
  }
}




