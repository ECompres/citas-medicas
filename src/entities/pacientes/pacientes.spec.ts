import { Pacientes } from './pacientes.entity';

describe('Pacientes', () => {
  it('should be defined', () => {
    expect(new Pacientes()).toBeDefined();
  });
});
