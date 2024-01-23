package org.generation.letras;

public class LetrasMain {

	public static void main(String[] args) {
		// Instanciar objetos (letras y contador)
		Letras letras = new Letras();
		letras.mostrarMensaje("Escribe un texto y te mostraré el número de vocales, consonantes, símbolos y números");
		String palabra = letras.leerEntrada();//Guardamos el texto introducido por el usuario en una variable
		
		//invocar los metodos que me permiten contar los caracteres
		Contador contador = new Contador();
		int totalVocales = contador.contarVocales(palabra);
		System.out.println("Hay "+totalVocales+" vocales.");
		
		int totalNumeros = contador.contarNumeros(palabra);
		System.out.println("Hay "+totalNumeros+" Numeros.");
		
		int totalConsonantes = contador.contarConsonantes(palabra);
		System.out.println("Hay "+totalConsonantes+" consonantes.");
		
		int totalSimbolos = contador.contarSimbolos(palabra);
		System.out.println("Hay "+totalSimbolos+" simbolos.");

	}

}
