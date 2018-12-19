import { Component, OnInit } from '@angular/core';
import { Persona } from './modelo/persona';

@Component({
  selector: 'app-main',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  nombre = null;

  persona: Persona = null;

  ngOnInit(): void {
  }

  obtenerNombre() {
    return this.nombre;
  }
}
