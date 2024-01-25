package org.generation.employee;

public class EmployeeMain {
	public static void main(String[]args) {
		Employee Daniel = new Employee("Daniel", "Maldonado", 7836, 8590.33d, "Instructor");
		Employee Abigail = new Employee("Abigail", "Martinez", 7840, 19590.33d, "Desarrolladora front-end");
		Employee Arturo = new Employee("Arturo", "Avila", 7842, 15000d, "Desarrollador back-end");
		
		System.out.println(Daniel);
		System.out.println(Abigail);
		System.out.println(Arturo);
		
		//Invocando metodos definidos previamente (trabajar, calcularsalario)
		Daniel.infoGneral();
		Arturo.calcularSalario();
		Abigail.capacitarse();
		
		//utilizar informacion especifica de cada objeto mediante sus propiedades
		System.out.println(Daniel.getNombre()+" "+Daniel.getApellido()+" ocupa el puesto de "+Daniel.getPuesto());
		System.out.println(Abigail.getPuesto()+" gana $"+ Abigail.getSalario()+" pesos.");
		
	}
}
