package org.generation.employee;

public class Employee {
	private String nombreCompleto;
	private int id;
	private double salario;
	private String puesto;
	
	//Constructor
	public Employee(String nombreCompleto, int id, double salario, String puesto) {
		super();
		this.nombreCompleto = nombreCompleto;
		this.id = id;
		this.salario = salario;
		this.puesto = puesto;
	}
	
	//metodos
	public void trabajar(){
		System.out.println(this.nombreCompleto + " esta rabajanding con trabajanda");
	}
	
	public void calcularSalario(){
		System.out.println("El salario base del esclav0 " + this.nombreCompleto + " es: $" + this.salario);
	}
	
	public void capacitarse(){
		System.out.println("El esclav0 con el puesto " + this.puesto + " se capacita");
	}
	
	public void infoGeneral(){
		System.out.println("Id: " + this.id + ", Nombre: " + this.nombreCompleto + ", Puesto: " + this.puesto);
	}

	//Getters y Setters
	public String getNombreCompleto() {
		return nombreCompleto;
	}

	public void setNombreCompleto(String nombreCompleto) {
		this.nombreCompleto = nombreCompleto;
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

	
	//toString
	@Override
	public String toString() {
		return "Employee [nombreCompleto=" + nombreCompleto + ", id=" + id + ", salario=" + salario + ", puesto="
				+ puesto + "]";
	}
	
	
	
	
}//class
