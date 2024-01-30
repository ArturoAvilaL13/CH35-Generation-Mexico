package org.generation.figuras;

/************Clase Circulo ***********/
public class Circulo extends Figura {
	private double radio;

	public Circulo(double radio) {
		super();
		this.radio = radio;
	}
	
	@Override
	public double calcularArea() {
		return Math.PI * radio * radio;
	}
	
	//Instanciando objeto circulo
	public static void main(String[] args) {
		Circulo circulo = new Circulo(3);
		System.out.println("El área del círculo es de " + circulo.calcularArea() + " metros cuadrados");
	}
}
