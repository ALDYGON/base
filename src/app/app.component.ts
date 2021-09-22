import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'base';
}

console.log('Bienvenidos a Typescript');

//#region variables
// let nombre: string = 'Julieta';
// let ahorros: number | string = 500;
// let esAlto: boolean | string = true;
// esAlto = false;
// esAlto = 'sin informacion';
// ahorros = 1000;
// ahorros = 'sin ahorros';
// console.log(nombre, ahorros, esAlto);
//#endregion


//#region arreglos interfaces objetos
// let pasatiempos: (string| number)[] = ['caminar','violin'];

// pasatiempos.push('ajedrez');
// pasatiempos.push(5);
// console.log(pasatiempos);

// const Edad: number[] = [5,6,5];
// //Edad = [6,6,6,6];
// Edad.push(10);
// Edad.pop();
// Edad.pop();
// console.log(Edad);

// interface Estudiante{
//   nombre: string,
//   apePaterno: string,
//   codigo: string,
//   pension: number,
//   estaMatriculado: boolean,
//   pasatiempos: string[],
//   escuela?: string
// }

// let alumno:Estudiante ={
//   nombre: 'Juan',
//   apePaterno: 'Perez',
//   codigo: '017684523b',
//   pension: 825,
//   estaMatriculado: true,
//   pasatiempos: ['futbol','basket'],
// };

// alumno.escuela = 'Ingenieria de Sistemas';

// console.log(alumno);
// console.table(alumno);
//#endregion


//#region funciones (basico)
// function sumar(a:number , b:number): number{
//   return a + b;
// }

// function mostrar(valor: any): void{
//   console.log(valor);
// }

// let resultado = sumar(5,6);

// console.log(resultado);
// mostrar(resultado);

// const sumarf = (a: number, b: number): number =>
// a + b;

// const mostrarf = (valor: any): any =>
// console.log(valor);

// mostrar (sumarf(7,8));
// mostrarf(sumarf(7,8));

// function restar(nro1: number,  nro2: number = 2, nroAux?: number):number {
//   return nro1 - nro2;
// }

// resultado = restar(15, 5, 5);
// mostrar(resultado);
//#endregion


//#region metodos y objetos
// interface cliente{
//   nombre: string,
//   apellidos: string,
//   cuenta: cuenta,
//   movimiento: (valor: number) => void 
// }

// interface cuenta{
//   agencia: string,
//   saldo: number
// }

// const ag01cl01 = {
//   nombre: 'Juan',
//   apellidos: "Perez",
//   cuenta: {
//     agencia: "01",
//     saldo: 1500
//   },
//   movimiento(valor: number){
//     this.cuenta.saldo += valor;
//   }
//   //movimiento: (valor: number):void => this.cuenta.saldo += valor,
// }

// // function deposito(cantidad: number, cuenta: cuenta):void {
// //   cuenta.saldo += cantidad;
// // }

// // deposito(500, ag01cl01.cuenta);

// ag01cl01.movimiento(1500);

// console.table(ag01cl01);
//#endregion


//#region desestructuracion de objetos
// interface Cuenta{
//   cliente: string,
//   saldo: number
//   movimiento: Movimiento
// }

// interface Movimiento{
//   saldoAnterior: number,
//   valorMovimiento: number
// }

// const Cuenta = {
//   cliente: 'Carlos Guzman',
//   saldo: 500,
//   movimiento: {
//     saldoAnterior: 0,
//     valorMovimiento: 500
//   }
// }

// console.log('El valor de la cuenta es: ', Cuenta.cliente);
// console.log('El saldo de la cuenta es: ', Cuenta.saldo);
// console.log('El saldo anterior de la cuenta es: ', Cuenta.movimiento.saldoAnterior);
// console.log('El valor del movimiento de la cuenta es: ', Cuenta.movimiento.valorMovimiento);

// console.log('Desestructurando un objeto: ');

// let{cliente, saldo, movimiento} = Cuenta;
// let {saldoAnterior, valorMovimiento} = movimiento;
// console.log('El valor de la cuenta es: ', Cuenta.cliente);
// console.log('El saldo de la cuenta es: ', Cuenta.saldo);
// console.log('El saldo anterior de la cuenta es: ', Cuenta.movimiento.saldoAnterior);
// console.log('El valor del movimiento de la cuenta es: ', Cuenta.movimiento.valorMovimiento);
//#endregion


//#region desestructuracion de arreglos
// const pasatiempos: string[] = ['Ludo','Monopolio','Risk'];

// console.log('Pasatiempo 01: ', pasatiempos[0]);
// console.log('Pasatiempo 02: ', pasatiempos[1]);
// console.log('Pasatiempo 03: ', pasatiempos[2]);

// console.log('Desestructurando un arreglo');

// const [p01, , p03] = pasatiempos;

// console.log('Pasatiempo 01: ', p01);
// console.log('Pasatiempo 02: ', 'sin valor');
// console.log('Pasatiempo 03: ', p03);
//#endregion


//#region trabajo con objetos - typescript
//almacenes
// interface Almacen01 {
//   cliente01: string,
//   nomProducto01: string,
//   cantProducto01: number,
//   precioProd01: number
// }

// interface Almacen02{
//   cliente02: string,
//   nomProducto02: string,
//   cantProducto02: number,
//   precioProd02: number
// }

// const Manejo1 = {
//   cliente01: 'Maria Flores',
//   nomProducto01: 'Ajinomen',
//   cantProducto01: 5,
//   precioProd01: 1
// }

// const Manejo2 = {
//   cliente02: 'Cesar Cardenas',
//   nomProducto02: 'Fideo',
//   cantProducto02: 3,
//   precioProd02: 2
// }
//  console.table(Manejo1);
//  console.table(Manejo2);

// //productos

//#region uso de static y this
// class Cafetera{
//   static serie: number = 0;

//   constructor(
//     private color:string,
//     private nroSerie?: number
//   ){
//     Cafetera.serie += 1;
//     this.nroSerie = Cafetera.serie;
//   }

//   getColor():string{
//     return this.color;
//   }

//   getNroSerie(): number | undefined{
//     return this.nroSerie
//   }

//   mostrar(){
//     mostrarCafetera(this);
//   }
// }

// const mostrarCafetera = (cafetera: Cafetera) => {
//   console.log('----------------------------');
//     console.log('Serie: ',cafetera.getNroSerie());
//     console.log('Color: ',cafetera.getColor());
//     console.log('---------------------------');
// };

// const cafeteras: Cafetera[] = [new Cafetera('rojo'),new Cafetera('azul')];
// cafeteras.push(new Cafetera('verde'));
// cafeteras.push(new Cafetera('morado'));

// cafeteras.forEach((cafetera) => {cafetera.mostrar()});
// console.log('estado de la variable estatica: ',Cafetera.serie);
//#endregion

//#region herencia y polimorfismo
// class Persona{
//   constructor(
//     protected nombre: string,
//     protected dni: string
//   ){};

//   getNombre(): string{
//     return this.nombre;
//   }

//   getDni(): string{
//     return this.dni;
//   }
// }

// class Alumno extends Persona {
//   constructor(
//     nombre: string,
//     dni: string,
//     private codigo: string
//   ){
//     super(nombre, dni);
//   };

//   mostrar(){
//     console.log('-----------------------');
//     console.log('Nombre: ', this.nombre);
//     console.log('DNI:', this.dni);
//     console.log('Codigo: ', this.codigo);
//     console.log('-----------------------');
//   };
// }

// class Docente extends Persona {
//   constructor(
//     nombre: string,
//     dni: string,
//     private codDocente: string
//   ){
//     super(nombre, dni);
//   };

//   mostrar(){
//     console.log('-----------------------');
//     console.log('Nombre: ', this.nombre);
//     console.log('DNI:', this.dni);
//     console.log('Codigo Docente: ', this.codDocente);
//     console.log('-----------------------');
//   };
// }

// const mostrarPersona = (persona: Persona) => {
//   console.log('-----------------------');
//   console.log('Nombre: ', persona.getNombre());
//   console.log('DNI:', persona.getDni());
//   console.log('-----------------------');
// };

// const alumno: Alumno[] = [
//   new Alumno('Juan Perez','00000001','01856789'),
//   new Alumno('Diana Torobeo','00000002','01567894'),
//   new Alumno('Sandro Pereira','00000003','012345859'),
//   new Alumno('Guillermo Vargas','00000004','0134567829'),
// ]

// const docentes: Docente[] = [
//   new Docente('Docente Juan Perez','00000001','01856789'),
//   new Docente('Docente Diana Torobeo','00000002','01567894'),
//   new Docente('Docente Sandro Pereira','00000003','012345859'),
//   new Docente('Docente Guillermo Vargas','00000004','0134567829'),
// ]

// alumno.forEach((alumno) => alumno.mostrar());
// alumno.forEach((alumno) => mostrarPersona(alumno));
// docentes.forEach((docente) => mostrarPersona(docente));
//#endregion


//#region quesoy
// function queSoy<T>(valor: T){
//   return valor;
// }

// const soyString = queSoy('Hola desde typescript');
// const soyNumero = queSoy(5);
//#endregion


//#region trabajo TYPESCRIPT 
interface Producto {   
  idP: number; 
  codProducto : string;
  nomProducto  : string;
  costProducto: number,
  cambioPrecio:(valor: number) => void
}

// ALMACEN
export default class Almacen{
    constructor (
      private codigoA : string,
      private nombAlmacen : string,
      private prodAlmacen   : Producto[] 
    ){}

    public ingresarProducto(P : Producto){   //INGRESAR PROD
      this.prodAlmacen.push(P);
    }
    
    public mostrarProducto(){    //MOSTRAR PRODUCTO
      console.log("\nnombre Almacen:"+this.nombAlmacen+
                    "\ncodigo del almacen: "+this.codigoA);
      this.prodAlmacen.forEach(function(elemento) {
        console.table(elemento);
      })
    }
  
    public buscarProducto(codP : Producto){
      let buscarProducto = false;
      let position = 1;
      let indiceProducto = 0;
   
      while(!buscarProducto && indiceProducto < this.prodAlmacen.length) {
          if(this.prodAlmacen[indiceProducto] == codP) {
              buscarProducto = true;
              position = indiceProducto;
          } else {
              indiceProducto += 1;
          }
      }
      return position;
    }
    public buscarP(producto: Producto){  
      let resultado = this.prodAlmacen.find((procd)=>procd.idP = producto.idP);
      if(resultado == null){
        return null;
      }
      console.log("BUSCAR PRODUCTO: ")
      return resultado;
      }
  
    private quitarProducto(codP : Producto){
      let posicion = this.buscarProducto(codP);
  
      this.prodAlmacen.splice(posicion,1);
    }
  
    public moverProducto(codP : Producto, codA : Almacen){
      let posicion = this.buscarProducto(codP);
      if(posicion == -1){
        console.log("Producto no encontrado en Almacen");
      }else{
        codA.ingresarProducto(this.prodAlmacen[posicion])
        this.quitarProducto(codP)
        console.log("TODO CORRECTO");
      }
    }
  }

//ALMACENES

 const almacen01 : Almacen = new Almacen("almacen01","Almacen 01",[]);
 const almacen02 : Almacen = new Almacen("almacen02","Almacen 02",[]);
 const almacen03 : Almacen = new Almacen("almacen03","Almacen 03",[]);
 const almacen04 : Almacen = new Almacen("almacen03","Almacen 04",[]);


//PRODUCTOS

const producto01 :  Producto = {
  idP: 1, 
  codProducto : "PRODUCTO 1",
  nomProducto : "AJINOMEN",
  costProducto: 1.5,
  cambioPrecio(valor:number) {
    this.costProducto = valor;
  }
}

const producto02 : Producto = {
  idP: 2, 
  codProducto : "PRODUCTO 2",
  nomProducto : "TALLARIN SPAGUETTI",
  costProducto: 2.8,
  cambioPrecio(valor:number) {
    this.costProducto = valor;
  }
}

const producto03 : Producto = {
  idP: 3, 
  codProducto : "PRODUCTO 3",
  nomProducto : "DURAZNO ALMIBAR",
  costProducto: 7.9,
  cambioPrecio(valor:number) {
    this.costProducto = valor;
  }
}

const producto04 : Producto = {
  idP: 4, 
  codProducto : "PRODUCTO 4",
  nomProducto : "MAIZ MORADO",
  costProducto: 2.5,
  cambioPrecio(valor:number) {
    this.costProducto = valor;
  }
}

const producto05 : Producto = {
  idP: 5, 
  codProducto : "PRODUCTO 5",
  nomProducto : "PAPA BLANCA",
  costProducto: 2.3,
  cambioPrecio(valor:number) {
    this.costProducto = valor;
  }
}

//CONSULTAS

producto01.cambioPrecio(100)  //INGRESAR PRODUCTO Y CAMBIAR PRECIO
producto02.cambioPrecio(20)

almacen01.ingresarProducto(producto01); //ALMACEN 1
almacen01.ingresarProducto(producto02);
almacen02.ingresarProducto(producto03);
almacen03.ingresarProducto(producto04);
almacen04.ingresarProducto(producto05);

almacen01.mostrarProducto();  //MOSTRAR ALMACEN01 


almacen02.mostrarProducto();  //MOSTRAR ALMACEN02


almacen03.mostrarProducto(); //MOSTRAR ALMACEN03


almacen04.mostrarProducto(); //MOSTRAR ALMACEN04

almacen01.moverProducto(producto02,almacen02);  //MOVIMIENTO DE ALMACENES
almacen01.moverProducto(producto02,almacen02);
almacen04.moverProducto(producto05,almacen03);

almacen02.mostrarProducto();  //MOSTRAR ALMACEN MOVIDO
almacen03.mostrarProducto();

console.table(almacen01.buscarP(producto01))  //BUSQUEDA DE PRODUCTO

