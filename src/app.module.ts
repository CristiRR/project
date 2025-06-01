// src/app.module.ts

import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { SettingsModule } from './settings/settings.module';

@Module({
  imports: [AuthModule, SettingsModule],
})
export class AppModule {}

