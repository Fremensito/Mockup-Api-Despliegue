import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { LimpiezaService } from './limpieza.service';
import { CreateLimpiezaDto } from './dto/create-limpieza.dto';
import { UpdateLimpiezaDto } from './dto/update-limpieza.dto';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('limpieza')
export class LimpiezaController {
  constructor(private readonly limpiezaService: LimpiezaService) {}

  @UseGuards(AuthGuard)
  @Post()
  create(@Body() limpieza: CreateLimpiezaDto) {
    return this.limpiezaService.createLimpieza(limpieza);
  }

  @UseGuards(AuthGuard)
  @Patch(":id")
  patchLimpeiza(@Param("id")id: string, @Body() limpieza: UpdateLimpiezaDto){
    return this.limpiezaService.patchLimpieza(limpieza, id)
  }

  @Get("limpia/:id")
  getHabitacionLimpia(@Param("id") id: string){
    return this.limpiezaService.getHabitacionLimpia(id)
  }

  @Get("limpias")
  getHabitacionesLimpias(){
    return this.limpiezaService.getHabitacionesLimpias()
  }

  @Get(":id")
  getLimpiezasHabitacion(@Param("id") id: string){
    return this.limpiezaService.getLimipiezasHabitacion(id)
  }
}
