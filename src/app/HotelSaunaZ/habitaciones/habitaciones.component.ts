import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-habitaciones',
  templateUrl: './habitaciones.component.html',
  styleUrls: ['./habitaciones.component.css']
})

export class HabitacionesComponent implements OnInit {

  habitacionesMatrimoniales:any [] = 
  [
    {
      "nombre": "101",
      "img": "../../assets/images/matrimonio1.jpg"
    },
    {
      "nombre": "102",
      "img": "../../assets/images/matrimonio2.jpg"
    },
    {
      "nombre": "302",
      "img": "../../assets/images/matrimonio3.jpg"
    },
    {
      "nombre": "802",
      "img": "../../assets/images/matrimonio4.jpg"
    }
  ];

  habitacionesTriples:any [] = 
  [
    {
      "nombre": "101",
      "img": "../../assets/images/triples1.jpg"
    },
    {
      "nombre": "102",
      "img": "../../assets/images/triples2.jpg"
    },
    {
      "nombre": "302",
      "img": "../../assets/images/triples3.jpg"
    },
    {
      "nombre": "802",
      "img": "../../assets/images/triples4.jpg"
    }
  ];

  habitacionesDobles:any [] = 
  [
    {
      "nombre": "101",
      "img": "../../assets/images/dobles1.jpg"
    },
    {
      "nombre": "102",
      "img": "../../assets/images/dobles2.jpg"
    },
    {
      "nombre": "302",
      "img": "../../assets/images/dobles3.jpg"
    },
    {
      "nombre": "802",
      "img": "../../assets/images/dobles4.jpg"
    }
  ];

  habitacionesSimples:any [] = 
  [
    {
      "nombre": "101",
      "img": "../../assets/images/simples1.jpg"
    },
    {
      "nombre": "102",
      "img": "../../assets/images/simples2.jpg"
    },
    {
      "nombre": "302",
      "img": "../../assets/images/simples3.jpg"
    },
    {
      "nombre": "802",
      "img": "../../assets/images/simples4.jpg"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

