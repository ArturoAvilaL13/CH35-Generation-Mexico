package excercises;

import java.util.ArrayList;
import java.util.Scanner;

public class SistemaEscolar {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		/*
		 * Programa que permite que un usuario agregue nombre y apellido de estudiantes matriculados en una universidad. Posteriomente, muestra la lista de los estudiantes agregados.
		 * -- Requerimientos:
		 * 		> Utilizar ArrayList para guardar a los estudiantes
		 * 		> Scanner para interactuar con el usuario y permitir que agregue estudiantes
		 * 		> Loop para permitir que se agreguen varios estudiantes (do-while)
		 * 		> Opción para salir del loop con la palabra 'Salir' (if-else, try-catch, !=, switch son posibles opciones)
		 * 		> Mostrar lista de estudiantes (for-each) 
		 */
		
		/*
		 * Modificar nuestro programa para permitir salir con las palabras 'Salir' o 'salir'.
		 * Agreguar la opción que permite que el usuario elimine un estudiante después de haberlo agregado y muestre la lista actualizada después de la eliminación
		 */
		
		ArrayList<String> estudiantes = new ArrayList<String>();
		Scanner scan = new Scanner(System.in);
		String res = "";
		int resInt =0;
		System.out.println("Sistema de estudiantes");
		do {
			System.out.print("Escribe 'Salir' para finalizar\n Elija una opcion:\n 1 Agregar Estudiante.\n 2 Eliminar estudiante\n");
			
			res = scan.nextLine();
			if(res.toLowerCase().equals("salir")) {
				imprimirEstudiantes(estudiantes);
				break;
			}else {
				resInt = Integer.parseInt(res);
				switch (resInt) {
				case 1:
					agregarEstudiante(estudiantes, scan);
					break;
				case 2:
					eliminarEstudiante(estudiantes, scan);
					break;
				default:
					break;
				}
				
			}
			
		} while (true);
		scan.close();
	}

	private static void eliminarEstudiante(ArrayList<String> estudiantes, Scanner scan) {
		System.out.println("Elige el numero de estudiante a borrar");
		imprimirEstudiantes(estudiantes);
		estudiantes.remove(Integer.parseInt(scan.nextLine())-1);
		imprimirEstudiantes(estudiantes);
	}

	private static void agregarEstudiante(ArrayList<String> estudiantes, Scanner scan) {
		System.out.println("Dame el nombre");
		estudiantes.add(scan.nextLine());
	}

	private static void imprimirEstudiantes(ArrayList<String> estudiantes) {
		System.out.println("Tus estudiantes son: ");
		int i = 1;
		for(String nombre:estudiantes) {
			System.out.println(i+" "+nombre);
			i++;
		}
	}

}
