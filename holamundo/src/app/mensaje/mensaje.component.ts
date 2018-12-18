import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-mensaje',
  templateUrl: './mensaje.component.html',
  styleUrls: ['./mensaje.component.scss']
})
export class MensajeComponent implements OnInit {
  @Input() contenido: string;
  @Output() mensajeLeido = new EventEmitter<boolean>();

  private _error: string;

  constructor() { }

  ngOnInit() {
  }

  @Input()
  set error(error: string) {
    this._error = error;
  }

  get error() {
    return this._error;
  }

  confirmarMensajeLeido(): void {
    this.mensajeLeido.emit(true);
  }

  public limpiarMensajeError(): void {
    this._error = '';
  }
}
