/* 
?===== BUCLES =====
* Iteración. Proceso de repetir una secuencia de instrucciones o acciones en un programa. Es decir, ejecutar un bloque de código muchas veces, basado en una condición o una colección de elementos.

* -- Operadores de incremento (++) y operadores de decremento (--)
*${} se utiliza en el contexto de plantillas de cadena (template literals). Las plantillas de cadena son una forma más conveniente y legible de concatenar cadenas y expresiones en comparación con las cadenas tradicionales con el operador +.
* Los operadores ++ y -- son conocidos como operadores de incremento y decremento respectivamente. 
*- El operador ++ se utiliza para aumentar el valor de una variable en uno.
*- El operador -- se utiliza para disminuir el valor de una variable en uno.
* (i)  : comúnmente utilizada como variable en bucles, es simplemente una convención de nomenclatura y puede ser cualquier nombre válido de variable que elijas. La "i" a menudo se utiliza como abreviatura de "índice" en el contexto de bucles, especialmente en situaciones donde se está iterando sobre índices de arrays o en situaciones similares.
*/

/*
 ? Ciclo for
 * un ciclo for se repite hasta que la condicion se evalue como false. Crea 3 Expresiones iniciales
  * for(expresionInicia;expresionCondicional;expresionActualziacion){
  *     codigo a ejecutar
  * }
  * 1 inicializacion: se debe inicializar con u na variable que sera evaluada en la expresion a comparar.
  * 2 Condicion: es una expresion que debe cumplir la variable inicial (true), si no se cumple (false) el bucle termina
  * 3 Pasos a realizar: son los intervalos que cambiaron la variable inicial mientras esta sea true
 */

 //* Crear un programa para saber cuantos boletos vendemos para una rifa
 for(let i =1; i <=5;i++){
    console.log(`Boleto numero: ${i}`);
 }

 for(let i =5; i > 0;i--){
    console.log(`numero: ${i}`);
 }

 /*
  ? Recorrer arrays con el ciclo for
  * Debemos usar indices del arreglo para poder usar el bucle, en indices desde el 0 hasta n y usaremos la propiedad length
  */
 const users = ["user1","user2","user3","user4","user5","user6","user7","user8","user9","user10"];

 for (let i=0;i<users.length;i++){
    console.log(users[i]);
 }

 /* 
 ? Variaciones del ciclo for
  * -- for...of nos permite recorrer el objeto (array) y devuelve el valor
  * -- for...in nos permite recorrer el objeto (array) y devuelve su posición (indices)
*/

for (let user of users){
    console.log(user+" of");
 }

 //* sumar numeros del 1 al 20
 let suma=0;
for(let i=0;i<=20;i++){
    suma +=i;
}
console.log(suma);
 //* sumar numeros del 1 al 20
for(let i=0;i<=10;i++){
    console.log(i*5);
}

/*
 ? Ciclo while
 * Recorrer un bloque de codigo siempre que una condicion especifica sea verdadera.
  * Sirve para realizar una tarea repetitiva mientras una condicion sea verdad.
 */

 let productos = 5;
 while (productos > 0) {
    console.log(productos);
    productos--;
 }
 while (productos <= 5) {
    console.log(productos);
    productos++;
 }