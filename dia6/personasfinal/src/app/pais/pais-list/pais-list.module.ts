import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaisListComponent } from './pais-list.component';
import { PaisListRoutingModule } from './pais-list-routing.module';
import { PaisModalModule } from '../pais-modal/pais-modal.module';

@NgModule({
  declarations: [PaisListComponent],
  imports: [
    CommonModule,
    PaisListRoutingModule,
    PaisModalModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    FlexLayoutModule
  ]
})
export class PaisListModule { }
