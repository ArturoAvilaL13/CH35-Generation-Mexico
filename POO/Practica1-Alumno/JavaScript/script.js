/**
 * Programa que conste de una clase llamada alumno que tenga como atributos nombre y calificacion. Definir los metodos para incializar sus atributos (constructor), imprimirlos y mostrar un mensaje con el resultado de si la calificacion es aprobatoria o no.
 * Atributos:
 * nombre
 * calificacion
 * 
 * Metodos 
 * imprimirCalificacion
 * evaluacion
 * 
 * la calificacion aprobatoria es de 6
 * if para evaluar la calificacion
 */
class alumno{
    nombre = "";
    calificacion = "";
    constructor(nombre,calificacion){
      this.nombre = nombre;
      this.calificacion = calificacion;
    }
    imprimirCalificacion(){
      console.log("Calificacion: "+this.calificacion);
    }
    evaluacion(){
      const evaluacion = Number(this.calificacion)>5.9 ? "Aprobado":"Reprobado";
      console.log(`El alumno ${this.nombre} esta ${evaluacion} con una calificacion de ${this.calificacion}`);
    }
  }
  
  const alumno1 = new alumno("alumno1",5.9);
  const alumno2 = new alumno("alumno2",6);
  
  alumno1.evaluacion();
  alumno2.evaluacion();