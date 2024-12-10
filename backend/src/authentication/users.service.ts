import { Injectable } from '@nestjs/common';

export class User {
  id: number;
  name: string;
}

@Injectable()
export class UsersService {
  async postRefreshToken(token: string): Promise<User[]> {
    console.log(token);
    return null;
  }
}
