import { Persona } from './../modelo/persona';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nombrePersona'
})
export class NombrePersonaPipe implements PipeTransform {

  transform(persona: Persona, mostrarIdentificacion: boolean = false): string {
    if (persona) {

      if (mostrarIdentificacion) {
        return `${persona.nombres} ${persona.apellidos} (${persona.identificacion})`;
      } else {
        return `${persona.nombres} ${persona.apellidos}`;
      }

    } else {
      return '';
    }
  }

}
