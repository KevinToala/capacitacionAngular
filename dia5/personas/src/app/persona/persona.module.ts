import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PersonaComponent } from './persona.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const appRoutes: Routes = [
  {
    path: '', component: PersonaComponent
  },
  {
    path: 'detalle', component: PersonaComponent
  }
];

@NgModule({
  declarations: [
    PersonaComponent
  ],
  exports: [
    PersonaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(appRoutes)
  ]
})
export class PersonaModule { }
