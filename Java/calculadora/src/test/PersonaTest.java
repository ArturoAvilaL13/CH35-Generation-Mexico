package test;

import static org.junit.Assert.assertEquals;

import java.util.regex.Matcher;
import java.util.regex.Pattern;
import org.junit.Test;
import org.junit.jupiter.api.BeforeEach;

import personas.Persona;

public class PersonaTest {
	/*Requerimientos:
	 * 	1. Instanciar 4 objetos con los parámetros establecidos en el constructor
	 * 	2. Crear métodos (4) para probar cada objeto instanciado con los valores de los atributos (getters)
	 * 	3. Crear un método de validación de email, donde el email debe cumplir con la condición de dominio @gmail.com ... si cumple con la condición, el test se evalúa correcto, si no, se evalúa como falla (método de test booleano, regex)
	 * */
	private Persona persona = new Persona("nombre","apellidos",14,"juanitoComeTrufas@gmail.com");
	@Test
	public void validarCorreo() {
		Pattern pattern = Pattern.compile("@gmail.com",Pattern.CASE_INSENSITIVE);
		Matcher matcher = pattern.matcher(persona.getCorreo());
		boolean matchFound = matcher.find();
		assertEquals(true,matchFound);
		
	}
	
}
