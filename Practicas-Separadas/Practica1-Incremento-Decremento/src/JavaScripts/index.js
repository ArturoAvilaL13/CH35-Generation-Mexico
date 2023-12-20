const contador = document.getElementById("contador");
const incrementar = document.getElementById("incrementar");
const decrementar = document.getElementById("decrementar");
const reset = document.getElementById("reset");
const maximo = 100;
const minimo = -100;
const inicial = 0;
contador.innerText = inicial;
incrementar.addEventListener("click", () => {
  if (Number(contador.textContent) < 100) iniciarContador("+");
});
decrementar.addEventListener("click", () => {
  if (Number(contador.textContent) > -100) iniciarContador("-");
});
reset.addEventListener("click", () => iniciarContador("s"));

const iniciarContador = (orden) => {
  switch (orden) {
    case "s":
      contador.innerText = 0;
      break;
    case "+":
      contador.innerText = Number(contador.textContent) + 1;
      break;
    case "-":
      contador.innerText = Number(contador.textContent) - 1;
      break;
    default:
      break;
  }
};
