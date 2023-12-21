const contador = document.getElementById("contador");
const incrementar = document.getElementById("incrementar");
const decrementar = document.getElementById("decrementar");
const reset = document.getElementById("reset");
const maximo = 100;
const minimo = -100;
const inicial = 0;
let intervalo = null;
contador.innerText = inicial;
incrementar.addEventListener("click", () => {
  if (Number(contador.textContent) < 100) {
    //iniciarContador("+");
    iniciarContadorInterval("+");
  }
});
decrementar.addEventListener("click", () => {
  if (Number(contador.textContent) > -100) {
    // iniciarContador("-");
    iniciarContadorInterval("-");
  }
});
reset.addEventListener("click", () => {
  // iniciarContador("s");
  iniciarContadorInterval("s");
});

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

const iniciarContadorInterval = (orden) => {
  switch (orden) {
    case "s":
      clearInterval(intervalo);
      contador.innerText = 0;
      break;
    case "+":
      if (intervalo != null) clearInterval(intervalo);
      intervalo = setInterval(() => {
        if (Number(contador.textContent) < 100) {
          contador.innerText = Number(contador.textContent) + 1;
        } else {
          clearInterval(intervalo);
        }
      }, 500);
      break;
    case "-":
      if (intervalo != null) clearInterval(intervalo);
      intervalo = setInterval(() => {
        if (Number(contador.textContent) > -100) {
          contador.innerText = Number(contador.textContent) - 1;
        } else {
          clearInterval(intervalo);
        }
      }, 500);
      break;
    default:
      break;
  }
};
