package org.poo.overloading;

import java.math.BigDecimal;

public class Suma {

	static int sumar(int num1,int num2) {
		return num1+num2;
	}
	static double sumar(double num1,double num2) {
		return num1+num2;
	}
	static BigDecimal sumar(BigDecimal num1,BigDecimal num2) {
		return num1.add(num2);
	}
}
