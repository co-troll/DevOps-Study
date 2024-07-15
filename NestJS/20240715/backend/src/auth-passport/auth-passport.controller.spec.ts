import { Test, TestingModule } from '@nestjs/testing';
import { AuthPassportController } from './auth-passport.controller';
import { AuthPassportService } from './auth-passport.service';

describe('AuthPassportController', () => {
  let controller: AuthPassportController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthPassportController],
      providers: [AuthPassportService],
    }).compile();

    controller = module.get<AuthPassportController>(AuthPassportController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
