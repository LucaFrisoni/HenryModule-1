/*# Homework JavaScript Avanzado I

## Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.// las variables no declaradas siempre son globales

```javascript*/

x = 1;
leta= 5;
var b = 10;
var c = function (a, b, c) {
   var x = 10;

   console.log(x);
   console.log(a);
   var f = function (a, b, c) {
      b = a;
      console.log(b);
      b = c;
      console.log(b);
      var x = 5;
      
   };
   f(a, b, c);
   console.log(b);
};
c(8,9,10)
console.log(b);
console.log(x);
/*``````javascript*/
;
foo();
function foo() {
   console.log('Hola!');
}
var bar= 1;
console.log(bar)
baz = 2;
console.log(baz);
//``````javascript
var instructor = 'Tony';
if (true) {
   var instructor = 'Franco';
}
console.log(instructor);
//``````javascript
var instructor = 'Tony';
console.log(instructor);
(function () {
   if (true) {
      var instructor = 'Franco';
      console.log(instructor);
   }
})();
console.log(instructor);
//``````javascript
var instructor = 'Tony';
let pm = 'Franco';
if (true) {
   var instructor = 'The Flash';
   let pm = 'Reverse Flash';
   console.log(instructor);
   console.log(pm);
}
console.log(instructor);
console.log(pm);
/*```

### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript*/                                              //Los && tome el ultimo valor  / los || toma el primer valor a menos que sea 0
var a= 6 / "3"    ;console.log(a);    //2
var b = "2" * "3" ;console.log(b); //6 
var c= 4 + 5 + "px";console.log(c);//"45px"
var d= "$" + 4 + 5;console.log(d);// "$45"
var e= "4" - 2;console.log(e);;//
var f= "4px" - 2; console.log(f);//
var g = 7 / 0; console.log(g);
{}[0]
var h=parseInt("09");console.log(h);//9
var i=5 && 2 && 0;console.log(i);// 
var j=2 && 5;console.log(j);
var k=0 || 3;console.log(k);
var l=2|| 5;console.log(l);
var que=[3]+[3]-[10];console.log(que);//[-4]
var n=3>2>1;console.log(n);
var ñ=[a] == ![];console.log(ñ);
/*```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).

### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript*/
function test() {
   console.log(a); undefined
   console.log(foo());

   var a = 1;
   function foo() {
      return 2;
   }
}

test();
/*```

Y el de este código? :

```javascript*/
var snack = 'Meow Mix';
console.log(snack);
function getFood(food) {
   if (food) {
      var snack = 'Friskies';
      return snack; //Friskies/ nada
   }
   return snack; //Meow Mic / nada xq false
}

getFood(false);
/*```

### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

```javascript*/
var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function () {
         return this.fullname;
      },
   },
};

console.log(obj.prop.getFullname());// Aurelio de rosa

var test = obj.prop.getFullname;

console.log(test());
/*```

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript*/
function printing() {
   console.log(1);
   setTimeout(function () {
      console.log(2);
   }, 1000);
   setTimeout(function () {
      console.log(3);
   }, 0);
   console.log(4);
}

printing();
