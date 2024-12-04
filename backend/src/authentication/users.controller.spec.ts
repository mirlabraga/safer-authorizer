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
      // const result = [
      //   { id: '1', name: 'Salve Fertility' },
      //   { id: '2', name: 'London IVF' },
      // ];
      jest
        .spyOn(UsersService.prototype, 'getClinics')
        .mockImplementation(() => null);
      expect(await controller.getClinics()).toStrictEqual(null);
    });
  });
});
