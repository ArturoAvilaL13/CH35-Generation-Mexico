package operadoresLogicos;

public class EjercicioDeOperadores {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		/*&& operador And  devuelve true si ambas expresiones son verdaderas 
		 || operador or devuelve true si almenos una de las dos condiciones se cumple
		 ! operador not si la expresion booleana es flase devuelve true y viceversa */
		int anios = 5;
		
		boolean esInfante = true; 
		
		boolean costoInfante = anios <= 12 && esInfante;
		
		double costoPasaje = 380.50;
		int edad  = 58;
		boolean credenInapam =false; 
		
		boolean descuentoAdultoMayor = edad >= 60 || credenInapam;
		
		System.out.println("Tiene descuento? " + costoPasaje);
		
		//! not 
		
		
		boolean asientosDisponibles = true;
		boolean libres = true;
		boolean asientosConDescuento = !libres;
		
		
		
		System.out.println("Tenemos asientos con descuento " + asientosConDescuento);
	
	
	}

}
