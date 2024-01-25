package org.generation.banco;

	/*
	 * En esta clase se definen los metodos que arrojanExcepciones, siempre que en la clase Cajero se dispare dicha excepcion
	 * Requerimientos
	 * 	1. Trabajar bajo el paradigma POO
	 * 	2. Indicar que la clase es una Exception mediante herencia (extends)
	 *  3. Crear variables y metodos para instanciar objetos
	 *  4. Encapsulas
	 * */

public class FondosInsuficientesException extends Exception{
	private static final long serialVersionUID = 1L;//No es necesria, pero es buna practica asignarla
	//Atributos
	private double monto;
	
	//Constructor
	public FondosInsuficientesException(double monto) {
		this.setMonto(monto);
	}
	
	//Getter y Setter
	public double getMonto() {
		return monto;
	}

	public void setMonto(double monto) {
		this.monto = monto;
	}
	
	
	
	
}
