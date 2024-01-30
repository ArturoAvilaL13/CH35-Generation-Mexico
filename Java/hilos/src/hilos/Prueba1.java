package hilos;

public class Prueba1 extends Thread{
	private String numeroDePedido;
	@Override
	public void run() {
		for (int i = 0; i <=5; i++) {
			System.out.println("Prueba 1");
		}
	}
	
}
