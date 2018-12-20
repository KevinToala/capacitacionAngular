import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSnackBar} from '@angular/material';
import {ContadorComponent} from '../contador/contador.component';

@Component({
  selector: 'app-panel-contador',
  templateUrl: './panel-contador.component.html',
  styleUrls: ['./panel-contador.component.scss']
})
export class PanelContadorComponent implements OnInit {

  @ViewChild(ContadorComponent)
  public contadorComponent: ContadorComponent;

  constructor(public snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  public incrementarContador(): void {
    this.contadorComponent.incrementar();
  }

  public decrementarContador(): void {
    this.contadorComponent.decrementar();
  }

  public reiniciar(): void {
    this.contadorComponent.reiniciar();
  }

  public contadorReiniciado(): void {
    this.snackBar.open('Contador fue reiniciado', 'Cerrar');
  }
}
