import { Test, TestingModule } from '@nestjs/testing';
import { TipocitaController } from './tipocita.controller';

describe('Tipocita Controller', () => {
  let controller: TipocitaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TipocitaController],
    }).compile();

    controller = module.get<TipocitaController>(TipocitaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
