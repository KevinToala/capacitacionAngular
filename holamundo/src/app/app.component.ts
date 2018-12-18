import { MensajeComponent } from './mensaje/mensaje.component';
import { Persona } from './modelo/persona';
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public mostrarHeader = true;

  public nombres = 'Kevin Gabriel';
  public apellidos = 'Toala Mosquera';

  public persona: Persona = {
    nombres: 'Juan',
    apellidos: 'Perez'
  };

  public textoBoton = 'Clic Aqui!!';
  public nuevoCorreo = '';

  public mensajeFocus = 'Input no tiene focus';

  @ViewChild(MensajeComponent) mensajeComponent: MensajeComponent;

  constructor() {
  }

  public cambiarTextoBoton(): void {
    this.textoBoton = 'Se hizo clic';
  }

  public aniadirCorreo(): void {
    this.persona = {
      nombres: 'Juan',
      apellidos: 'Perez',
      correoElectronico: {
        correo: 'juanperez@hotmail.com'
      }
    };
  }

  public cambiarCorreo(): void {
    this.persona = {
      nombres: 'Juan',
      apellidos: 'Perez',
      correoElectronico: {
        correo: this.nuevoCorreo
      }
    };
  }

  public sugerirCorreo(): void {
    this.nuevoCorreo = 'JuanPerez@outlook.com';
  }

  public ganarFocus(): void {
    this.mensajeFocus = 'Input tiene el focus';
  }

  public perdioFocus(): void {
    this.mensajeFocus = 'Input perdio focus';
  }

  public ocultarHeader(): void {
    this.mostrarHeader = false;
  }

  public mostrarMensajeLeido(esMensajeLeido: boolean): void {
    if (esMensajeLeido) {
      window.alert('Mensaje de error fue leido');
      this.mensajeComponent.limpiarMensajeError();
    }
  }
}
