import { Module } from '@nestjs/common';
import { UtilsService } from 'src/utils/utils.service';

@Module({
  providers: [UtilsService],
})
export class ClinicsModule {}
