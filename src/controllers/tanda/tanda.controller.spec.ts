import { Test, TestingModule } from '@nestjs/testing';
import { TandaController } from './tanda.controller';

describe('Tanda Controller', () => {
  let controller: TandaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TandaController],
    }).compile();

    controller = module.get<TandaController>(TandaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
