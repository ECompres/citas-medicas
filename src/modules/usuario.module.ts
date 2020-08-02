import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { usuarioSchema } from 'src/Schemas/usuario.schema';

@Module({
    imports: [
        MongooseModule
            .forFeature([
                { name: 'Usuarios', schema: usuarioSchema }
            ])
    ]
})
export class UsuarioModule { }
