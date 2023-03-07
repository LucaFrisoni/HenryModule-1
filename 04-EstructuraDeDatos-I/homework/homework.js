'use strict';

/*
Definir las funciones recursivas nFactorial y nFibonacci.

nFactorial(n) debe retornar el factorial de n sabiendo que, siendo n un número natural, su factorial (representado como n!) es el producto de n por todos los números naturales menores que él y mayores a 0. Ejemplo: 5! = 5 * 4 * 3 * 2 * 1

nFibonacci(n) debe retornar el enésimo número de la secuencia de Fibonacci, tomando al 0 y al 1, respectivamente, como primer y segundo elementos de la misma, y sabiendo que cualquier elemento que se agregue a esta secuencia será el resultado de la suma del último elemento y el anterior.
Ejemplo: nFibonacci(7) retornará 13, ya que 13 es el dígito que está en la posición 7 de la secuencia.

Secuencia:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ... 


Como ejercicio adicional y completamente opcional, al terminar de resolver este problema pueden intentar definir funciones que logren los mismos resultados pero de manera iterativa.
*/

function nFactorial(n) {if (n===0) {return 1
  
} else {return n*nFactorial(n-1)
  
}}
  console.log(nFactorial(5));






  function nFibonacci(n) {
  var array =[0,1];
    for(let i = 0; i <=n; i++) {
     array.push(array[i]+array[i+1]);
     }
    var resultado=array[n];
  return resultado
}console.log(nFibonacci(10000));





/*
Implementar la clase Queue, sabiendo que es una estructura de tipo FIFO, donde el primer elemento que ingresa es el primero que se quita. Definir los siguientes métodos:
  - enqueue: agrega un valor respetando el orden.
  - dequeue: remueve un valor respetando el orden. Retorna undefined cuando la queue está vacía.
  - size: retorna el tamaño (cantidad de elementos) de la queue.

Pueden utilizar class o función constructora.
*/

function Queue() {
   this.array=[];
}

Queue.prototype.enqueue=function(jeje,jiaj){this.array.push(jeje,jiaj)}
Queue.prototype.dequeue= function(){return this.array.shift()}
Queue.prototype.size= function(){return this.array.length}
var jiji= new Queue();
jiji.enqueue("hola","chau",)

console.log(jiji);
var array=[1,2,2,"sd",8,10,4]
var xx =array.reverse()
console.log(xx);
console.log(array.reverse()[1])
;  

/*⚠️ No modificar nada debajo de esta línea ⚠️*/
module.exports = {
   Queue,
   nFactorial,
   nFibonacci,
};