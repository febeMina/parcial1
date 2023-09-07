import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Parcial1Component } from './parcial1/parcial1.component';
import { FormsModule } from '@angular/forms';
import { ParcialComponent } from './parcial/parcial.component';

@NgModule({
  declarations: [
    AppComponent,
    Parcial1Component,
    ParcialComponent
  ],
  imports: [
    BrowserModule, FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
