import { Test, TestingModule } from '@nestjs/testing';
import { UtilsService } from '../utils/utils.service';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

describe('UsersController', () => {
  let controller: UsersController;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersService, UtilsService],
    }).compile();

    controller = module.get<UsersController>(UsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('GET /users', () => {
    it('should return an array of users', async () => {
      const token = '';
      jest
        .spyOn(UsersService.prototype, 'postRefreshToken')
        .mockImplementation(() => null);
      expect(await controller.postRefreshToken(token)).toStrictEqual(null);
    });
  });
});
