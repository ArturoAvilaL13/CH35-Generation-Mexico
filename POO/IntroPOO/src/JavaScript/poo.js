/*
 ? Paradigmas de programacion
 * Programacion imperativa: Se basa en instrucciones detalladas ejecutando un flujo o una secuencia determinada
 * Programacion basada en eventos: Se basa en la gestion y respuesta de eventos
 * Programacion declarativa: explicar lo que queremos obtener
 * Programacion orientada a objetos: Toma cierta informacion  o estructura del mundo real (objetos)  para poder explicar ciertas cosas, como sus caracteristicas (propiedades o atributos) y sus comportamientos o acciones (metodos).
 */

//* Clases: Plantillas para crear objetos. Nos ayudan a definir un tipo de objeto y crear instancias de este tipo de objeto.

class persona {
  nombre = "";
  edad = "";
  apellido = "";
  email = "";
  telefono = "";

  //objetos
  //el contructor es una funcion especial, cuya finalidad es la de construir o instanciar objetos
  //para inicializar un objeto es necesario definir  un constructor que tomaran los atributos
  // clases = molde objeto = gomita contructor=chef atributos= ingredientes metodos= comportamintos

  constructor(nombre, apellido, edad, email, telefono) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.email = email;
    this.telefono = telefono;
  }

  comer() {
    console.log("Bon apetit");
  } //método comer

  bailar() {
    console.log("Dale hasta el suelo");
  } //método bailar

  mostrarInfo() {
    // let nombre = "si soy";
    // console.log("Nombre: " + " " + nombre + " " + this.nombre);
    console.log("Nombre: " + this.nombre);
    console.log("Apellido: " + this.apellido);
    console.log("Edad: " + this.edad);
    console.log("Email: " + this.email);
    console.log("Teléfono: " + this.telefono);
  }
}

let usuario1 = new persona("fer", "Ram", "30", "holi@holi", "324234");
let usuario2 = new persona("user1", "userAp1", "12", "user1@holi", "55667791");
let usuario3 = new persona("user2", "userAp2", "13", "user2@holi", "56667792");
let usuario4 = new persona("user3", "userAp3", "14", "user3@holi", "57667793");
let usuario5 = new persona("user4", "userAp4", "15", "user4@holi", "58667794");

console.log(usuario1);
usuario2.mostrarInfo();
usuario3.comer();
usuario4.bailar();
console.log(usuario5.nombre + " " + usuario5.telefono);

//* Pilares de la programacion orientada a objetos
//~ Herencia (extends clase)
//~ Polimorfismo
//~ Encapsulamiento
//~ Abtraccion

//* Herencia nos permite heredar a clases inferiores para poder optimizar el programa

class arrendador extends persona {
  capacidad = 0;
  costo = "";
  nombreLugar = "";
  constructor(
    nombre,
    apellido,
    edad,
    email,
    telefono,
    capacidad,
    direccion,
    nombreLugar
  ) {
    super(nombre, apellido, edad, email, telefono);
    this.capacidad = capacidad;
    this.direccion = direccion;
    this.nombreLugar = nombreLugar;
  }
  mostrarInfo() {
    console.log("Capacidad " + this.capacidad);
    console.log("costo " + this.costo);
    console.log("nombreLugar " + this.nombreLugar);
  }
}

let arrendador1 = new arrendador(
  "nombre1",
  "apellido1",
  "edad1",
  "email1",
  "telefono1",
  3,
  "33",
  "arrendaro3Lugar"
);
console.log(`nombre: ${arrendador1.nombre}
lugar: ${arrendador1.nombreLugar}
`);

class Animal {
  sonido() {
    console.log("Hace un sonido genérico");
  }
}

class Perro extends Animal {
  sonido() {
    console.log("Guau guau");
  }
}

class Gato extends Animal {
  sonido() {
    console.log("Miau");
  }
}

const perro = new Perro();
const gato = new Gato();

perro.sonido();
gato.sonido();

//* Polimorfismo tener objetos de diferentes tipos que pueden ser manipulados en comun

class producto {
  marca = "";
  precio = 0;
  constructor(marca, precio) {
    this.marca = marca;
    this.precio = precio;
  }
  mostrarDescripcion() {
    console.log(`marca: ${this.marca} 
    precio: ${this.precio}
    `);
  }
}
const producto1 = new producto("coca", 3);
producto1.mostrarDescripcion();

//* Encapsulamiento: ocultar la implementacion de un bojeto y solo mostrar los datos necesarios
class Usuario {
  #contrasena;
  constructor(contrasena) {
    this.#contrasena = contrasena;
  }
  verificarContrasena(contrasena) {
    return this.#contrasena === contrasena;
  }
}

//* Abstraccion no es nada mas que traer objetos del mundo real y poder aplicarlos a la programacion mediante clases, metodos, constructores y objetos
//* Los objetos de tipo Json en un formato de intercambio de datos ligero, accesible, estructurado, manipulable (DOM) y que nos brindan una mejor comunicacion entre el cliente y el servidor. Esto gracias a que son mas flexibles y generalmente se ejecutan con fetch
let objetoJson = {
  "nombre": "Juanin",
  "apellido": "Juan Harry",
  "edad": 31,
  "email": "juanin@gnail.com",
  "telefono": "5574980693"

}

console.log(objetoJson);

let objetoLiteral = {
  nombre: "Juanin",
  apellido: "Juan Harry",
  edad: 31,
  email: "juanin@gnail.com",
  telefono: "5574980693"
};

console.log(objetoLiteral);

/*
 ? Principios solic
 ~ 1- Principio de responsabilidad unica (Single Responsability Principle SRP): Una clase debe tener asignada una tarea o responsabilidad especifica y esta no deberia de cambiar
 ~ 2- Principio abierto/cerrado (open/close principle OCP): Una clase puede estar abierta a extensiones y agregar nuevas funcionalidades, pero sin generar cambios en la misma.
 ~ 3- Principio de sustitucion de Liskov: Una clase jijo puede sustituir objetos de una clase padre
 ~ 4- Principio de segregacion de interfaces: Delimitar los metodos que necesito y dejar fuera los innecesarios
 ~ 5- Principio de inversion de dependencias
  & 5.1 Módulos de alto nivel no deben depender de módulos de bajo nivel. Ambos deben depender de abstracciones.
  & 5.2 Abstracciones no deben depender de detalles. Los detalles deben depender de abstracciones.
*/



