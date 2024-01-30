package calculadora;

public class CalculadoraMain {

	public static void main(String[] args) {
		Calculadora calculadora = new Calculadora();
		
		System.out.printf("suma: %d\nresta: %d\nmultiplicacion: %d\ndivision: %d\n",
				calculadora.sumar(15, 3),
				calculadora.restar(15, 3),
				calculadora.multiplicar(15, 3),
				calculadora.dividir(15, 3));

	}

}
