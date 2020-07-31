import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MedicoController } from './controllers/medico/medico.controller';
import { AreaController } from './controllers/area/area.controller';
import { CitasController } from './controllers/citas/citas.controller';
import { PacientesController } from './controllers/pacientes/pacientes.controller';
import { TandaController } from './controllers/tanda/tanda.controller';
import { TipocitaController } from './controllers/tipocita/tipocita.controller';
import { TipodocumentoController } from './controllers/tipodocumento/tipodocumento.controller';
import { TipousuarioController } from './controllers/tipousuario/tipousuario.controller';

@Module({
  imports: [],
  controllers: [AppController, AreaController, MedicoController, CitasController, PacientesController, TandaController, TipocitaController, TipodocumentoController, TipousuarioController],
  providers: [AppService],
})
export class AppModule {}
