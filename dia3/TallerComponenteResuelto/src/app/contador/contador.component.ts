import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.scss']
})
export class ContadorComponent implements OnInit {
  private _contador = 0;
  private _valorInicial: number;

  @Output()
  public eventoReiniciar = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  @Input()
  public set valorInicial(valor: number) {
    this._contador = valor;
    this._valorInicial = valor;
  }

  public get valorInicial(): number {
    return this._contador;
  }

  public get contador(): number {
    return this._contador;
  }

  public incrementar(): void {
    this._contador++;
  }

  public decrementar(): void {
    this._contador--;
  }

  public reiniciar(): void {
    this._contador = 0;
    this.eventoReiniciar.emit();
  }
}
