package org.generation.employee.developer;

public class DeveloperMain {

	public static void main(String[] args) {

		Developer Baruch = new Developer("Baruch Moreno", 412858, 18654, "programador", "java");
		System.out.println(Baruch);
		
		Baruch.codear();
		Baruch.calcularSalario();
		
	}

}
