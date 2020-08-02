import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { IUsuario } from '../Interfaces/usuario.interface';
import { UsuarioDTO } from 'src/dto/usuario.dto';

@Injectable()
export class UsuarioService {
    constructor() { 
        
    }
}
