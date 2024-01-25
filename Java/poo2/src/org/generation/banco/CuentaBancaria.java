package org.generation.banco;
/*
 * En esta clase se definen los metodos para disparar las excepciones, es decir, el try-catch.
 * Se definen otros metodos como depositra dinero, retirar dinero
 * Requerimientos
 * 	- Traajar bajo POO
 * 	- Encapsular (modificadores, getters y setters)
 * 	- Crear variables y metodos para instanciar objetos
 * */
public class CuentaBancaria {
	private double saldo;
	private int idCuenta;
	
	//Constructor que recibe solamente el atributo numero
	public CuentaBancaria(int idCuenta) {
		this.setIdCuenta(idCuenta);
	}
	
	// Metodo para depositar dineros
	public void depositar(double monto) {
		setSaldo(getSaldo() + monto);
	}
	

	//Metodo para retirar dineritos
	/*
	 * Verificar si el monto a retiara es menos o igual al saldo actual
	 * 	- Se puede retirar el monto solicitado
	 * 	- no se puede retierar y calculamos cuanto dinero falta para completar la opéracion
	 * */
	public void retirar(double monto) throws FondosInsuficientesException	{
		if(monto <= getSaldo()) {
			setSaldo(getSaldo() - monto);
		}else {
			double faltante = monto-getSaldo();
			//Crear la isntancia de la clase FondosInsuficientesException con las palabras reservadas throw new e y le pasamos el parametro correspondiente a la variable que disparar la excepcion
			throw new FondosInsuficientesException(faltante);//Esto nos va a marcar un error, por que queremos instanciar de manera local y no lo encuentra, para ello ncesitamos "Heredarlo" como parte del metodo con la palabra reservada throws y el nombre de la excepcion
		}
	}

	public double getSaldo() {
		return saldo;
	}

	public void setSaldo(double saldo) {
		this.saldo = saldo;
	}

	public int getIdCuenta() {
		return idCuenta;
	}

	public void setIdCuenta(int idCuenta) {
		this.idCuenta = idCuenta;
	}
}
