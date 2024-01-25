package codigoDeOtros4;

import java.util.Scanner;

public class Codigo4 {//No tiene una clase main, asi que hay que crearla

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);//Le falta el argumento System.in y refactorizamos s -> scan
	    
	    System.out.print("Turno del jugador 1 (introduzca piedra, papel o tijeras): ");
	    String jugador1 = scan.nextLine();//Refactorizamos la variable a juador1
	    
	    System.out.print("Turno del jugador 2 (introduzca piedra, papel o tijeras): ");//cambiamos el mensaje para que muestre 2 en lugar de 1
	    //Scanner s2 = new Scanner();//Este scanner es inservible por que podemos seguir utilizando el primero, hasta que no se cierre
	    String jugador2 = scan.nextLine();//Refactorizamos j2 -> jugador2
	    
	    if (jugador1.equals(jugador2)) {//para comparar String en java se utiliza el .equals() y hay parentesis de mas
	      System.out.println("Empate");
	    } else {
	      int ganador = 2;//refactorizamos g -> ganador
	      switch(jugador1) {
	        case "piedra":
	          if (jugador2.equals("tijeras")) {//se debe  usar .equals
	            ganador = 1;
	          }

	        case "papel":
	          if (jugador2.equals("piedra")) {//le hace falta cerra las llaves, .iquals para comparar Strings
	            ganador = 1;
	          }
	        case "tijera":
	          if (jugador2.equals("papel")) {
	            ganador = 1;
	          }
	          break;
	        default:
	        	break;
	      }
	      System.out.println("Gana el jugador " + ganador);
	    }
	}
  
}
