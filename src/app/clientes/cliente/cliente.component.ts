import { Component } from '@angular/core';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent {
  nombre: string = 'Juan Perez';
  edad: number = 28;

  get nombreMayusculas(): string{
    return this.nombre.toUpperCase();
  }

  recibirDatos(): string{
    return this.nombre + " - " + this.edad;
    //return 'S{this.nombre} - S{this.edad}';
  }

  cambiarNombre(): void{
    console.log('Cambiar de Nombre');
    this.nombre = 'Graciela Mendez';
  }

  cambiarEdad(): void{
    this.edad = 32;
  }

}