package org.generation.exceptions;

public class Division {
	
	private static int dividir(int i, int j) {
		
		return i/j;
	}
	public static void main(String[] args) {
		/*
		 * La clase Exception nos permite manejar cualquier caso excepcional con nuestro código, es el equivalente a los erroes.
		 * Utiliza una estructura de control try-catch que permite manejar las excepciones.
		 *  - try : Envuelve el código que puede generar una excepción y lo evalúa.
		 *  - catch : Contiene el código que se ejecuta cuando se lanza la excepción.
		 *  	Sintaxis:
		 *  		try {
		 *  			//Código protegido
		 *  		} catch (ExceptionName e){
		 *  			//Bloque de excepción
		 *  		}
		 *  - finally : Siempre se ejecuta. Se utiliza para mostrar un mensaje en caso de ser invocado. Podemos prescindir de finally
		 */
		//Exception que se arroja si un numero se divide entre 0
		try {
			int resultado = dividir(10, 0);
			System.out.println("El resultado de la división es " + resultado);
		} catch (ArithmeticException e) {
			System.out.println("\u001B[31mError: no puedes dividir entre 0\u001B[31m");
		} finally {
			System.out.println("\u001B[32mPrograma finalizado\u001B[0m");
		}
	}
}
