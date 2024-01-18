package loops;

import java.util.Scanner;

public class DoWhileLoop {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		int cuenta = 0;
		do {
			System.out.println(cuenta);
			cuenta++;
		}while(cuenta<=5);
		
		/*
		 * Crear un programa para un cajero bancario
		 * - El programa me mostrará 4 opciones:
		 * 1. Consultar saldo
		 * 2. Ingresar dineros
		 * 3. Retirar dineros
		 * 4. Salir
		 * - Mostrar mensaje de bienvenida al usuario, darle contexto y solicitar que elija una opción (número)
		 * - Mostrar al usuario la opción que eligió y permitir que elija otra opción
		 * - El usuario puede salir del programa escribiendo 4 (salir)
		 */

		System.out.println("Bienvenido al ATM, estas son las opciones: ");

		System.out.println("1.- Consultar saldo");
		System.out.println("2.- Ingresar monto");
		System.out.println("3- Retirar fondos");
		System.out.println("4.- Salir, Favor de tomar tu dinero y tu tarjeta");

		Scanner scr = new Scanner (System.in);
		int opcion;
		do {
			opcion = scr.nextInt();
			switch(opcion) {
			case 1: System.out.println("Consultar saldo");
			break;
			case 2: System.out.println("Ingresar monto");
			break;
			case 3: System.out.println("Retirar fondos");
			break;
			case 4: System.out.println("Salir, Favor de tomar tu dinero y tu tarjeta");
			break;
			default:
				System.out.println("Por favor selecionoe una opcion valida del 1 al 4.");
				break;
			}
		}while(opcion != 4);
		scr.close();
	}
	

}
