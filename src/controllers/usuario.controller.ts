import { Controller, Get, Post, Res, HttpStatus, Body } from '@nestjs/common';
import { UsuarioService } from 'src/services/usuario.service';
import { UsuarioDTO } from '../dto/usuario.dto';

@Controller('usuario')
export class UsuarioController {
    constructor(private usuarioService:UsuarioService){}

    @Post('/create')
    createUser(@Body() usuarioDTO:UsuarioDTO, @Res() res){
        console.log(usuarioDTO);
        return res.status(HttpStatus.OK).json({mensaje:"Ok"});
    }
}
