//import { Module } from '@nestjs/common';
//import { SettingsService } from './settings.service';

//@Module({
 // providers: [SettingsService]
//})
//export class SettingsModule {}
import { Module } from '@nestjs/common';
import { SettingsController } from './settings.controller';

@Module({
  controllers: [SettingsController],
})
export class SettingsModule {}

