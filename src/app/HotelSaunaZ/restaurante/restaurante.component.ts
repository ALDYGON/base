import { Component } from '@angular/core';

@Component({
  selector: 'app-restaurante',
  templateUrl: './restaurante.component.html',
  styleUrls: ['./restaurante.component.css']
})
export class RestauranteComponent {

  desayuno:any [] = 
  [
    {
      "nombre": "Desayuno Americano",
      "img": "../../assets/images/desayunoAmericano1.jpg"
    },
    {
      "nombre": "Desayuno Continental",
      "img": "../../assets/images/desayunoContinental.jpg"
    },
    {
      "nombre": "Desayuno de la casa",
      "img": "../../assets/images/desayunoCasa.jpg"
    },
  ];

  almuerzo:any [] = 
  [
    {
      "nombre": "Lomo Saltado",
      "img": "../../assets/images/lomo1.jpg"
    },
    {
      "nombre": "Cuy al Horno",
      "img": "../../assets/images/cuyhorno.jpg"
    },
    {
      "nombre": "Buffet de la Casa",
      "img": "../../assets/images/buffet.jpg"
    },
  ];

  cena:any [] = 
  [
    {
      "nombre": "Pastas",
      "img": "../../assets/images/pastas.jpg"
    },
    {
      "nombre": "Carnes",
      "img": "../../assets/images/carnes.jpg"
    },
    {
      "nombre": "Variedad de Pollos",
      "img": "../../assets/images/pollo.jpg"
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }
}
