package controlFlujo;

import java.util.Scanner;

public class FlujoControl {//nombre clase = nombre archivo

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		//Variable tipo String
		String viaje = null;//se incializa null para darle valor luego
		if(viaje!=null) {
			System.out.println("hay viajes");
		}else {
			System.out.println("No hay viajes");
		}
		
		Scanner scan = new Scanner(System.in);
		//verificar contraseñas
		/*
		System.out.print("Contra: ");
		String contra1 = scan.nextLine();
		
		System.out.print("Contra 2: ");
		String contra2 = scan.nextLine();
		
		if(contra1.equals(contra2)) {
			System.out.println("Acceso garantizado");
		}else {
			System.out.println("No tienes acceso");
		}
		*/
		
		
		int menu = 0;
		char res = 's';
		do {
			System.out.print("Dulceria\n"
					+ "1. Palomitas\n"
					+ "2. Refresco\n"
					+ "3. Nachos\n"
					+ "4. HotDog\n"
					+ "5. Pagar/n"
					+ "\n");
			menu = Integer.parseInt(scan.nextLine());
			
			switch(menu) {
			case 1:
				System.out.println("Se agrego : Palomitas");
				break;
			case 2:
				System.out.println("Se agrego : Refresco");
				break;
			case 3:
				System.out.println("Se agrego : Nachos");
				break;
			case 4:
				System.out.println("Se agrego : HotDog");
				break;
			case 5:
				System.out.println("Vamos a pagar");
				continue;
			default:
				System.out.println("Nada se añadio");
				break;
			}
				System.out.print("Agregar algo mas?");
				res = scan.nextLine().charAt(0);
		} while (res == 's' || res == 'S');
		
		
		
		scan.close();
	}

}
