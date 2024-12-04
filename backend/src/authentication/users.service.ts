import { Injectable } from '@nestjs/common';
import { UtilsService } from '../utils/utils.service';

export class User {
  id: number;
  name: string;
}

@Injectable()
export class UsersService {
  CLINICS =
    'https://raw.githubusercontent.com/salvehealth/tech-test-data/master/clinics.csv';

  async getClinics(): Promise<User[]> {
    const response = await fetch(this.CLINICS);
    const clinics = await response.text();
    return UtilsService.convertToObjectArray(clinics);
  }
}
