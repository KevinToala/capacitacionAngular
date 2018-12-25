import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: './persona-list/persona-list.module#PersonaListModule'
  },
  {
    path: 'nuevo',
    loadChildren: './persona-detail/persona-detail.module#PersonaDetailModule'
  },
  {
    path: 'edicion/:id',
    loadChildren: './persona-detail/persona-detail.module#PersonaDetailModule'
  },
  {
    path: ':id',
    loadChildren: './persona-detail/persona-detail.module#PersonaDetailModule'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonaRoutingModule { }
