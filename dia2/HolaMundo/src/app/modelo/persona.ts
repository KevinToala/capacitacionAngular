import { Direccion } from './direccion';

export interface Persona {
    nombre: string;
    apellido: string;
    direccion?: Direccion;
}
