const btn = document.getElementById("btn");
const reset = document.getElementById("reset");
const colorFondo = document.body.style.backgroundColor;

//*Vamos a declarar una funcion que genere un numero random tomando un parametro number

const random = (number) => Math.floor(Math.random() * (number+1));

//Crear evento de click para cuando presion un boton pase algo

btn.addEventListener("click",()=>{
    const randomColor = `rgb(${random(255)},${random(255)},${random(255)})`;
    document.body.style.backgroundColor = randomColor;
});
//botn reset
reset.addEventListener("click",()=>{
    document.body.style.backgroundColor = colorFondo;
})