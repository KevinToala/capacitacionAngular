import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaisListComponent } from './pais-list.component';

const routes: Routes = [
  {
    path: '',
    component: PaisListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaisListRoutingModule { }
