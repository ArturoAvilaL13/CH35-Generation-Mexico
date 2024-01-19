package collections;

import java.util.HashSet;

public class HashSetCollection {

	public static void main(String[] args) {
		//HashSet es una clase de Collections donde cada elemento es unico, es decir, no se repetiran los elementos
		HashSet<String> animals = new HashSet<String>();
		animals.add("perrito");
		animals.add("perrito");
		animals.add("gatito");
		animals.add("perrito");
		animals.add("bueñuelo");
		animals.add("gata");
		animals.add("capibara");
		animals.add("perrito");
		animals.add("perrito");
		
		System.out.println(animals);
		//conocer si un elemetno se encuentra dentro del ser: contains();
		System.out.println(animals.contains("gata"));
		
		//Eliminar un elemento: remove()
		animals.remove("gata");
		System.out.println(animals);
		
	}

}
