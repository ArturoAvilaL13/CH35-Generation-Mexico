/*
*Ejercicios
*Ejercicio de Arrays:
Descripción:
Supongamos que tienes una lista de temperaturas diarias en grados Celsius para una semana. Tienes que convertir estas temperaturas a grados Fahrenheit y mostrar los resultados.
* Temperaturas diarias en grados Celsius para una semana
const temperaturasCelsius = [22, 25, 19, 30, 27, 21, 18];
*Instrucciones:

Crea una función llamada celsiusToFahrenheit que tome una temperatura en grados Celsius y la convierta a grados Fahrenheit usando la fórmula: F = C * (9/5) + 32.
Utiliza un bucle para recorrer el array temperaturasCelsius, llama a la función celsiusToFahrenheit para cada temperatura y almacena los resultados en un nuevo array llamado temperaturasFahrenheit.
Muestra ambos arrays (temperaturasCelsius y temperaturasFahrenheit) en la consola.
*/
console.log("Ejercicio 1");
const temperaturasCelsius = [22, 25, 19, 30, 27, 21, 18];
const temperaturasFahrenheit = [];

const celsiusToFahrenheit = (celcius) => celcius*(9/5)+32 ;

for(let i=0;i<temperaturasCelsius.length;i++){
    temperaturasFahrenheit[i] = celsiusToFahrenheit(temperaturasCelsius[i]);
    console.log(`Temperatura en Celcius ${temperaturasCelsius[i]}
    Temperatura en Fahrenheit ${temperaturasFahrenheit[i].toFixed(3)}`);
}

console.log("------------------------------------------");
/*
*Ejercicios de Bucles:
*Descripción:
Escribe un programa que sume los primeros 10 números naturales (1 al 10) e imprima el resultado.

*Instrucciones:

Utiliza un bucle (for o while) para sumar los números del 1 al 10.
Imprime el resultado de la suma en la consola.
Sugerencia:
Puedes usar una variable llamada suma para acumular la suma mientras recorres los números.
*/
console.log("Ejercicio 2");
let suma=0;
for(let i=1;i<=10;i++){
    suma+=i;
}
console.log(`suma = ${suma}`);
console.log("------------------------------------------");
/*
*Ejercicio : Números Primos
Escribe un programa que determine si un número ingresado por el usuario es primo o no. Un número primo es aquel que solo es divisible por 1 y por sí mismo. Puedes utilizar un bucle for para verificar si el número tiene algún divisor además de 1 y él mismo.*/

let numPrimo = document.getElementById("numPrimo");
let resPrimo = document.getElementById("resPrimo");
let bandera;
numPrimo.addEventListener("input",() => {
    let num = Number(numPrimo.value);
    bandera=0;
    if(numPrimo.value===""){
        resPrimo.value = " ";
    }else if((num == 0 || num === 1)){
        resPrimo.value = "Es primo";
    }else{
        for(let i=2;i<num;i++){
            if(num%i === 0){
                resPrimo.value = "No es primo";
                bandera=1;
                break;
            }
        }
        if(bandera===0){
            resPrimo.value = "Es primo";
        }

    } 
});


/*
*Ejercicio : Secuencia de Fibonacci
Escribe un programa que genere los primeros 10 términos de la secuencia de Fibonacci. La secuencia de Fibonacci comienza con 0 y 1, y cada término subsiguiente es la suma de los dos anteriores (0, 1, 1, 2, 3, 5, 8, 13, 21, ...).

Estos ejercicios implican un poco más de lógica y son ideales para practicar conceptos más avanzados. ¡Espero que disfrutes resolviéndolos!
*/
console.log("Ejercicio 4");
let numerosSumar = [];
let cantidad = 10;

for(let i=0;i<10;i++){
    if(i===0 || i===1){
        numerosSumar[i] = i;
        console.log(`N.: ${i}`);
    }else{
        numerosSumar[i] = numerosSumar[i-1]+numerosSumar[i-2];
        console.log(`N.: ${numerosSumar[i]}`);
    }
}
