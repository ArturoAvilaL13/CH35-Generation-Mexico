package codigoDeOtros.c6;

import java.util.Scanner;

public class CodigoOtros6 {// Creamos el metodo main

	public static void main(String[] args) {
		// movemos nuestras variables al inicio para un mayor control
		int[] numeros = new int[20];// mal declarada, se debe utilizar la palabra reservada new, refactorizamos n ->
									// numeros
		int opcion = 0;
		int multiplo = 0;
		Scanner scan = new Scanner(System.in);

		// Colocamos cuando pedimos la opcion primero en nuestro programa
		System.out.println("\n¿Qué números quiere resaltar? ");// .println, falto una n
		System.out.print("(1 – los múltiplos de 5, 2 – los múltiplos de 7): ");
		opcion = Integer.parseInt(scan.nextLine());// Falto cerrar un parentesis, al querer leer lo que se escribe en
													// consola no se puede usar console() ya que este metodo devuelve
													// una valor nulo, por lo que utilizaremos un Scanner para leer el
													// valor que ingrese el usuario
		// Continuamos con nuestra condicional del multiplo
		multiplo = (opcion == 1) ? 5 : 7; // el formato esta al reves la forma correcta es tipoVariable nombreVariable =
											// condicion ? opcionVerdadero : opcionFalso;

		GenerarNumerosAleatorios(numeros);// Creamos una funcion para generar numeros aleatorios

		compararMultiplos(numeros, multiplo);// Creamos un metodo para comparar los multiplos que reciben como
												// parametros un array de tipo int y un int
	}

	private static void compararMultiplos(int[] numeros, int multiplo) {
		for (int numero : numeros) {// estamos trabajando con un tipo int no char, en java se utiliza for() en lugar
									// de foreach(), la distincion se hace en los argumentos que se le colocan al
									// for, refactorizamos e->numero
			if (numero % multiplo == 0) {
				System.out.print("[" + numero + "] ");
			} else {// sacamos el else de dentro del if
				System.out.print(numero + " ");// queremos mostar un mensaje en la terminar, por lo que es 'out' no 'in'
			}
		}
	}

	private static void GenerarNumerosAleatorios(int[] numeros) {
		for (int i = 0; i < numeros.length; i++) {// la forma de incrementar el valor a una variables es utiliando ++,
													// quitamos el numero fijo de la condicion del if, por uno que se
													// adecue al tamaño del parametro que recibe
			numeros[i] = (int) (Math.random() * 381) + 20;
			System.out.print(numeros[i] + " ");// System.out.print, falto coloar el out
		}
		System.out.println();// Agregamos un salto de linea vacio, para dar una mejor vicibilidad en consola
	}

}
