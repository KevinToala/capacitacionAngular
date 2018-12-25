import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonaListComponent } from './persona-list.component';
import { PersonaListRoutingModule } from './persona-list-routing.module';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [PersonaListComponent],
  imports: [
    CommonModule,
    PersonaListRoutingModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule,
    MatSnackBarModule
  ]
})
export class PersonaListModule { }
