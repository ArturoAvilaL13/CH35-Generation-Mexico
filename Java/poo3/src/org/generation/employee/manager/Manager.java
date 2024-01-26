package org.generation.employee.manager;

import org.generation.employee.Employee; //Se importa la clase super

/*
 * La clase manager sirve como subclase (clase hija), por lo tanto debe extender (heredar) desde lal superclase (clase employee)para poder acceder a los atributos y metodos de la superclase
 */
public class Manager extends Employee { //se agrega extends y el nombre de la superclase
	
	//1.Atributos
	private int antiguedad;
	private double incremento;
	
	//2.Constructor (click derecho, source, generate constuctor from fields
	public Manager(String nombreCompleto, int id, double salario, String puesto, int antiguedad) { //hereda los parametros de employee
		super(nombreCompleto, id, salario, puesto);
		this.antiguedad = antiguedad;
	}
	
	
	//3.Getters y Setters
	
	public int getAntiguedad() {
		return antiguedad;
	}

	public void setAntiguedad(int antiguedad) {
		this.antiguedad = antiguedad;
	}

	public double getIncremento() {
		return incremento;
	}

	public void setIncremento(double incremento) {
		this.incremento = incremento;
	}

	public double getSalarioBase() {
		return salarioBase;
	}

	public void setSalarioBase(double salarioBase) {
		this.salarioBase = salarioBase;
	}
	
	//4.Metodo del manager 
		public void organizarReunion() {
			System.out.println("El manager " + this.getNombreCompleto() + " covoca a una reunion");
		}
		
		//invocar el metodo de la superclase que guarda el salario base de cualquier employee
		double salarioBase = super.getSalario();
		
		//Overriding (anulación de métodos)
		/* 
		 * En la empresa los Managers reciben un incremento salarial de $1000 al cumplir su primer año de antigüedad.
		 * Después de recibir su primer incremento, cada año reciben un incremento de $500
		 */
		
		
		/*
		 * Verificar la antiguedad. Si es mayor o igual a 1 es true, si no, es false
		 * Crear método para verificar la antigüedad y calcular el incremento salarial 
		 */
		public void calcularIncremento() {
			if (this.antiguedad >= 1) {
				//Operación matemática para determinar el incremento con base en la antigüedad
				double incrementoTotal = 1000 + (this.antiguedad - 1) * 500;
				this.setIncremento(incrementoTotal);
			} else {
				this.setIncremento(0);
				System.out.println("No hay incremento");
			}
		}
		
		
		//Metodo para calcular el salario con incremento, siempre que se cumpla la condicion
		
		public void calcularSalario() {
			
			calcularIncremento(); //invoco la funcion dentro de calcularSalario
			
			double salarioManager = salarioBase + this.getIncremento(); //this.incremento()
			System.out.println("El salario del manager " + this.getNombreCompleto() + " es de $" + salarioManager);
		}
		
		
		
		//5. toString. Para generar el toString y mandar a llamar los atributos de la superclase, debo seleccionar los getters de los atributos heredados. Después, puedo modificar el return según mi conveniencia
		@Override
		public String toString() {
			return "Manager [antiguedad=" + antiguedad + ", incremento=" + incremento + ", nombre="
					+ getNombreCompleto() + ", id=" + getId() + ", salario=" + getSalario() + ", puesto="
					+ getPuesto() + "]";
		}
	
	

}
