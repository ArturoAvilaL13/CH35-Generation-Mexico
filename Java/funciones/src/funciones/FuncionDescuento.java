package funciones;

import java.util.Scanner;

public class FuncionDescuento {

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		
		System.out.println("Costo de producto");
		double precioProducto = scan.nextDouble();
		scan.close();
		short porcentajeDescuento = 15;
		double descuento = calcularPorcentaje(precioProducto,porcentajeDescuento);
		
		double porcentajeImpuesto = 3;
		double impuesto = calcularPorcentaje(precioProducto,porcentajeImpuesto);
		
		double total = calcularTotal(precioProducto,descuento,impuesto);
		
		total = redondear(total,2);
		
		System.out.printf("Costo del producto %.2f\n Tiene un descuento de %.2f\n Tiene un impuesto de %.2f\n El total es de %.2f\n",precioProducto,descuento,impuesto,total);
		
	}

	private static double calcularTotal(double precioProducto, double descuento, double impuesto) {
		// TODO Auto-generated method stub
		return precioProducto+descuento+impuesto;
	}

	private static double redondear(double total, int i) {
		double factor = Math.pow(10, i);
		return Math.round(total*factor)/factor;
	}

	private static double calcularPorcentaje(double precio, double porcentaje) {
		// TODO Auto-generated method stub
		return precio*porcentaje/100;
	}
}
