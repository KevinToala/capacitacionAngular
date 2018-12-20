import { Component } from '@angular/core';
import { Persona } from './modelo/persona';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  valorA: number = 0.599;
  valorB: number = 1.2564;

  fechaHoy: number = Date.now();

  pi: number = 3.14;
  e: number = 2.718281828459045;

  persona: Persona = {
    nombres: 'Kevin Gabriel',
    apellidos: 'Toala Mosquera',
    identificacion: '0925006447',
    edad: 22,
    telefono: {
      numero: '0991174688',
      pais: 'ECUADOR'
    }
  };

  valorInput: string;

  listaLetras: string[] = ['a', 'b', 'c', 'd'];
  cadenaTexto: string = 'abcdefghijklmn';

  actualizarPersona(){
    this.persona.nombres = 'David Leonel';
    this.persona.identificacion = '0925006447001';
  }
}
