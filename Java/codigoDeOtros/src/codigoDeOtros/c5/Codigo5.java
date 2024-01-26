package codigoDeOtros.c5;

import java.util.Scanner;

public class Codigo5 {// La clase no contaba un un metodo main

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);// refactorizamos s->scan y agregamos el System.in
		// Creamos todas las variables a utilizar en un mismo lado para tener un orden
		int numero = 0;// refactorizamos la variable String ni -> int numero
		int numeroHolder = 0;// refactorizamos la variable c -> numeroHolder
		int afo = 0;
		int noAfo = 0;
		int digito = 0;// No queremos que digito se inicializa cada que el ciclo empieza de nuevo
		System.out.println("Instroduzca un numero");//Solo para dar un formato en la consola cambiamos el print -> println
		numero = Integer.parseInt(scan.nextLine());
		numeroHolder = numero;
		scan.close();
		while (numero > 0) {
			digito = (int) (numero % 10);
			System.out.println("Digito: "+digito);
			if ((digito == 3) || (digito == 7) || (digito == 8) || (digito == 9)) {
				afo++;
			} else {
				noAfo++;
			}
			numero /= 10;// esta condicion debe estar fuera del else, ya que si esta adentro, se creara
							// un bucle infinito en el momento que el if se cumpla
		}
		if (afo > noAfo) {// sacamos este if del while, ya que queremos que se despliegue solo al final
			System.out.println("El " + numeroHolder + " es un número afortunado.");//estaba mal escrito println
		} else {
			System.out.println("El " + numeroHolder + " no es un número afortunado.");
		}
	}
}
