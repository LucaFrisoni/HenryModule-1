'use strict';

/* EJERCICIO 1
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  EJEMPLO 
  search(2) busca un nodo cuyo valor sea 2;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/
function LinkedList() {
  this.head=null}

function Node(value) { 
  this.value=value
  this.next=null}   

var jej=new LinkedList
console.log(jej.head);
LinkedList.prototype.add=function(value){
  let vagon= new Node(value);
 let elenanomaldito= this.head;
 if (this.head===null) {this.head=vagon
  return vagon
 } else {while(elenanomaldito.next !==null){
  elenanomaldito=elenanomaldito.next}
  
 } elenanomaldito.next=vagon
 return vagon
} 
jej.add(1)
jej.add(2)
jej.add(3)
jej.add(4)
jej.add("hola")
console.log(jej);
LinkedList.prototype.remove= function(){
if (this.head === null) {return null
  
}
let current= this.head
let ultimovalor= null
if (current.next===null) { ultimovalor= current
  this.head=null;
  return ultimovalor.value
} 
else {while(current.next.next !== null){
  current=current.next
} ultimovalor= current.next
current.next=null;
return ultimovalor.value
}
}

console.log(jej);

console.log(jej)

;

//.search devuelve dato booleano

  


LinkedList.prototype.search = function(param) {
  if (this.head === null) {
    return null;
  }
  let current = this.head;
  while (current !== null) {
    if (typeof param === "function") {
      if (param(current.value)) {
        return current.value;
      }
    } else if (typeof param === 'object') {
      if (Object.is(current.value, param)) {
        return current.value;
      }
    } else {
      if (current.value === param) {
        return current.value;
      }
    }
    current = current.next;
  }
  return null;
};




console.log(jej.search())

                                                                    







/* EJERCICIO 2
Implementar la clase HashTable.
Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/
function HashTable() {
  this.numBuckets=35
  this.buckets=[]
    
}
HashTable.prototype.hash= function(string){
  let acumulador=0
  for (let i of string) {
    acumulador+=i.charCodeAt()
}
return acumulador%this.numBuckets
}


HashTable.prototype.set=function(key,value){
  if (typeof key !== "string") throw new TypeError("Key must be strings")
  let indice=this.hash(key);
 if (!this.buckets[indice]) {this.buckets[indice]={}
 }
 this.buckets[indice][key]=value
}
HashTable.prototype.get= function(key){
  let indice=this.hash(key)
   return this.buckets[indice][key]
}
HashTable.prototype.hasKey= function(key){
  let indice = this.hash(key)
  return !!this.buckets[indice][key]
}










// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   Node,
   LinkedList,
   HashTable,
};
