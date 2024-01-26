const nums = [4, 2, 4];

function mayorMenor(array) {
  return array.sort(function (a, b) {
    return b - a;
  });
}

function menorMayor(array) {
  return array.sort(function (a, b) {
    return a - b;
  });
}

function buscarIguales(array) {
  let num = array[0];
  for (let index = 1; index < array.length; index++) {
    if (num !== array[index]) {
      return "No son iguales todos los numeros";
    }
  }
  return "Todos los numeros son iguales";
}

console.log(`Input: ${nums}
Mayor a menor: ${mayorMenor(nums)}
Menor a mayor: ${menorMayor(nums)}
${buscarIguales(nums)}
`);
