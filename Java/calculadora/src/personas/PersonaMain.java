package personas;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class PersonaMain {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Persona persona = new Persona("nombre","apellidos",14,"algo@gmail.com");
		System.out.printf("%s\n%s\n%d\n%s\n",
				persona.getNombre(),
				persona.getApellidos(),
				persona.getEdad(),
				persona.getCorreo());
		
	}

}
