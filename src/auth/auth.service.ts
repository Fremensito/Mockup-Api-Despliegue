import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsuarioDto } from 'src/usuario/dto/usuario.dto';

@Injectable()
export class AuthService {

    login(usuario: UsuarioDto){
        if(usuario.login == "usuario" && usuario.password == "usuario")
            return {token: "randomtoken"}
        else
            throw new UnauthorizedException()
    }
}
