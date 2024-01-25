package org.generation.iterable;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Iterator;
import java.util.List;

public class IterableMain {
	public static void main(String[] args) {
		//Podemos iterar sobre una coleccion de 3 numeros:
		System.out.println("*************For-Each***************");
		//1. iTERACION MEDIANTE CICLO FOR-EACH
		List<String> nombres= new ArrayList<String>();
		
		nombres.addAll(Arrays.asList("nombre1","nombre2","nombre3","nombre4"));
		
		for(String nombre:nombres) {
			System.out.println(nombre);
		}
		System.out.println("*************While***************");
		//2. Iterar mediante Iterator
		List<String> apellidos= new ArrayList<String>();
		
		apellidos.addAll(Arrays.asList("apellido1","apellido2","apellido3","apellido4"));
		Iterator<String> iterator = apellidos.iterator();
		
		while(iterator.hasNext()) {
			String elemento = iterator.next();
			System.out.println(elemento);
		}
		
		System.out.println("*************lambda***************");
		//3. mediante forEach que toma una expresion java lamba como parametro
		List<String> animales= new ArrayList<String>();
		
		animales.addAll(Arrays.asList("animal1","animal2","animal3","animal4"));
		
		//se indica que operara con lamba con una ->
		animales.forEach(animal ->{
			System.out.println(animal);
		});
	}
}
