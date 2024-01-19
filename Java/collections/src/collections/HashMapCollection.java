package collections;

import java.util.HashMap;
import java.util.Map;

public class HashMapCollection {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		HashMap<String,String> capitals = new HashMap<String,String>();
		
		capitals.put("villahermosa", "tabasco");
		capitals.put("monterrey", "nuevo leon");
		capitals.put("guadalajara", "jalisco");
		capitals.put("merida", "yucatan");
		capitals.put("puebla", "puebla");
		
		System.out.println(capitals);
		
		//Map.Entry<> es un método de la interfaz Map que representa una entrada en un Map. Toma como argumento los tipos de datos asignados al HashMap. El usuario asigna el nombre de la interfaz y recibe un método .entrySet() que devuelve el conjunto (Set) de las entrada (clave-valor) en el HashMap.
				//De esta manera ya podemos utilizar los métodos de abajo
		for(Map.Entry<String,String> entry: capitals.entrySet()) {
			//Mostrar la clave (.getKey()) y el valor getvalue() de manera individual para su manipulacion
			System.out.println(entry.getKey()+" es la capital de "+entry.getValue());
		}
		
		//*******************************************************************************
		Map<String,Integer> calificaciones = new HashMap<String,Integer>();
		calificaciones.put("Alumno1", 10);
		calificaciones.put("Alumno2", 8);
		calificaciones.put("Alumno3", 7);
		calificaciones.put("Alumno4", 9);
		calificaciones.put("Alumno5", 6);
		
		for(Map.Entry<String,Integer> entry: calificaciones.entrySet()) {
			//Mostrar la clave (.getKey()) y el valor getvalue() de manera individual para su manipulacion
			System.out.println(entry.getKey()+" tiene una calificacion de "+entry.getValue());
		}
	}

}
