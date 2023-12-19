//* Programacion sincrona
function two(){
    console.log("dos");
}
function one(){
    console.log("uno");
    two();
    console.log("tres")
}
one();

//* Programacion asincrona
console.log("********************************");

/*
 ? Programacion asincrona
 * SetTimeout que recibe una funcion anonima y establece un tiempo (donde 1000ms=1s) de ejecucion para cumplir con la condicion de asincronismo 
 */

const twoAsync = () =>{
    setTimeout(() => {
        console.log("dos Async");
    }, 5000);
};

const oneAsync = () =>{
    setTimeout(function(){
        console.log("uno Async");
    }, 2000);
    
    twoAsync();
    console.log("tres Async")
};

oneAsync();

/*
 ? Trabajando con promesas mediante fetch API 
 */

const url = "https://jsonplaceholder.typicode.com/users";
fetch(url)
    //* Se se cumple la promesa, vamos a traer los datos de la API y se convertira en tipo json para poder mostralos en consola
    .then(data => data.json())
    .then(data =>{
        console.log(data);//* Mostrando en consola todos los usuarios de la API
        console.log(data[0].name);//* Mostrando en consola el usuario con el indice 0 y trayendo solamente su nombre
    })
    .catch(error => console.error("Algo malio sal: ", error));