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
  teléfono = "";

  //objetos
  //el contructor es una funcion especial, cuya finalidad es la de construir o instanciar objetos
  //para inicializar un objeto es necesario definir  un constructor que tomaran los atributos
  // clases = molde objeto = gomita contructor=chef atributos= ingredientes metodos= comportamintos

  constructor(nombre, apellido, edad, email, telefono) {}

  comer() {
    console.log("Bon apetit");
  } //método comer

  bailar() {
    console.log("Dale hasta el suelo");
  } //método bailar

  mostrarInfo() {
    console.log("Nombre: ");
    console.log("Apellido: ");
    console.log("Edad: ");
    console.log("Email: ");
    console.log("Teléfono: ");
  }
}
