import { Component } from "@angular/core";

@Component({
    selector: 'app-agregador',
    templateUrl: './agregador.component.html',
    styleUrls: ['./agregador.component.css']
  })
export class AgregadorComponet{
  Titulo: string = 'Primer Componente';
  valor: number = 0;
  salto: number = 5;

  agregar(numero: number): void{
    this.valor += numero;
  }
}