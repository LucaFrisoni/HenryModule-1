'use strict';/* 
SUMA DE BINARIOS
Se leen de derecha a izquierda
A B AND
1 1  1
1 0  0
0 0  0
0 1  0

A B XOR
1 1  0
1 0  1
0 0  0
0 1  1
Ej  1 1 0 0 1 1
    0 1 1 0 0 0
    1 0 1 0 1 1

Half Adder==> suma de numeros binarios/ cuando hay 1 acarreas es de decir le agregas un 1 al primer numero y un 0 abajo/ el x or es la expresion del resultado binario 
                                                   1

##############
DE BINARIO A DECIMAL          
Multiplicas el numero binario por 2**n y sumas todos
 1   0   1   1   1
n=4 n=3 n=2 n=1 n=0
##############

DE DECIMAL A BINARIO21 a binario
dividis por 2, luego al cociente dividis por 2, el resto es el numero binario,
se lee de la ultima division a la primera
#21 a binario#
21/2= 10 (resto 1)
10/2= 5 (resto 0)
5/2= 2 (resto 1)
2/2= 1 (resto 0)
1/2= 0 (resto 1)
*/

function BinarioADecimal(num) {let resultado = 0
   var array=num.split("").reverse();
   for (let i = 0; i < array.length; i++) {
     resultado += array[i]*(2**i);}
   
   return resultado



} 

function DecimalABinario(num) {var xxx= num.toString(2); return xxx}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
