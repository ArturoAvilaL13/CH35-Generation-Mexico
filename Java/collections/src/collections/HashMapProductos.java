package collections;

import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class HashMapProductos {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		/*
		 Crear un programa que le permita al usuario agregar un id de producto y el nombre del producto. Mostrar la lista de productos.
		 * */
		HashMap<Integer,String> productos = new HashMap<Integer,String>();
		int contador = 1;
		Scanner scan = new Scanner(System.in);
		String res = "";
			System.out.println("Sistema de productos");
		do {
			System.out.println("Ingrese el producto. Teclee 'Salir' para terminar");
			res = scan.nextLine();
			if(res.toLowerCase().equals("salir")) {
				System.out.println("***********************");
				for(Map.Entry<Integer,String> entry: productos.entrySet()) {
					System.out.println(entry.getKey()+". "+entry.getValue());
				}
				break;
			}else {
				productos.put(contador, res);
				contador++;
			}
		} while (true);
	}

}
