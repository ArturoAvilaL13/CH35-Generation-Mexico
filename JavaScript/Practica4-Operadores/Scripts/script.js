/*
 ? Ejercicio 1 
 * Un programas que solicite al usuario dos números y en consola nos va a decir si esos números son iguales o ay alguno que sea mayor que otro
 */

let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let res1 = document.getElementById("res1");

const compara = (num1,num2)=>{
    if(num1 === num2){
        res1.value = num1 + " es igual a " + num2;
    }else if(num1 < num2){
        res1.value = num1 + " es menor a " + num2;
    }else{
        res1.value = num1 + " es mayor a " + num2;
    }
}
num1.addEventListener("input",()=>{
    compara(Number(num1.value),Number(num2.value));
});
num2.addEventListener("input",()=>{
    compara(Number(num1.value),Number(num2.value));
});

 /*
  ? ejercicio 2
  * Un programa que pida al usuarios dos palabras y determine si son iguales o no
  */

let texto1 = document.getElementById("texto1");
let texto2 = document.getElementById("texto2");
let res2 = document.getElementById("res2");

const comparaTexto = (texto1,texto2)=>{
    if(texto1 === texto2){
        res2.value = "Textos iguales";
    }else{
        res2.value = "No son iguales";
    }
}
texto1.addEventListener("input",()=>{
    comparaTexto(texto1.value,texto2.value);
});
texto2.addEventListener("input",()=>{
    comparaTexto(texto1.value,texto2.value);
});