package org.poo.overloading;

import java.math.BigDecimal;

public class SumaMain {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		int suma1 = Suma.sumar(5, 9);
		double suma2 = Suma.sumar(4.3, 9.6);
		//Para usar big decimal se deben declarar las variables como BidDecimal
		BigDecimal bNum1 = new BigDecimal("4.3");
		BigDecimal bNum2 = new BigDecimal("5.9");
		BigDecimal suma3 = Suma.sumar(bNum1, bNum2);
		System.out.printf("%d\n%.3f\n",suma1,suma2);
		System.out.println(suma3);
	}

}
