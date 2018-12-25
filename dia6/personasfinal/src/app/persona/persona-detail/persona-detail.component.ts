import { Persona } from './../modelo/persona';
import { PersonaService } from './../servicios/persona.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged, startWith } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-persona-detail',
  templateUrl: './persona-detail.component.html',
  styleUrls: ['./persona-detail.component.scss']
})
export class PersonaDetailComponent implements OnInit {
  public persona: Persona;
  public formulario: FormGroup;

  constructor(
    private fb: FormBuilder,
    private personaService: PersonaService,
    private snackBar: MatSnackBar,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.formulario = this.fb.group({
      nombres: [null, [Validators.required, Validators.minLength(3)]],
      apellidos: [null, [Validators.required, Validators.minLength(3)]],
      identificacion: [null, [Validators.minLength(10)]],
      genero: null,
      fecha: null,
      correo: [null, Validators.email],
      telefono: [null, [Validators.minLength(10), Validators.maxLength(10)]]
    });
  }

  ngOnInit() {
    const idPersona = this.activatedRoute.snapshot.params.id;

    if (idPersona != null) {
      this.personaService.getById(idPersona)
        .subscribe(persona => {
          this.persona = persona;

          this.formulario.patchValue({
            nombres: persona.nombres,
            apellidos: persona.apellidos,
            identificacion: persona.identificacion,
            correo: persona.correo,
            telefono: persona.telefono,
            genero: persona.genero,
            fecha: persona.fecha
          });
        });

        if (this.esModoLectura()) {
          this.formulario.get('genero').disable();
          this.formulario.get('fecha').disable();
        }
    }
  }

  getErrorMessage() {
    const controlNombres = this.formulario.get('nombres');
    return controlNombres.hasError('required') ? 'Valor Requerido' :
           controlNombres.hasError('minlength') ? 'Minimo 3 caracteres' : '';
  }

  guardar() {
    const nuevaPersona = this.formulario.value;

    this.personaService.crear(nuevaPersona)
      .subscribe(personaCreada => {
        this.snackBar.open('Persona Creada exitosamente', 'OK', {
          duration: 3000,
        });
        this.router.navigateByUrl('/personas');
      });
  }

  actualizar() {
    this.personaService.actualizar(this.persona.id, this.formulario.value)
    .subscribe(personaCreada => {
      this.snackBar.open('Persona Actualizada exitosamente', 'OK', {
        duration: 3000,
      });
      this.router.navigateByUrl('/personas');
    });
  }

  private getPath(): string {
    return this.activatedRoute.parent.snapshot.url[0].path;
  }

  public esModoCreacion(): boolean {
    return this.getPath() === 'nuevo';
  }

  public esModoEdicion(): boolean {
    return this.getPath() === 'edicion';
  }

  public esModoLectura(): boolean {
    return !this.esModoEdicion() && !this.esModoCreacion();
  }
}
