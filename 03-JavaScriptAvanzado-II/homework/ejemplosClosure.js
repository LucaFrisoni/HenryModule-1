function one() {
    const hulkArr = []; 
    
    return function two(value) { // enlasa a esta función con ese registro mágico
      hulkArr.push(value);
      return hulkArr
    };
  }

  var ejecuteClousure = one()(4) 
  console.log(ejecuteClousure);
  var ejecuteClousure2= one()
  console.log(ejecuteClousure2(10));
  
  

  var ejecuteClousure2 = one()("hola")
  console.log(ejecuteClousure2)
  
  
  

  function saludar( saludo ){
      return function( nombre ){
          console.log(saludo + ' ' + nombre);
      }
  }
   
  var saludarHola = saludar('Hola'); // Esto devuelve una función
  var despedir = saludar('Chau');
  despedir("Cualquiera")
  saludarHola('Toni');

  //-----------------------------------------------------------------------------------------
  var creaFuncion = function(){
      var arreglo = [];
   // var i = undefined
      for ( let i=0; i < 3; i++){ // var i el dato enlace   // i = 0
          arreglo.push(
              function(){
                  console.log(i);
              }
          )
      }
      return arreglo;
  }
   
  var arr = creaFuncion();
  // arr -> arreglo [f(){log(i)},f(){log(i)},f(){log(i)}]
  arr[0]() // 3 sale un 3, qué esperaban ustedes??
  arr[1]() // 3
  arr[2]() // 3
  //--------------------------------------------------------------------------------------------
  const arrayData = [];
  function add(value) {
    arrayData.push(value);
  }
  function modificArr(value) {
    arrayData.push(value);
  }

  modificArr(3);
  modificArr(33);
  add("we");

  console.log(arrayData);

  const arrayData2 = [];

  function modificArr2(value, addDelete) {
    if (addDelete === "add") {
      arrayData2.push(value);
    }
    if (addDelete === "delete") {
      arrayData2.pop();
    }
  }

  modificArr2(4, "add");
  modificArr2(12, "add");

  console.log(arrayData2);
  var info = { a: 1 };

const dataObj = {
  info: [1, 2, 3],
  prop1: "hola",
  vv: function () {
    this.prop1 = "chau";
    return this.prop1;
  },
};
dataObj.vv();

function fufu() {
  dataObj.info.pop();
  return this.info;
}
dataObj.fufu = fufu;

console.log(dataObj);
console.log(dataObj.fufu());

console.log(dataObj);

var persona = {
  nombre: "Guille",
  apellido: "Aszyn",
};
// persona.logNombre= logNombre

var logNombre = function (apellido) {
  console.log(this.nombre);
  return this.nombre + " " + apellido;
};

// Bind -> nos retorna una función
// necesita dos pasos
//                    logNombre(one, two)
var logNombrePersona = logNombre.bind(persona, "lopez");
// el primer parametro de bind es el this!
console.log(logNombrePersona());
console.log(persona);

// Call & Apply -> retornan un valor directamente
var valorCall = logNombre.call(persona, "Funes");
console.log(valorCall);

var valorApply = logNombre.apply(persona, ["Funes2"]);
console.log(valorApply);
// Clases
function Persona() {
  // POO
  this.nombre = "";
  this.apellido = "";
}
Persona.prototype.addName = function (name) {
  this.nombre = name;
};
Persona.prototype.addAp = function (ap) {
    this.apellido = ap;
  };

/*
{
    nombre: "",
    apellido: ""
}
*/
const instanciaPersona = new Persona();
instanciaPersona.addName("Mauro");
instanciaPersona.addAp("Mauro");

const instanciaPersona2 = new Persona();

console.log(Persona);
console.log(instanciaPersona);
console.log(instanciaPersona2);