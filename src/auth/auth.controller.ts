import { Body, Controller, Post } from '@nestjs/common';
import { UsuarioDto } from 'src/usuario/dto/usuario.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {

    constructor(private readonly authService: AuthService){}

    @Post("login")
    login(@Body() usuario: UsuarioDto):{token: string}{
        return this.authService.login(usuario)
    }
}
