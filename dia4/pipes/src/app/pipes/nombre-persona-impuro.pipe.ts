import { NombrePersonaPipe } from './nombre-persona.pipe';
import { Persona } from './../modelo/persona';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nombrePersonaImpuro',
  pure: false
})
export class NombrePersonaImpuroPipe extends NombrePersonaPipe {
}
