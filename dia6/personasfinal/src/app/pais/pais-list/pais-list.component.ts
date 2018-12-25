import { PaisModalComponent } from './../../pais/pais-modal/pais-modal.component';
import { PaisService } from './../servicios/pais.service';
import { Pais } from './../modelo/pais';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-pais-list',
  templateUrl: './pais-list.component.html',
  styleUrls: ['./pais-list.component.scss']
})
export class PaisListComponent implements OnInit {
  displayedColumns: string[] = ['nombre', 'codigoISO', 'eliminar'];
  public paises: Pais[];

  constructor(
    private paisService: PaisService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.cargarPaises();
  }

  cargarPaises(): void {
    this.paisService.obtenerLista()
      .subscribe(data => this.paises = data);
  }

  abrirDetalle(pais?: Pais): void {
    const dialogo = this.dialog.open(PaisModalComponent, {
      width: '450px',
      data: {pais: pais}
    });

    dialogo.afterClosed().subscribe((value) => {
      if (value) {
        this.cargarPaises();
      }
    });
  }

  eliminar(idPais: number) {
    this.paisService.eliminar(idPais)
      .subscribe(() => {
        this.snackBar.open('Pais Eliminado exitosamente', 'OK', {
          duration: 3000,
        });

        this.cargarPaises();
      });
  }
}
