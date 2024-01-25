package org.generation.banco;

/*
 * En cajero se instancia el objeto de tipo CuentaBancaria y se invocan los metodos definitods.
 * Aqui si se pueden establecer los try-catch de la excepcion que se definio en el metodo retirar
 * los resultados se muestran en consola
 * *
 */

public class Cajero {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		CuentaBancaria cuentaBancaria = new CuentaBancaria(6989);
		
		//Simulamos que tenemos un Scanner y el cliente introduce dinero
		System.out.println("Depositando $500");
		cuentaBancaria.depositar(500);
		
		//Revisar si se actualiza el saldo (Debe de haber 500 pejecoins)
		System.out.println("El nuevo saldo es de $"+cuentaBancaria.getSaldo());
		
		//Retirando dineritos
		//Retirando dineritos
				try {
					//Simulamos nuevamente el Scanner para retirar
					System.out.println("Retirando $300");
					cuentaBancaria.retirar(300);
					System.out.println("El nuevo saldo es de $" + cuentaBancaria.getSaldo()); //Output: $200
					
					System.out.println("Retirando $200");
					cuentaBancaria.retirar(200);
					System.out.println("El nuevo saldo es de $" + cuentaBancaria.getSaldo()); //Output: $0
					
					System.out.println("Retirando $300");
					cuentaBancaria.retirar(300);
					System.out.println("El nuevo saldo es de $" + cuentaBancaria.getSaldo()); //Output: Exception
				} catch (FondosInsuficientesException e) {
					System.out.println("\u001B[31mLo siento, te faltan $\u001B[31m" + e.getMonto());
					e.printStackTrace(); //Método de excepciones que imprime el seguimiento del flujo de la excepción
				}
	}

}
