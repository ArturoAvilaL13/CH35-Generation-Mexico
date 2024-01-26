package org.generation.employee.developer;

import org.generation.employee.Employee;

public class Developer extends Employee {
	public String lenguajeProgramacion;
	
	
//Generamos constructor (click derecho, src)
	public Developer(String nombreCompleto, int id, double salario, String puesto, String lenguajeProgramacion) {
		super(nombreCompleto, id, salario, puesto);
		this.lenguajeProgramacion = lenguajeProgramacion;
	}

	
//Generamos getters y setters
	public String getLenguajeProgramacion() {
		return lenguajeProgramacion;
	}

	public void setLenguajeProgramacion(String lenguajeProgramacion) {
		this.lenguajeProgramacion = lenguajeProgramacion;
	}
	
//Metodos
	public void codear() {
		System.out.println("El empleado " + this.getNombreCompleto() + " utiliza el lenguaje de progrmacion " + this.lenguajeProgramacion);
	}
	
//toString modificado para tener un mayro contexto de lo que vamos a imprimir
	@Override
	public String toString() {
		return "Developer [Id=" + getId() + ", NombreCompleto=" + getNombreCompleto() + ", Puesto=" + getPuesto() + ", Salario="	+ getSalario() + ", lenguajeProgramacion=" + lenguajeProgramacion + "]";
	}
	
	
	
}//Class
