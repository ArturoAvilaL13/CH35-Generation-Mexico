package loops;

import java.util.Scanner;

public class WhileLoop {

	public static void main(String[] args) {
		/*
		 * while ejecuta un bloque de codigo hasta que se cumpla una condicion dada
		 * 
		 * While (expresion){
		 * 	bloque de codigo a ejecutar
		 * 	(contador-iterador)
		 * }
		 */
		
		int cuenta = 0;
		while (cuenta < 10) {
			cuenta ++;
			System.out.println("La cuenta es de: " + cuenta);
		}
		
		/*
		 * Crear un programa que solicite al usuario un numero, dicho numero sera tomado como el numero final de una cuenta. Dicha cuenta inicia en 1, debe mostrar en consola la cuenta del 1 hasta el numero proporcionado 
		 * 1. importar un scanner e implementarlo
		 * 2.un mensaje para darle contexto al usuario
		 * 3. almacenar el numero del usuario en una variable
		 * 4. guardar en variable el numero que iniciara la cuenta
		 * 5. implementar un ciclo while
		 * 6. mostrar por consola el resultado
		 */
	//1
	Scanner sc = new Scanner(System.in);
	//2
	System.out.println("Escribe un numero que servira como numero final de una cuenta");
	//3
	int nFinal = sc.nextInt();
	//4
	int nInicial = 1;
	//5
	while (nInicial <= nFinal) {
		System.out.println("La cuenta va en: " + nInicial);
		nInicial++;
	}
	
	sc.close();
		
	

	}

}
