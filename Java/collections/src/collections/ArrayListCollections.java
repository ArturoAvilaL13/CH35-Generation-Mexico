package collections;

import java.util.ArrayList;
import java.util.Arrays;

public class ArrayListCollections {
	public static void main(String[] args) {
		String[] sArray = {"nombre1","nombre2","nombre3","nombre4"};
		
		System.out.println(sArray);
		//imprime cada elemento
		for(String var:sArray) System.out.println(var);
		//imprime todo el array
		System.out.println(Arrays.toString(sArray));
		
		int[] edades = {12,13,14,15};
		System.out.println(Arrays.toString(edades));
		
		//Acceder a cada elemento
		String sArray1 = sArray[0];
		System.out.printf("Primer elemento %s\n",sArray1);
		int edad1 = edades[1];
		System.out.printf("Segundo elemento edades %d\n",edad1);
		
		//Obtener longitud del array
		System.out.printf("Longitud de sArray: %d\n", sArray.length);
		
		//Obtener  el ultimo elemento
		System.out.printf("Longitud de sArray: %s\n", sArray[sArray.length-1]);
		
		//ArrayList
		ArrayList<String> films = new ArrayList<String>();
		ArrayList<Integer> matricula = new ArrayList<>();
		ArrayList<Character> chars = new ArrayList<>();
		
		//Agregar elementos
		films.add("pelicula1");
		films.add("pelicula2");
		films.add("pelicula3");
		films.add("pelicula4");
		films.add("pelicula5");
		
		System.out.println(films);
		
		//Imprimiendo un solo elemento
		String film1 = films.get(0);
		System.out.println(film1);
		
		//modificar un elemento .set(index,newValue)
		films.set(0, "Elemento modificado");
		System.out.println(films.get(0));
		
		//conocer el tamaño del araylist size();
		int filmsSize = films.size();	
		System.out.println("tamaño: "+filmsSize);
		
		//Agregar y eliminar elemento
		films.add("para eliminar");
		System.out.println(films);
		films.remove(films.size()-1);
		System.out.println(films);
	}
}
