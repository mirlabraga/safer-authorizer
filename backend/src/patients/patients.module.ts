import { Module } from '@nestjs/common';
import { PatientsController } from './patients.controller';
import { PatientsService } from './patients.service';

@Module({
  providers: [PatientsService],
  controllers: [PatientsController],
})
export class PatientsModule {}
