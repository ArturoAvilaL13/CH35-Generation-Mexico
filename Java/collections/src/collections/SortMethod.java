package collections;

import java.util.ArrayList;
import java.util.Collections;

public class SortMethod {

	public static void main(String[] args) {
		// El metodo .sort permite ordenar los elementos de un Arraylist
		
		ArrayList<Integer> numeros = new ArrayList<Integer>();
		numeros.add(5);
		numeros.add(5443);
		numeros.add(35);
		numeros.add(25);
		numeros.add(2);
		numeros.add(14);
		System.out.println(numeros);
		//Ordenando de menor a mayor
		Collections.sort(numeros);
		System.out.println(numeros);
		
		ArrayList<String> nombres = new ArrayList<String>();
		nombres.add("juanito");
		nombres.add("sutanito");
		nombres.add("fulanito");
		nombres.add("manganito");
		nombres.add("chutanito");
		System.out.println(nombres);
		//Ordenando de menor a mayor
		Collections.sort(nombres);
		System.out.println(nombres);
		
	}

}
