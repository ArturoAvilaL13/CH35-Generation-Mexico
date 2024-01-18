package funciones;

import java.util.ArrayList;
import java.util.List;

public class Ecommerce {
	
	static class Producto{
		String nombre;
		double precio;
		
		Producto(String nombre, double precio){
			this.nombre = nombre;
			this.precio = precio;
		}
	}
	
	static class CarritoCompra{
		List<Producto> productos = new ArrayList<>();
		
		void agregarProducto(Producto juguete) {
			productos.add(juguete);
		}
		
		double calcularTotal() {
			double total = 0;
			for(Producto juguete: productos) {
				total += juguete.precio;
			}
			return total;
		}
		
	}

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Producto juguete1 = new Producto("Juguete1", 98.5);
		Producto juguete2 = new Producto("Juguete2", 88.4);
		Producto juguete3 = new Producto("Juguete3", 78.3);
		Producto juguete4 = new Producto("Juguete4", 68.2);
		Producto juguete5 = new Producto("Juguete5", 58.1);
		
		CarritoCompra carrito = new CarritoCompra();
		carrito.agregarProducto(juguete1);
		carrito.agregarProducto(juguete2);
		carrito.agregarProducto(juguete3);
		carrito.agregarProducto(juguete4);
		carrito.agregarProducto(juguete5);
		
		System.out.println("Juguetes en carrito\n");
		for(Producto juguete: carrito.productos) {
			System.out.println("     "+juguete.nombre);
		}
		System.out.printf("\nTotal a pagar: %.2f\n", carrito.calcularTotal());

	}

}
