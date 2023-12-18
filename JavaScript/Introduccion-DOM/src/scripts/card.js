/*
 * Para manipular la informacion de un usuario, necesito crear un perfil mediante un objeto de js 
 */

const user = {
    userName: 'danieldlcm86',
    age: 37,
    email: 'daniel@gmail.com',
    favFilms: ['Interestellar','Se7en','Mindhunter','Mean Girls','Shrek']
};

//* Crear una funcion que me permita ingregar el objeto del perfil en el nodo padre
const createUser = (user) => {
    document.getElementById("username").textContent = user.userName;
    document.getElementById("age").textContent = user.age;
    document.getElementById("email").textContent = user.email;
    //* Mostrando elementos de lista en forma de lista
    //* Para mostar el array en forma de lista utilizamos un ciclo forEach, para recorrer todo el array y traer cada elemento a la lista
    const ul = document.getElementById("fav-films");
    user.favFilms.forEach(element => {
        const li = document.createElement("li");
        li.textContent = element;
        ul.appendChild(li);
    });
    //*Modificando estilos de la ul para quitar viñetas
    ul.style.listStyleType = "none";
    ul.style.padding = "0";
    ul.style.color = "#BF8D30";
    //* mostrando elementos de lista en forma de fila (no nos sirve prque definimos una lista desordenada ul y no un parrafo)
    //* document.getElementById("fav-films").textContent
};
createUser(user);

const inputName = document.getElementById("name");
const inputEmail = document.getElementById("userEmail");
const profileBtn = document.getElementById("btn-main");
const userName = document.getElementById("username");
const email = document.getElementById("email");

profileBtn.addEventListener("click",()=>{
    userName.textContent = inputName.value;
    email.textContent = inputEmail.value;
});

//* Esconder el div container-div

const mostarOcultar = document.getElementById("card-btn");
const containerDiv = document.getElementById("container-div");
containerDiv.style.visibility = "visible";
mostarOcultar.addEventListener("click",()=>{
    if(containerDiv.style.visibility  === "visible")
        containerDiv.style.visibility  = "hidden";
    else
    containerDiv.style.visibility  = "visible";
});