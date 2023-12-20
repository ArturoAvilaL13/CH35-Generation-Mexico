const resultado = document.getElementById("resultado");
const operacion = document.getElementById("operacion");
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const menu = document.querySelectorAll(".menu");
let resOper = null;
menu[0].addEventListener("click", () => {
  operacion.innerText = "Suma";
  resultado.innerText = Number(num1.value) + Number(num2.value);
});
menu[1].addEventListener("click", () => {
  operacion.innerText = "Resta";
  resultado.innerText = Number(num1.value) - Number(num2.value);
});
menu[2].addEventListener("click", () => {
  operacion.innerText = "Multiplicacion";
  resultado.innerText = Number(num1.value) * Number(num2.value);
});
menu[3].addEventListener("click", () => {
  operacion.innerText = "Division";
  resultado.innerText = (Number(num1.value) / Number(num2.value)).toFixed(2);
});
