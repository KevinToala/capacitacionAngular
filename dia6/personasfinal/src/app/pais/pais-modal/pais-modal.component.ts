import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Pais } from './../modelo/pais';
import { Component, OnInit, Inject, Optional } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar } from '@angular/material';
import { PaisService } from '../servicios/pais.service';

@Component({
  selector: 'app-pais-modal',
  templateUrl: './pais-modal.component.html',
  styleUrls: ['./pais-modal.component.scss']
})
export class PaisModalComponent implements OnInit {
  public formulario: FormGroup;

  constructor(
    public fb: FormBuilder,
    private paisService: PaisService,
    private snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<PaisModalComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: {pais: Pais}
  ) {
    this.formulario = this.fb.group({
      nombre: [null, Validators.required],
      codigoISO: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(3)]]
    });
  }

  ngOnInit() {
    if (this.data != null && this.data.pais != null) {
      const pais = this.data.pais;

      this.formulario.patchValue({
        nombre: pais.nombre,
        codigoISO: pais.codigoISO
      });
    }
  }

  guardar() {
    if (this.data != null && this.data.pais != null) {
      this.paisService.actualizar(this.data.pais.id, this.formulario.value)
        .subscribe(data => {
          this.snackBar.open('Pais actualizado exitosamente', 'OK', {
            duration: 3000,
          });

          this.dialogRef.close(data);
        });
    } else {
      this.paisService.crear(this.formulario.value)
        .subscribe(data => {
          this.snackBar.open('Pais creado exitosamente', 'OK', {
            duration: 3000,
          });

          this.dialogRef.close(data);
        });
    }
  }
}
