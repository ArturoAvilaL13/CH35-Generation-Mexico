/*
  ? Arrays
  * Es una variable coleccion o agrupacion de elementos en una misma variable, cada uno de ellos ubicado por la posicion que ocupa el array. 
  * Los arrays se utilizan para almacenar y organizar datos de manera mas eficiente.
 */

//* Crear un array
const numeros = [1,2,3,4,5];
//*Array de cadena de texto
const comida = ["tacos","sopita","pan","jugo"];
console.log(`Array comida 0 ${comida[0]}`);
//*Array mixto
const mixto = [
    "pluma",
    8,
    true,
    {nombre:"Mar",altura:155}
];

console.log(`altura ${mixto[3].altura}`);

//* Array vacio
const lista = [];
console.log(lista);
//* Agregar elementos a mi array vacio
lista[0] = "Leche";
lista[1] = "Carne";
lista[2] = "Quesito";

//* Otra forma de crear arrays
const frutas = new Array("manzana","uvas","mandarinas","platano");
/*
 *Esta sintaxis se puede emplear en Arrays porque son Objects, es una manera de mandar a llamar un nuevo Objeto de tipo Array 
 */
console.log(frutas);

//* Longitud de un array
console.log(frutas.length);

//* Acceder a los elementos del array, acorde a su indice
console.log(frutas[3]);

//* Modificar elementos del array por el indice
const cremeria = ["jamon","salchicha","queso adobera","queso cotija","yogurt"];
cremeria[2] = "Quesillo";
cremeria[4] = "Danonino";

//* Arreglo de arreglos o multidimencionales
console.log("Arreglo de arreglos");

const estados = ["estado0","estado1","estado2","estado3"];
const comidas = ["comidas0","comidas1","comidas2","comidas3"];
const menu = [estados,comidas];

console.log(menu[0][1]);

/*
 *En el primer corchete se establece el indice del array y en el segundo corchete se establece el indice del elemento de dicho array
 */

 console.log(menu[0][1]+" "+menu[1][1]);

 /*
  ?Metodos de Arrays
  * Metodo de cola (queue). 
  * Los metodos de cola implican agregar elementos al final del array y eliminar elementos al inicio del array. Sigue el principio de FIFO (First-in-First-out) lo que significa el primer elemento añadido es el primer eliminado
  * push
  * shift
  * unshift
  * 
  * Metodo de pila (stack). 
  * Implica agregar elementos al final del array y eliminar elemetnos del final del array. sigue el principio Lifo (Last-In-Last-out) que significa el ultimo elemento añadido es el primero en ser eliminado
  * 
  * push
  * pop
  */

  console.log("Metodos de Arrays");

  const ch35 = ["integrante1","integrante2","integrante3"];
  console.log(ch35);
  //*pop() Eliminar el ultimo elemento del array
  let popch35 = ch35.pop();
  console.log(popch35);
  console.log(ch35);

  //*push() Agregar al final del array
  let pushch35 = ch35.push("ingregranteAgregado");
  console.log(ch35);

  //* shift() quitar primero del array
  let shitfaa = ch35.shift();
  console.log(ch35);

  //* shift() quitar primero del array
  let unshitfaa = ch35.shift("unshifsito");
  console.log(ch35);

  //* reverse() cambia el sentido del ordenamiento del array
  let reversech = ch35.reverse();
  console.log(ch35);

  /*
   ? Investigar
   * sort
   *forecha
   * slice
   * splice
   * indexOf
   */