package tiposDeDatosYVariables;

public class EjerciciosJava {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		System.out.println("Hola mundo");
		/*
		 * 
		 * */
		byte edad = 12;
		System.out.println("edad: "+edad);
		
		short usuariosNuevos=200;//sirve para representar  un numero entero 16 bits()
		System.out.println("usuariosNuevos "+usuariosNuevos);
		
		int usuariosTotales = 876;
		System.out.println("Usuarios totales "+usuariosTotales);
		
		long usuariosPremium = 123412;
		System.out.println("Usuarios premium "+usuariosPremium);
		
		float altura = 1.56f;// a las variables float se debe coloar una f al numero cuanod se declara
		System.out.println("Usuarios premium "+altura);

		double peso = 13411234;
		System.out.println("Peso "+peso);
		
		String costoBoleto= "500"; // Es una clase para tener cadenas de texto
		String zonaBoleto = "52";
		System.out.println("Usuarix "+costoBoleto);
		System.out.println("Zona a la que pertenece "+zonaBoleto);
		
		char section = 'f';//Sirve para representar valores con un solo caracter
		
		System.out.println("Seccion "+section);
		
		boolean clienteFrecuente = true; //Sirve para obtener true o false utilizando condicionales
			
		System.out.println("Es un cliente frecuente "+clienteFrecuente);
		
		
		//Conversion de tipos
		
		//Casteo a entero
				
		int pesoCambio = (int) peso;
		
		//Casteo entero
		long pesoCambio1 = (long) peso;
		
		System.out.println("double "+peso);
		System.out.println("int "+pesoCambio);
		System.out.println("long "+pesoCambio1);
		
		int nombreCambio = Integer.parseInt(costoBoleto);
		double zonaCambio = Double.parseDouble(zonaBoleto);
		
		System.out.println("Zona del usuarix segun su boleto "+(nombreCambio * zonaCambio));
		
		/*
		 Operadores aritmeticos 
		+ suma
		- resta
		* multiplicacion
		/ division
		 % Residuo*/
		
		
		/*Operadores de compararcion 
		 == compara si un opernado es igual a otro 
		 != compara si es diferente 
		 <  mayor que 
		 >  menor que 
		 <= mayor o igual que 
		 >= menor o igual que 
		 */

		double precioEntrada = 75.5;
		double precioPalomitas = 90.5;
		double precioBebida = 35.5;
		int capacidadTotal = 500;
		
		int personasDentro = 342;
		if(personasDentro>capacidadTotal) {
			System.out.println("Cine lleno");
		}
		
		double totalEntradas = personasDentro * precioEntrada;
		double totalPalomitas = personasDentro * precioPalomitas;
		double totalBebidas = personasDentro * precioBebida;
		
		System.out.print("Total de personas: "+personasDentro+"\n"
				+ "Total de entradas: "+totalEntradas+"\n"
				+ "Total de palomitas: "+totalPalomitas+"\n"
				+ "Total de bebidas: "+totalBebidas+"\n");
	}

}
