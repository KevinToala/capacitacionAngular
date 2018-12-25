import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonaDetailComponent } from './persona-detail.component';
import { PersonaDetailRoutingModule } from './persona-detail-routing.module';

import {MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';

@NgModule({
  declarations: [PersonaDetailComponent],
  imports: [
    CommonModule,
    PersonaDetailRoutingModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatCardModule,
    FlexLayoutModule,
    MatSnackBarModule,
    MatIconModule,
    MatSelectModule,
    MatDatepickerModule
  ]
})
export class PersonaDetailModule { }
