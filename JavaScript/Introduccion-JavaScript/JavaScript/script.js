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
/*
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
*/

/*
Tipos de datos
> - String (Cadenas de texto)
> - Number (numericos)
> - Booleans (booleanos; true or false)
> - Null (nulos)
> - Undefined (Indefinidos)
> - Objects (Objects)
> - Objects (Arrays)

console.log(); Nos permite visualizar en consola del navegador el codigo de js.
console.warn(); Muestra un mensaje de advertencia
console.error(); Muestra un mensaje de error
console.table();


let firstName;
firstName="daniel";
let lastName="Maldonado";

console.log(firstName+" "+lastName);
console.log("Mi nombre es "+firstName+" y mi apellido es "+lastName);
*/
/*
// ECMAScript 6 (ES6). Interpolacion de cadenas
// > - backticks ``
// > - Para variables ${}
// > - Texto para string

let age = 37;
//sin salto de linea
console.log(`Mi nombre es ${firstName} y mi apellido es ${lastName} y tengo ${age} años`);
//con salto de linea
console.log(`Mi nombre es ${firstName}
mi apellido es ${lastName}
tengo ${age} años`);

//console.warn();
console.warn(`Precaucion, no es buena practica dejar sin punto y coma`);
//console.error();
console.error(`Status 404`);
*/

/**
//  Array. Se traduce como matriz o arreglo. Es un tipo de dato que pertenece a JS, en el cual se almacena una coleccion de elementos de manera ordenada.
//  Los arrays se pueden manipular mediante metodos especificos.
//  Los elementos de un array se contabilizan como indices empezando por indice 0, por lo cual, el primer elemento del array posee el indice 0.
// Un array posee n cantidad de elementos.
// Se declaran como variables, seguido del signo igual y corchetes. Dentro de cada corchete vive un elemento con un tipo de dato.
 */
let arreglo1 = []; //Array vacio
console.log(`Array vacio ${arreglo1}`);
//Los elementos de un array se separan mediante una coma
let cars = ["Volkswagen","BMW","Mazda","Kia"]; //Array String
//Longitud e indice son diferentes. La longitud (length) es el numero de elementos y el indice corresponde a cada elemento a partir del 0
console.log(cars);
console.log(typeof(cars));

let salariesMxn = [15000, 12000, 18000, 25000, 28000, 10000, 18500, 10200, 20500, 15300, 17000, 17200];
console.log(salariesMxn.length);


/**
 * Objetos. 
 *  Los objetos son tipos de datos en JS, con una estructura definida que nos permite almacenar informacion mediante llaves (claves) y valores.
 * Su sintaxis es la siguiente
    const object = {
        clave1: valor1 (dato1),
        clave2: valor2 (dato2)
    }
* Los objetos pueden almacenar diferentes tipos de valores.
 */

const employee ={
    firstName: "Rey",
    lastName: "Martinez",
    age: 29,
    country: "México"
}

console.log(employee);
//mostrando mi array como tala
console.table(cars);
//mostrando mi objeto como tabla
console.table(employee);