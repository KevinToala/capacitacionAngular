import { CorreoElectronico } from './correo-electronico';

export interface Persona {
    nombres: string;
    apellidos: string;
    correoElectronico?: CorreoElectronico;
}
