/*
? Ejercicio 1 
 * Elabora un programa que determine si una persona tiene edad
 * suficiente para votar
 * 
 * Debe recibir como parametro la edad
 * 
 * Consideraciones: utilizar la estructura if-else
 */

let edad = document.querySelector("#edad");
let resEdad = document.querySelector("#resEdad");
edad.addEventListener("input",()=>{
    if(Number(edad.value)>=18)
        resEdad.value = "Edad suficiente para votar";
    else
        resEdad.value = "No tienes edad para votar";
});

/* 
 ? Ejercicio 2
 * 
 * Desarrolla un programa que evalue si un numero es divisible
 * entre 7 y 8
 * 
 * Debe recibir como parametro un numero, cual sea
 * 
 * Si se cumple, imprimir verdadero
 * Si no, imprimir falso
 * 
 * 
 * Consideracion - Utilizar la estructura if-else
 * Casos de prueba: 56, 7, 8, 0, 224, 73
 */

let numProbar = document.querySelector("#numProbar");
let resDivisible = document.querySelector("#resDivisible");

numProbar.addEventListener("input",()=>{
    if(numProbar.value%7===0 && numProbar.value%8===0)
        resDivisible.value = "Verdadero";
    else
        resDivisible.value = "Falso";
});

/*
 ? Ejercicio 3
 * 
 * Desarrolla un programa que evalue si un numero es divisible
 * entre 4 o 9
 * 
 * Debe recibir como parametro un numero aleatorio
 * 
 * Si se cumple, imprimir verdadero
 * Si no, imprimir falso
 * 
 * Consideracion - Utilizar la estructura if-else
 */

let numProbar2 = document.querySelector("#numProbar2");
let resDivisible2 = document.querySelector("#resDivisible2");

numProbar2.addEventListener("input",()=>{
    if(numProbar2.value%4===0 || numProbar2.value%9===0)
        resDivisible2.value = "Verdadero";
    else
        resDivisible2.value = "Falso";
});

/* 
 ? Ejercicio 4
 * 
 * Realizar un programa que reciba como parametro una categoria de peliculas
 * 
 * -accion
 * -drama
 * -comedia
 * -romance
 * -suspenso
 * -terror
 * 
 * Segun sea la categoria que se reciba, imprimir una recomendacion de pelicula
 * de acuerdo al parametro recibido
 * 
 * Consideraciones: utilizar la estructura switch
 */

let categoria = document.querySelector("#categorias");
let resCategoria = document.querySelector("#resCategorias");
let respuestas = [
    "Accion: Duro de matar",
    "Drama: Forrest Gump",
    "Comedia: La La Land",
    "Romance: Orgullo y Prejuicio",
    "Suspenso: El Silencio de los Corderos",
    "Terror: El Conjuro ",
    "Otro: Madagascar"
];

categoria.addEventListener("click",()=>{
    categoria.addEventListener("change",()=>{
        switch(Number(categoria.value)){
            case(0):
                resCategoria.value = respuestas[0];
            break;
            case(1):
                resCategoria.value = respuestas[1];
            break;
            case(2):
                resCategoria.value = respuestas[2];
            break;
            case(3):
                resCategoria.value = respuestas[3];
            break;
            case(4):
                resCategoria.value = respuestas[4];
            break;
            case(5):
                resCategoria.value = respuestas[5];
            break;
            case(6):
                resCategoria.value = respuestas[6];
            break;
            default:
                resCategoria.value = "Elije algo";
            break;
        }
    });
});

/*
 ? Ejercicio 5
 * 
 * Crear una interfaz de un cajero ATM
 * 
 * Debe recibirse como parametro alguna de las siguientes opciones
 * 
 * 1. Retirar dinero
 * 2. Transferencia
 * 3. Deposito
 * 4. Pago de servicios
 * 
 * Segun sea la opcion indicada, imprimir en pantalla la accion a realizar
 * Utilizar if/else
 */

let categoriaCajero = document.querySelector("#categoriasCajero");
let resCategoriaCajero = document.querySelector("#rescategoriasCajero");
let respuestasCajero = [
    "Fondos insuficientes :C",
    "Transfiriendo 500 a Steam",
    "Hasta que guardas dinero D:",
    "500 pesitos del internet"
];


categoriaCajero.addEventListener("click",()=>{
    categoriaCajero.addEventListener("change",()=>{
        let numCajero = Number(categoriaCajero.value);
        if(numCajero===0)
            resCategoriaCajero.value = respuestasCajero[0];
        else if(numCajero===1)
            resCategoriaCajero.value = respuestasCajero[1];
        else if(numCajero===2)
            resCategoriaCajero.value = respuestasCajero[2];
        else if(numCajero===3)
            resCategoriaCajero.value = respuestasCajero[3];
        else    
            resCategoriaCajero.value = "Elije algo";
    });
});

/*
 ? Ejercicio 6
 * 
 * Escribir en codigo un programa conversor de divisas
 * 
 * Debe recibir como parametro una cantidad en pesos mexicanos y
 * Segun sea la opcion que se indique, realizar la conversion correspondiente
 * 
 * 1. A dolares estadounidenses
 * 2. A euros 
 * 3. A yenes japoneses
 * 4. A libra esterlina
 * 5. A franco suizo
 * 
 * Consideracion: estructura switch
 * 
 */

let cantidad = document.querySelector("#cantidad");
let categoriaCantidad = document.querySelector("#categoriaCantidad");
let cambio = document.querySelector("#cambio");
let multiplicar = [
    .058,
    .054,
    8.410,
    .046,
    .041
];
function cambioDivisas(n,cantidad){
    switch (n) {
        case 0:
            cambio.value = (cantidad*multiplicar[n]).toFixed(3);
            break;
        case 1:
            cambio.value = (cantidad*multiplicar[n]).toFixed(3);
            break;
        case 2:
            cambio.value = (cantidad*multiplicar[n]).toFixed(3);
            break;
        case 3:
            cambio.value = (cantidad*multiplicar[n]).toFixed(3);
            break;
        case 4:
            cambio.value = (cantidad*multiplicar[n]).toFixed(3);
            break;
        default:
            cambio.value = 0;
            break;
    }
}

cantidad.addEventListener("input",()=>{
    cambioDivisas(Number(categoriaCantidad.value),Number(cantidad.value));
});

categoriaCantidad.addEventListener("click",()=>{
    categoriaCantidad.addEventListener("change",()=>{
        cambioDivisas(Number(categoriaCantidad.value),Number(cantidad.value));
    });
});