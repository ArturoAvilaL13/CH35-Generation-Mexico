/**
 * Funciones.
 * Son bloques de codigo con instrucciones que se pueden reutilizar las veces qeu sean necesarias.
 * Algunas funciones reciben parametros y otras no reciben parametros
 * 
 */

//Funcion que permite saludar

function saludar() {
    console.log("Hola desde una funcion");
}

//Ejecutar la funcion con el nombre de la funcion y los parametros
saludar();

/**
 * Hoisting: Caracteristica de una funcion que nos permite invocarla desde antes de su inicializacion, es decir, se puede invocar antes del bloque de codigo o despues.
 */
//Se invoca en la linea 15 y en la linea 24
function saludar() {
    console.log("Hola invocando la funcion con hoisting");
}
saludar();

/**
 * Funciones que retornan algo.
 * Para que una funcion retorne algo (un String, una operacion, una variable, etc.), necesitamos indicarle al codigo de la funcion que vamos a retornar mediante la palabra return.
 */
function greeting() {
    return "hola desde una funcion que retorna";
}
console.log(greeting());

//funcion que retorna y recibe parametros
function suma(num1,num2) {
    return (num1+num2);
}
let resultado = suma(4,5);
console.log(`El resultado de sumar x + y = ${resultado}`);

//calcular cuadrado de un numero
function calcCuadrado(num) {
    return num ** 2;
}
console.log(`El resultado del cuadrado de x = ${calcCuadrado(3)}`);

/**
 * Funciones flecha(arrow function)
 * Es una manera de declarar una funcion por declaracion, sintetizando codigo y haciendolo mas legible
 */

//Funcion flecha para calcular el cubo de un numero
// const calcCubo = (number) =>{
//     return number ** 3;
// }
const calcCubo = (number) => number**3;
let resultdoCubo = calcCubo(3);
console.log(`El resultado del cubo de x = ${resultdoCubo}`);

/**
 * Funciones anonimas.
 * Son un tipo de funciones que se declran sin nombre de funcion y se alojan en el interior de una variable. Se hace referencia a ellas cada vez que las utilizamos
 * Las funciones anonimas no permiten el hoisting (no se pueden invocar antes de inicializarlas)
 */

const mensaje = function () {
    return "Es es un mensaje desde una funcion anonima";
}
console.log(mensaje());

/**
 * Callbacks
 * Es pasar una funcion b por el parametro a una funcion A, de modo que la funcion A pueda ejecutar esa funcion de forma generica desde su codigo.
 */
//Funcion B
const functionB= function(){
    console.log("Ejecutando funcion B");
}
//Funcion A que mandara a llamar a la funcion B
const functionA= function(callback){
    callback();
}

functionA(functionB);