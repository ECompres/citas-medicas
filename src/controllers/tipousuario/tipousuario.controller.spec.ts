import { Test, TestingModule } from '@nestjs/testing';
import { TipousuarioController } from './tipousuario.controller';

describe('Tipousuario Controller', () => {
  let controller: TipousuarioController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TipousuarioController],
    }).compile();

    controller = module.get<TipousuarioController>(TipousuarioController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
