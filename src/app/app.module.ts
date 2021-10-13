import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ClienteComponent } from './clientes/cliente/cliente.component';
import { ListaclientesComponent } from './clientes/listaclientes/listaclientes.component';
import { HabitacionComponent } from './HotelSaunaZ/habitacion/habitacion.component';
import { HabitacionesComponent } from './HotelSaunaZ/habitaciones/habitaciones.component';
import { HeaderComponent } from './HotelSaunaZ/header/header.component';
import { PortadaComponent } from './HotelSaunaZ/portada/portada.component';
import { RestauranteComponent } from './HotelSaunaZ/restaurante/restaurante.component';
import { CrudComponent } from './HotelSaunaZ/crud/crud.component';
import { PerfilComponent } from './HotelSaunaZ/perfil/perfil.component';

@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    ListaclientesComponent,
    HabitacionComponent,
    HabitacionesComponent,
    HeaderComponent,
    PortadaComponent,
    RestauranteComponent,
    CrudComponent,
    PerfilComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
