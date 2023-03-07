'use strict';

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/
//let elcontadorparasize=["el arbol padre"]
function BinarySearchTree(value) {
   this.value=value
   this.right=null
   this.left=null
}



BinarySearchTree.prototype.insert=function(value){
if (value<this.value) {if (this.left) {
   this.left.insert(value)
                      } else {
                               return this.left= new BinarySearchTree(value)}
}
else{
   if (this.right) {
      this.right.insert(value)
   } else {
   return this.right= new BinarySearchTree(value)}
}
}
//BinarySearchTree.prototype.size=function(){return array.length}
BinarySearchTree.prototype.size=function(){let count = 1
   if(this.left){
      count +=this.left.size()
   }
   if(this.right){
      count +=this.right.size()
   }
   return count
}
BinarySearchTree.prototype.contains= function(value){
   if (this.value===value) {return true}
   if (this.right && this.right.contains(value)) {return true}
  if (this.left && this.left.contains(value)) {return true}
   else{return false}}

BinarySearchTree.prototype.depthFirstForEach=function(cb,type){
switch(type){
case "pre-order":
cb(this.value)
if(this.left){this.left.depthFirstForEach(cb,type)}
if(this.right){this.right.depthFirstForEach(cb,type)}
break;
case"post-order":
if(this.left){this.left.depthFirstForEach(cb,type)}
if(this.right){this.right.depthFirstForEach(cb,type)}
cb(this.value)
break;
default:
   if(this.left){this.left.depthFirstForEach(cb,type)}
   cb(this.value)
   if(this.right){this.right.depthFirstForEach(cb,type)}
}}
BinarySearchTree.prototype.breadthFirstForEach=function(cb,memoria){
   if (!memoria) {
      var memoria=[]
   }
   
   cb(this.value)
   if (this.left){memoria.push(this.left)} 
   if (this.right) {memoria.push(this.right)}
   if (memoria.length>0) {
      memoria.shift().breadthFirstForEach(cb,memoria)
   }
      
   


}















// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   BinarySearchTree,
};
