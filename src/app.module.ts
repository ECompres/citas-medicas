import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MedicoController } from './controllers/medico.controller';
import { AreaController } from './controllers/area.controller';
import { CitasController } from './controllers/citas.controller';
import { PacientesController } from './controllers/pacientes.controller';
import { TandaController } from './controllers/tanda.controller';
import { TipocitaController } from './controllers/tipocita.controller';
import { TipodocumentoController } from './controllers/tipodocumento.controller';
import { TipousuarioController } from './controllers/tipousuario.controller';
import { AreaService } from './Services/area.service';
import { CitasService } from './services/citas.service';
import { PacientesService } from './services/pacientes.service';
import { TandaService } from './services/tanda.service';
import { TipocitaService } from './services/tipocita.service';
import { TipodocumentoService } from './services/tipodocumento.service';
import { TipousuarioService } from './services/tipousuario.service';
import { UsuarioService } from './services/usuario.service';
import { UsuarioController } from './controllers/usuario.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UsuarioModule } from './modules/usuario.module';
@Module({
  imports: [
    MongooseModule
    .forRoot('mongodb://localhost/citasmedicas'),
    UsuarioModule
  ],
  controllers: [AppController, AreaController, MedicoController, CitasController, PacientesController, TandaController, TipocitaController, TipodocumentoController, TipousuarioController, UsuarioController],
  providers: [AppService, AreaService, CitasService, PacientesService, TandaService, TipocitaService, TipodocumentoService, TipousuarioService, UsuarioService],
})
export class AppModule {}
