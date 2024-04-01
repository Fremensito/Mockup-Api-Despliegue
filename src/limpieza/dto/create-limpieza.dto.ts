import { Habitacion } from "src/habitacion/entities/habitacion.entity";

export class CreateLimpiezaDto {
    readonly habitacion: string
    readonly fecha: Date
    readonly observaciones: string
}
