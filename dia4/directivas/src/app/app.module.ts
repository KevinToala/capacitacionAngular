import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ResaltarTextoDirective } from './directivas/resaltar-texto.directive';

@NgModule({
  declarations: [
    AppComponent,
    ResaltarTextoDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
