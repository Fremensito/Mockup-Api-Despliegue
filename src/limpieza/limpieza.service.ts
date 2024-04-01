import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateLimpiezaDto } from './dto/create-limpieza.dto';
import { UpdateLimpiezaDto } from './dto/update-limpieza.dto';
import { isDate } from 'util/types';
import { Limpieza } from './entities/limpieza.entity';

@Injectable()
export class LimpiezaService {
  #id = "65fc3f811f64471e23a88608"

  #limpiezas = [
    {
      habitacion: "65fc3f811f64471e23a88608",
      fecha: new Date("2024-04-01"),
      observaciones: ""
    },
    {
      habitacion: "65fc3f811f64471e23a88608",
      fecha: new Date("2024-03-01"),
      observaciones: ""
    },
  ]
  
  getLimipiezasHabitacion(id: string){
    //return []
    return this.#limpiezas
    //throw new BadRequestException()
  }
  
  createLimpieza(limpieza: CreateLimpiezaDto) {
    return limpieza
    //throw new BadRequestException()
  }

  patchLimpieza(limpieza: UpdateLimpiezaDto, id: string){
    //throw new NotFoundException
    return{}
  }

  getHabitacionLimpia(id: string){
    if(id == "test")
      return {ok: true}
    else if(id == "test no hoy"){
      return {ok: false}
    }
    else{
      throw new BadRequestException()
    }
  }

  getHabitacionesLimpias(){
    return this.#limpiezas
    //return []
  }
}
