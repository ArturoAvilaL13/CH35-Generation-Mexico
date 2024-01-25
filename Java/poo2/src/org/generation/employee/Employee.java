package org.generation.employee;

public class Employee {
	//1. Atributos o propiedades
	private String nombre;
	private String apellido;
	private int id;
	private double salario;
	private String puesto;
	//2. encapsular Método constructor. Tiene el mismo nombre que la clase, no retorna nada, recibe parámetros (atributos)  y los asigna a variables del constructor (this).
	
	public Employee(String nombre, String apellido, int id, double salario, String puesto){
		this.nombre=nombre;
		this.apellido=apellido;
		this.id=id;
		this.salario=salario;
		this.puesto=puesto;
	}
	
	//3. encapsular public Metodos de comportamiento
	
	public void trabajar() {
		System.out.println("Estoy trabajando");
	}
	
	public void calcularSalario() {
		System.out.println("El salario del empleado " + this.nombre + " " + this.apellido + " es de " + this.salario + " pesos");
	}
	
	public void capacitarse() {
		System.out.println("El trabajador del puesto "+this.puesto+" se capacita.");
	}
	
	public void infoGneral() {
		System.out.println("Id: "+this.id+"Nombre: "+this.nombre+"Apellido: "+this.apellido);
	}
	
	//4. Getters y Setters. Son métodos que nos permiten obtener o enviar información que está protegida por modificadores de acceso y de esta manera interactuar con nuestros objetos. Los getters nos permiten obtener la info y los setters nos permiten enviar la info.
	/*
	 * Estructura de Getter:
	 * 		public tipoDato getNombreVariable () {
	 * 			return nombreVariable;
	 * 		}
	 * 		p.e.
	 * 			public String getNombre () {
	 * 				return nombre;	
	 * 			}
	 * Estructura de Setter:
	 * 		public void setNombreVariable (variable) {
	 * 			this.variable = variable;
	 * 		}
	 * 		p.e.
	 * 			public void setNombre (String nombre) {
	 * 				this.nombre = nombre;	
	 * 			}
	 * Podemos inicializar Getter u Setter dando click derecho
	 */
	
	
	
	//5. Método toString. Es un "Override" que se refiere a la capacidad de proporcionar información específica de una clase en forma de cadena de caracteres. Nos permite imprimir nuestros objetos en formato 'String'.
		//Podemos inicalizar toString dando click derecho > source > generate toString > Fields > Generate

		@Override 
		public String toString() {
			return "Employee ["
					+ "nombre=" + nombre + 
					", apellido=" + apellido + 
					", puesto=" + puesto + 
					", id=" + id
					+ ", salario=" + salario + 
					"]";
		}

		public String getNombre() {
			return nombre;
		}

		public void setNombre(String nombre) {
			this.nombre = nombre;
		}

		public String getApellido() {
			return apellido;
		}

		public void setApellido(String apellido) {
			this.apellido = apellido;
		}

		public int getId() {
			return id;
		}

		public void setId(int id) {
			this.id = id;
		}

		public double getSalario() {
			return salario;
		}

		public void setSalario(double salario) {
			this.salario = salario;
		}

		public String getPuesto() {
			return puesto;
		}

		public void setPuesto(String puesto) {
			this.puesto = puesto;
		}

	
}
