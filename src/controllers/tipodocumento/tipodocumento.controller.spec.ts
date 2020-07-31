import { Test, TestingModule } from '@nestjs/testing';
import { TipodocumentoController } from './tipodocumento.controller';

describe('Tipodocumento Controller', () => {
  let controller: TipodocumentoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TipodocumentoController],
    }).compile();

    controller = module.get<TipodocumentoController>(TipodocumentoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
