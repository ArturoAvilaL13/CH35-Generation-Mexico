package loops;

import java.util.Scanner;

public class Continue {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		boolean repetir = true; //Es la condición que me permite ejecuar mi ciclo do-while siempre que sea "verdadera"
		int opcion = 1;	//Es el valor que me permite elegir una opción del switch 
		int dinero = 0; //Es la variable que me permite almacenar el saldo del cliente en mi programa
		int añadir = 0; //Es la variable que me permite añadir otra cantidad al saldo
		int retirar = 0;//Es la variable que me permite retirar otra cantidad al saldo
		Scanner scanner = new Scanner(System.in);
		do {
			//Menú de opciones 
			System.out.println("Bienvenido al cajero automático. Seleccione una opción");
			System.out.println("1. Consultar saldo ");
			System.out.println("2. Ingresar dinero");
			System.out.println("3. Retirar dinero");
			System.out.println("4. Salir");
			
			opcion=scanner.nextInt();//permite reasignar el valor de "opcion" por el nuevo valor ingresado a traves del scanner
			
			System.out.println("Usted eligió la opción "+ opcion);//Imprime la opción que eligió
			
			switch(opcion) { //El switch me permite ejecutar un bloque de código especifíco según la opción elegida (opcion)
			case 1://Si la opción es 1
				System.out.println("Su saldo es "+ dinero);//Muestra el saldo
				break;
			case 2://Si la opción es 2
				System.out.println("Ingrese el monto por añadir");
					añadir=scanner.nextInt();//permite añadir saldo a traves del scanner y lo reescribe en la variable "añadir"
					dinero+=añadir; //suma la nueva cantidad al saldo guardado en la variable "dinero"
				break;
			case 3://Si la opción es 3
				System.out.println("Ingrese el monto a retirar ");
				retirar=scanner.nextInt();//permite retirar dinero a traves del scanner y reescribe el monto a retirar en la variable "retirar"
				if (dinero>=retirar) {//evalua si el monto a retirar es menor o igual a slado disponlible
					dinero-=retirar;//si es asì, resta la cantidad al saldo guardado en la variable "dinero"
				}else {
					System.out.println("Saldo insuficiente");
				}
				break;
			case 4://Si la opción es 4
				repetir = false;//reescribe el valor de repetir a false.
				continue;
			
			}
			
			System.out.println("¿Desea elegir otra opción? (true/false) ");//permite al usuario elegir repetir el ciclo decidiendo entre true o false
			repetir=scanner.nextBoolean();//reasigna el valor de la variable repetir segun lo ingresado por el usuario a traves de scanner.
			
		}while(repetir); //se ejecuta el codigo siempre que repetir igual a true;

	}

}
