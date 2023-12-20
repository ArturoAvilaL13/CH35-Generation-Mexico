//* Programacion sincrona
function two() {
  console.log("dos");
}
function one() {
  console.log("uno");
  two();
  console.log("tres");
}
one();

//* Programacion asincrona
console.log("********************************");

/*
 ? Programacion asincrona
 * SetTimeout que recibe una funcion anonima y establece un tiempo (donde 1000ms=1s) de ejecucion para cumplir con la condicion de asincronismo 
 */

const twoAsync = () => {
  setTimeout(() => {
    console.log("dos Async");
  }, 5000);
};

const oneAsync = () => {
  setTimeout(function () {
    console.log("uno Async");
  }, 2000);

  twoAsync();
  console.log("tres Async");
};

oneAsync();

/*
 ? Trabajando con promesas mediante fetch API 
 */

const url = "https://jsonplaceholder.typicode.com/users";
fetch(url)
  //* Se se cumple la promesa, vamos a traer los datos de la API y se convertira en tipo json para poder mostralos en consola
  .then((data) => data.json())
  .then((data) => {
    console.log(data); //* Mostrando en consola todos los usuarios de la API
    console.log(data[0].name); //* Mostrando en consola el usuario con el indice 0 y trayendo solamente su nombre
  })
  .catch((error) => console.error("Algo malio sal: ", error));

//* Usando fetch para mostrar en navegador
const botonInfo = document.querySelector("#btn-mensaje");
const info = document.querySelector("#mensaje");
//* Variable para guardar la informaicon que se va a traer desde la API: Debe de ser de tipo null
let post = null;
//* Consumiendo API con fetch (promesas)
botonInfo.addEventListener("click", () => {
  fetch("https://jsonplaceholder.typicode.com/users/6")
    .then((response) => response.json())
    .then((response) => {
      post = response;
      //* Guardo los datos de response en la variable de tipo null, para modificar el dato
      //* Mandamos a llamar la variable desde la funcion
      mostrarDatos(post);
    })
    .catch((error) => console.error("algo malio sal", error));
});

//* Funcion que me permita manipular la variable de tipo null
const mostrarDatos = (post) => {
  //*Creando nodos (elementos) mediante DOM Manipulation
  const name = document.createElement("h2");
  const userName = document.createElement("h3");
  const email = document.createElement("p");
  const phone = document.createElement("p");
  //*Ponerlos en el HTML (innerHTML)
  name.innerHTML = post.name;
  userName.innerHTML = post.username;
  email.innerHTML = post.email;
  phone.innerHTML = post.phone;
  //*Hacer que aparezcan en el navegador
  info.appendChild(name);
  info.appendChild(userName);
  info.appendChild(email);
  info.appendChild(phone);
};

//* Usando fetch para mostrar en el navegador (mostrar productos)
const btnStore = document.getElementById("store");
const infoStore = document.getElementById("storeInfo");
let dataStore = null;
btnStore.addEventListener("click", () => {
  fetch("https://fakestoreapi.com/products")
    .then((data) => data.json())
    .then((data) => {
      dataStore = data;
      desplegarStore(dataStore);
    })
    .catch((error) => console.log("algo malio sal", error));
});

const desplegarStore = (data) => {
  data.map((data) => {
    const title = document.createElement("h3");
    const price = document.createElement("h4");
    const description = document.createElement("p");
    const categoria = document.createElement("p");
    const separador = document.createElement("hr");
    const img = document.createElement("img");

    title.innerHTML = data.title;
    price.innerHTML = "$" + data.price;
    description.innerHTML = data.description;
    categoria.innerHTML = data.category;
    img.src = data.image;
    img.style.width = "80px";

    infoStore.appendChild(img);
    infoStore.appendChild(title);
    infoStore.appendChild(price);
    infoStore.appendChild(description);
    infoStore.appendChild(categoria);
    infoStore.appendChild(separador);
  });
};

//*Metodo POST utilizando fetch
fetch("https://jsonplaceholder.typicode.com/posts", {
  //* Indicar que es un metodo de tipo POST
  method: "POST",
  //*Creo el body de mi nuevo objeto, siguiendo las mismas llamves de la API existente
  /*
     ~ userID
     ~ title
     ~ body 
    */
  body: JSON.stringify({
    userId: 1986,
    title: "Sueñan los androides con ovejas electricas?",
    body: "Author: Phillipe K. Dick",
  }),
  //* Definir headers
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((error) => console.error("algo malio sal", error));

/*
 ? Programacion asincrona (promise)
 * Funcion flecha de tipo async-await
 * Inidico que es una funcion asincrona con la palabra reservada async antes de los parametros
*/

const getUser = async () => {
  //* Para que se cumpla la promesa, no utilizamos then, sino que usamos try.
  //* Para errores, se sigue utilizando catch
  try {
    //*Retardo para que se ejecute de manera asincrona. Tengo que crear unanueva promesa, que reciba un setTimeout
    await new Promise((resolve) => setTimeout(resolve, 3000));
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/4"
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error inexplicable", error);
  }
};

getUser();

/*
 ? Local Storage
 * Nos permite crear, modificar, eliminar, guardar objetos de javaScript de manera local (en el equipo) 
 ~ 1. Crear un objeto de JS con su llaves y valores
 ~ 2. Convertir el objeto creado a notacion JSON y almacenarlo en el localStorage
 ~ 3. Traer el objeto desde el localStorage
 */

//~ .1
const user = {
  id: 1,
  name: "Daniel",
  apellido: "Maldonado",
  email: "danieldlcm@idr.com",
  posicion: "instructor",
  empresa: "Generation",
};
//~ 2.
localStorage.setItem("usuario", JSON.stringify(user));
//~ 3.
const users = JSON.parse(localStorage.getItem("usuario"));
console.log(user);
