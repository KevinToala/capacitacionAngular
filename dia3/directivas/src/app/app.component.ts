import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public personas;

  public readonly ESTILOS_CLIENTE = {
    color: 'green',
    fontSize: '30px'
  };
  public readonly COLOR_PROVEEDOR = 'blue';
  public readonly COLOR_DESCONOCIDO = 'red';

  mensajeLeido = false;

  ngOnInit(): void {
    setTimeout(() => {
      this.personas = [
        {
          nombres: 'kevin gabriel',
          apellidos: 'toala mosquera',
          tipo: 'CLIENTE'
        },
        {
          nombres: 'Juan',
          apellidos: 'Perez',
          tipo: 'PROVEEDOR'
        },
        {
          nombres: 'David',
          apellidos: 'Toala Mosquera',
        }
      ];
    }, 1000);
  }

  cambiarEstadoMensaje(): void {
    this.mensajeLeido = !this.mensajeLeido;
  }
}
