import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgregadorComponet } from './agregador.component/agregador.component';

import { AppComponent } from './app.component';
import { ClienteComponent } from './cliente/cliente.component';

@NgModule({
  declarations: [
    AppComponent,
    AgregadorComponet,
    ClienteComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
