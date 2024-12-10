import { Controller, Get, Param } from '@nestjs/common';
import { User, UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get(':refresh-token')
  async postRefreshToken(
    @Param('refresh-token') token: string | undefined,
  ): Promise<User[]> {
    return await this.usersService.postRefreshToken(token);
  }
}
