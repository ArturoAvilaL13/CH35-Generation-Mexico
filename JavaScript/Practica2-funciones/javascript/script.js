const minutosSegundos = (minutos) => minutos*60;

const sumaUno = (num) => num+1;

const areaTriangulo = (base,altura) => (base*altura)/2;

const ageToDays = (ages) => ages*265;

const powerCalculator = (voltage,current) => voltage*current;

const somethingToMe = (text) => "something "+text;

const sumOfPolygonAngles = (n) => (n-2)*180;

const hourMinutesToSeconds = (hour,minute) => ((hour*3600)+(minute*60));

function asdfasfasd(asdfa,asdfasfa) {
     asdfa + asdfasfa;
}

console.log(`4 minutos a segundos es ${minutosSegundos(4)}`);
console.log(sumaUno(4));
console.log(areaTriangulo(4,7));
console.log(ageToDays(4));
console.log(powerCalculator(4,19));
console.log(somethingToMe("hara esto"));
console.log(sumOfPolygonAngles(4));
console.log(hourMinutesToSeconds(4,2));
//Variables ejercicio 1
let inputRes1 = document.querySelector("#resEjer1");
let inputEjer1 = document.querySelector("#ejer1");
//Variables ejercicio 2
let inputRes2 = document.querySelector("#resEjer2");
let inputEjer2 = document.querySelector("#ejer2");
//Variables ejercicio 3
let base = document.querySelector("#ejer3Base");
let altura = document.querySelector("#ejer3Altura");
let inputRes3 = document.querySelector("#resEjer3");
//Variables ejercicio 4
let anios = document.querySelector("#ejer4");
let dias = document.querySelector("#resEjer4");
//Variables ejercicio 5
let voltaje = document.querySelector("#voltaje");
let corriente = document.querySelector("#corriente");
let poder = document.querySelector("#poder");
//Variables ejercicio 6
let texto = document.querySelector("#texto");
let textoRes = document.querySelector("#textoRes");
//Variables ejercicio 7
let nLados = document.querySelector("#nLados");
let grados = document.querySelector("#grados");
//Variables ejercicio 8
let horas = document.querySelector("#horas");
let minutos = document.querySelector("#minutos");
let segundos = document.querySelector("#segundos");

//Evento listener para Ejercicio 1
inputEjer1.addEventListener("input",()=>{
     inputRes1.value = Number(inputEjer1.value)*60;
});

//Evento listener para Ejercicio 2
inputEjer2.addEventListener("input",()=>{
    inputRes2.value = Number(inputEjer2.value)+1;
});

//Evento listener para Ejercicio 3
base.addEventListener("input",()=>{
    inputRes3.value = (Number(base.value)*Number(altura.value))/2;
});
altura.addEventListener("input",()=>{
    inputRes3.value = (Number(base.value)*Number(altura.value))/2;
});

//Evento listener para ejercicio 4
anios.addEventListener("input",()=>{
    dias.value = Number(anios.value)*365;
});

//Evento listener para Ejercicio 5
voltaje.addEventListener("input",()=>{
    poder.value = Number(voltaje.value)*Number(corriente.value);
});
corriente.addEventListener("input",()=>{
    poder.value = Number(voltaje.value)*Number(corriente.value);
});

//Evento listener para ejercicio 6
texto.addEventListener("input",()=>{
    textoRes.value = "Something "+texto.value;
});

//Evento listener para ejercicio 7
nLados.addEventListener("input",()=>{
    grados.value = (Number(nLados.value)-2)*180;
});

//Evento listener para Ejercicio 8
horas.addEventListener("input",()=>{
    segundos.value = (Number(horas.value)*3600)+(Number(minutos.value)*60);
});
minutos.addEventListener("input",()=>{
    segundos.value = (Number(horas.value)*3600)+(Number(minutos.value)*60);
});