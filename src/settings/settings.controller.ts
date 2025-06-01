//import { Controller } from '@nestjs/common';

//@Controller('settings')
//export class SettingsController {}
// src/settings/settings.controller.ts

import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('settings')
export class SettingsController {
  @UseGuards(JwtAuthGuard)
  @Get()
  getSettings(@Request() req) {
    return {
      mensaje: 'Bienvenido',
      email: req.user.email,
    };
  }
}




