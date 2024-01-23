/*
Arturo Avila Lopez
5
*/
// var formulario = document.querySelector("#form");

// formulario.onsubmit = function (e) {
//   e.prevent();
//   console.log("prevent?");
//   var n = formulario.elements[0];
//   var e = formulario.elements[1];
//   var na = formulario.elements[2];

//   var nombre = n.value;
//   var edad = e.value;

//   var i = na.selectedIndex;
//   var nacionalidad = na.options[i].value;
//   console.log(nombre, edad);
//   console.log(nacionalidad);

//   if (nombre.length === 0) {
//     n.classList.add("error");
//   }
//   if (edad < 18 || edad > 120) {
//     e.classList.add("error");
//   }

//   if (nombre.length > 0 && edad > 18 && edad < 120) {
//     agregarInvitado(nombre, edad, nacionalidad);
//   }
// };

// var botonBorrar = document.createElement("button");
// botonBorrar.textContent = "Eliminar invitado";
// botonBorrar.id = "boton-borrar";
// var corteLinea = document.createElement("br");
// document.body.appendChild(corteLinea);
// document.body.appendChild(botonBorrar);

// function agregarInvitado(nombre, edad, nacionalidad) {
//   if (nacionalidad === "ar") {
//     nacionalidad = "Argentina";
//   } else if (nacionalidad === "mx") {
//     nacionalidad = "Mexicana";
//   } else if (nacionalidad === "vnzl") {
//     nacionalidad = "Venezolana";
//   } else if (nacionalidad === "per") {
//     nacionalidad = "Peruana";
//   }

//   var lista = document.getElementById("lista-de-invitados");

//   var elementoLista = document.createElement("div");
//   elementoLista.classList.added("elemento-lista");
//   lista.appendChild(elementoLista);

//   var spanNombre = document.createElement("span");
//   var inputNombre = document.createElement("input");
//   var espacio = document.createElement("br");
//   spanNombre.textContent = "Nombre: ";
//   inputNombre.value = nombre;
//   elementoLista.appendChild(spanNombre);
//   elementoLista.appendChild(inputNombre);
//   elementoLista.appendChild(espacio);

//   function crearElemento(descripcion, valor) {
//     var spanNombre = document.createElement("span");
//     var inputNombre = document.createElement("input");
//     var espacio = document.createElement("br");
//     spanNombre.textContent = descripcion + ": ";
//     inputNombre.value = valor;
//     elementoLista.appendChild(spanNombre);
//     elementoLista.appendChild(inputNombre);
//     elementoLista.appendChild(espacio);
//   }

//   crearElemento("Nombre", nombre);
//   crearElemento("Edad", edad);
//   crearElemento("Nacionalidad", nacionalidad);

//   var botonBorrar = document.createElement("button");
//   botonBorrar.textContent = "Eliminar invitado";
//   botonBorrar.id = "boton-borrar";
//   var corteLinea = document.createElement("br");
//   elementoLista.appendChild(corteLinea);
//   elementoLista.appendChild(botonBorrar);

//   botonBorrar.onclick = function () {
//     // this.parentNode.style.display = 'none';
//     botonBorrar.parentNode.remove();
//   };
// }

//~ Comenzaremos declarando las variables de los elementos del DOM
const formulario = document.querySelector(".formulario"); //*Formulario
const nameF = document.querySelector("#name");
const ageF = document.querySelector("#age");
const nationalityF = document.querySelector("#nationality");
const lista = document.querySelector("#lista-de-invitados");

//~funcion para el formulario
formulario.onsubmit = function (e) {
  e.preventDefault();

  const nombre = nameF.value;
  const edad = ageF.value;
  const nacionalidad = nationalityF.value;
  if (nombre.length > 0 && edad > 18 && edad < 120) {
    agregarInvitado(nombre, edad, nacionalidad);
  }
};

function agregarInvitado(nombre, edad, nacionalidad) {
  if (nacionalidad === "ar") {
    nacionalidad = "Argentina";
  } else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana";
  } else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana";
  } else if (nacionalidad === "per") {
    nacionalidad = "Peruana";
  }
  crearElemento(nombre, edad, nacionalidad);
}

function crearElemento(nombre, edad, nacionalidad) {
  //*Div que va a contener nombre, edad nacionalidad
  var elementoLista = document.createElement("div");
  elementoLista.classList.add("elemento-lista");
  lista.appendChild(elementoLista);

  creaContenido(elementoLista, "Nombre", nombre);
  creaContenido(elementoLista, "Edad", edad);
  creaContenido(elementoLista, "Nacionalidad", nacionalidad);

  var botonBorrar = document.createElement("button");
  botonBorrar.textContent = "Eliminar invitado";
  botonBorrar.id = "boton-borrar";
  var corteLinea = document.createElement("br");
  elementoLista.appendChild(corteLinea);
  elementoLista.appendChild(botonBorrar);
  botonBorrar.onclick = function () {
    // this.parentNode.style.display = 'none';
    botonBorrar.parentNode.remove();
  };
}

function creaContenido(elementoLista, etiqueta, valor) {
  const span = document.createElement("span");
  const input = document.createElement("input");
  const espacio = document.createElement("br");
  span.textContent = `${etiqueta}: `;
  input.value = valor;
  elementoLista.appendChild(span);
  elementoLista.appendChild(input);
  elementoLista.appendChild(espacio);
}
