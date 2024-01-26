package liveCoding.c3;

import java.util.Scanner;

public class MangosNaranjas {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner scan = new Scanner(System.in);
		int mangos=0;
		int naranjas=0;
		System.out.println("¿Cuantos mangos?");
		mangos= Integer.parseInt(scan.nextLine());
		System.out.println("¿Cuantas naranjas?");
		naranjas= Integer.parseInt(scan.nextLine());
		scan.close();
		System.out.println(MangosYNaranjas(mangos, naranjas));
		
	}

	public static String MangosYNaranjas(int mangos,int naranjas) {
		String mensaje = "";
		int divisor = 0;
		int mangosEnCajas =0;
		int naranjasEnCajas =0;
		if(mangos>naranjas) {
			divisor = mangos;
		}else {
			divisor = naranjas;
		}
		while(divisor-->1) {
			if(mangos%divisor==0 && naranjas%divisor==0) {
				break;
			}
		}
		
		mangosEnCajas = mangos/divisor;
		naranjasEnCajas = naranjas/divisor;
		
		mensaje = "Cajas: "+divisor+" mangos por caja: "+mangosEnCajas+" naranjas por caja: "+naranjasEnCajas;
		
		return mensaje;
	}
	
}
