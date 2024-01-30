package test;


import static org.junit.Assert.assertEquals;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import calculadora.Calculadora;

public class CalculadoraTest {
	//1. Mandar a lllamra un objeto de tipo Calculadora como variable
	private Calculadora calculadoraTest;
	//1.1 Crear un metodo llamado setUp para isntanciar mi calculadoraTest
	@BeforeEach
	public void setUp() {
		calculadoraTest = new Calculadora();
	}
	//2. Comenzar a crear metodos de pureba (test) que no retornan (void)
	@Test
	public void sumarTest() {
		//assertEquals(resultado esperado, variable+metodo(parametros a evaluar)
		assertEquals(18,calculadoraTest.sumar(15,3));
	}
	//3. Importar import static org.junit.Assert.assertEquals;
	@Test
	public void restarTest() {
		//assertEquals(resultado esperado, variable+metodo(parametros a evaluar)
		assertEquals(12,calculadoraTest.restar(15,3));
	}
	@Test
	public void multiplicarTest() {
		//assertEquals(resultado esperado, variable+metodo(parametros a evaluar)
		assertEquals(45,calculadoraTest.multiplicar(15,3));
	}
	@Test
	public void dividirTest() {
		//assertEquals(resultado esperado, variable+metodo(parametros a evaluar)
		assertEquals(5,calculadoraTest.dividir(15,3));
	}
}
