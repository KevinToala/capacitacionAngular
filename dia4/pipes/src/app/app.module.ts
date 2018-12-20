import { NombrePersonaImpuroPipe } from './pipes/nombre-persona-impuro.pipe';
import { NombrePersonaPipe } from './pipes/nombre-persona.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    NombrePersonaPipe,
    NombrePersonaImpuroPipe
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
