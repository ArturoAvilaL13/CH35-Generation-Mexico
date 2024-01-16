package loops;

public class ForLoop {

	public static void main(String[] args) {
		/*
		 * el ciclo for nos proporciona una forma compacta de iterar sobre valores,
		 * for (inicializacion; condicion; contador (incremento/decremento)){
		 * 
		 * bloque de codigo
		 * }
		 */
		
	//For con variable local 
	for (int numero = 0; numero<=10; numero++) {
		System.out.println("Numero es igual a: " + numero);
	}
	
	//For con variable global 
	int contador;
	for (contador =1; contador<=5; contador++) {
		System.out.println("num: " + contador);
	}
	
	//Bucles anidados: bucle dentro de otro bucle
	//Imprimir un triangulo con asteriscos 
	
	int filas = 10;
	for (int i = 0; i < filas; i++) {
		//Bloque de codigo qye va a iterar conn el bucle
		 for(int j=0; j<=i; j++) {
			 System.out.print("*");
		 }
		 System.out.println();
	}

	}//Metodo

} //Clase
