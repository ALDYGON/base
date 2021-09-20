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
interface Almacen01 {
  cliente01: string,
  nomProducto01: string,
  cantProducto01: number,
  precioProd01: number
}

interface Almacen02{
  cliente02: string,
  nomProducto02: string,
  cantProducto02: number,
  precioProd02: number
}

const Manejo1 = {
  cliente01: 'Maria Flores',
  nomProducto01: 'Ajinomen',
  cantProducto01: 5,
  precioProd01: 1
}

const Manejo2 = {
  cliente02: 'Cesar Cardenas',
  nomProducto02: 'Fideo',
  cantProducto02: 3,
  precioProd02: 2
}
 console.table(Manejo1);
 console.table(Manejo2);

//productos


