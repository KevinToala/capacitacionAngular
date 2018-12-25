import { MatSnackBar } from '@angular/material';
import { Persona } from './../modelo/persona';
import { PersonaService } from './../servicios/persona.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-persona-list',
  templateUrl: './persona-list.component.html',
  styleUrls: ['./persona-list.component.scss']
})
export class PersonaListComponent implements OnInit {
  displayedColumns: string[] = ['nombres', 'apellidos', 'identificacion', 'correo', 'eliminar'];

  public personas: Persona[] = [];

  constructor(
    private personaService: PersonaService,
    private router: Router,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.cargarPersonas();
  }

  cargarPersonas(): void {
    this.personaService.getList()
      .subscribe(personas => this.personas = personas);
  }

  consultar(idPersona) {
    this.router.navigate(['/personas', idPersona]);
  }

  eliminarPersona(idPersona: number) {
    this.personaService.eliminar(idPersona)
      .subscribe(() => {
        this.snackBar.open('Persona Eliminada exitosamente', 'OK', {
          duration: 3000,
        });

        this.cargarPersonas();
      });
  }
}
