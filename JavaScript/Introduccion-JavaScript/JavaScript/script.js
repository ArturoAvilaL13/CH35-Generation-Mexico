// comentarios de una sola linea

/*
Comentarios
multilinea
*/

//alert("hola mundo en javascript");

//console.log("Mensaje para la consola");

// var nombre = prompt("Ingresa tu nombre");
// alert("Hola, "+nombre+" Bienvenido a la CH35");

// var numero1 = parseInt(prompt("Dame un numerito"));
// var numero2 = parseInt(prompt("Dame otro numerito"));

// console.log("La suma de: "+numero1+"+"+numero2+"="+(numero1+numero2));
// console.log("La resta de: "+numero1+"-"+numero2+"="+(numero1-numero2));
// console.log("La multiplicacion de: "+numero1+"*"+numero2+"="+(numero1*numero2));
// console.log("La division de: "+numero1+"/"+numero2+"="+(numero1/numero2));

/*Hacer una practica donde ingrese edad e indique si es mayor de edad*/

// var edad;
// var res = "s";

// while(res==="s"){

//     edad = parseInt(prompt("Dame tu edad"));
//     //console.log(edad);

//     if(0 <= edad && edad< 18){
//         alert("Tss todavia pides permiso");
//     }else if(18<=edad  && edad<30){
//         alert("Ya alcanzas el timbre :D");
//     }else if(30<=edad  && edad<50){
//         alert("¿Tambien te duelen las rodillas?");
//     }else{
//         alert("Es hora de irse a mimir");
//     }
//     res = prompt("¿Otra edad? s/n");

// }   

//scope es el alcance de nuestras variables
/*
var, let, const la diferencia es el alcance
    var tiene  un alcance global
    let tiene un alcance local
    const se mantiene sin ningun cambio

    string:cadena de texto (lleva comillas)
    number: numero
    noolena: true/false
    null:nulo
    undefinied:no esta asigando o definido

*/

/* 
Todas nuestras variables deben ser declaradas con nombres especificos y claros, sin espacios, no deben iniciar con numeros
*/

// let nombre = "Daniel";
// let invitadosExtras = 2;
// let esMayorEdad = true;
// let edad = 24;
// let invitadoEspecial = null;
// let horaDeSalida = undefined;

// console.log(nombre);
// document.write(nombre);

/*
Encasillamiento o tipado

Es util para el mantenimiento del codigo ya que lo hace mas legible y facil de entender.
Prevencion de errores para reducir la probabilidad de los mismos
mejora el rendimiento de nuestro programa
*/
/*
let numero = 15;
let texto = "Hola";

//con encasillamiento

let numeroEncasillado = Number(5);
let textoEncasillado = string("hola");
*/


// typeof palabra reservada para saber que tipo de dato tenemos

console.log(typeof(nombre));

let numero1 = "4";
let numero2 = "5";
let edad = 43;
let esMayorEdad = true;
let esMenorEdad = !esMayorEdad;
let texto = String(esMayorEdad);

console.log("Tipo de variable numero1: "+typeof(numero1));

//typeof solo devuelve el tipo de variable que estas utilizando

console.log("Tipo de variable luego de aplicar un Number: "+typeof(Number(numero1)));
console.log("Tipo de variable luego de aplicar un parseInt: "+typeof(parseInt(numero1)));

// Number: tranforma tu variable a una variable numerica
// parseInt: tranforma tu variable a un tipo de variable entera
// en el ejmplo lo utilizamod para sumas dos variables tipo string

console.log(numero1+numero2);
console.log(parseInt(numero1)+parseInt(numero2));
console.log(Number(numero1)+Number(numero2));

//conversion de number a string: String .toString()

console.log(typeof(String(edad)));
console.log(typeof(edad.toString()));

let numero = Number(esMayorEdad);
console.log(numero);

console.log(texto);
console.log(esMenorEdad);

//concatenar

let saludo = "Hola humano ";
let frase = "el futuro es hoy";
console.log(saludo+frase);