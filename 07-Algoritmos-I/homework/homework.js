'use strict'
// No cambies los nombres de las funciones.
//Deben ser numeros primos y para el caso de num=180, debe devolver [1,2,2,3,3,5]
function factorear(num, array = []) {
  let divisor = 2
  if (num===1) {
    array.unshift(1);
    return array
  }
  while (num > 1) {
    if (num % divisor === 0) {
      array.push(divisor)
      let a = num / divisor
      return factorear(a,array)
    } else {
      divisor++
    }
  }
  
}





function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  for (let j = 0; j < array.length; j++) {
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] < array[i + 1]) {
      } else {
        let aux = array[i];
        array[i] = array[i + 1];
        array[i + 1] = aux;
      }
    }
  } return array
}


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos   //
  // Devolver el array ordenado resultante//[2,1,5,3,7]
  // Tu código:
  for (let j = 0; j < array.length; j++) {
    for (let i = 1; i < array.length; i++) {
      if (array[i] < array[i - 1]) {
        let aux = array[i];
        array[i] = array[i - 1];
        array[i - 1] = aux;

      }
    }
  } return array

}
function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante[1,2,5,3,7]
  // Tu código:
  for (let j = 0; j < array.length; j++) {
    for (let i = 1; i < array.length; i++) {
      let minvalor = array[0];
      let guardando = 0
      if (array[i] < minvalor) {
        guardando = array[i];
        array[i] = array[i - 1];
        array[i - 1] = aux;
      }

    }

  }
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
