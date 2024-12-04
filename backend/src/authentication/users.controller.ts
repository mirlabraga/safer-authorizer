import { Controller, Get } from '@nestjs/common';
import { User, UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async getClinics(): Promise<User[]> {
    return await this.usersService.getClinics();
  }
}
