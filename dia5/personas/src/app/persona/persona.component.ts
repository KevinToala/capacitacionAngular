import { Persona } from './../modelo/persona';
import { PersonaService } from './../servicios/persona.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.scss']
})
export class PersonaComponent implements OnInit {
  personas: Persona[];

  nombres: string;
  apellidos: string;

  constructor(private personaService: PersonaService) { }

  ngOnInit() {
    this.cargarListado();
  }

  cargarListado(): void {
    this.personaService.obtenerPersonas()
      .subscribe(personas => this.personas = personas);
  }

  guardarPersona(): void {
    const persona = {
      nombres: this.nombres,
      apellidos: this.apellidos
    };

    this.personaService.crearPersona(persona)
      .subscribe(personaCreada => {
        console.log(personaCreada);
        this.cargarListado();
      });
  }
}
