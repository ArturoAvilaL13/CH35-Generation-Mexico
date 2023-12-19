//* Esconder el div container-div

const mostarOcultar = document.getElementById("card-btn");
const containerDiv = document.getElementById("container-div");
//*Agregando estilos al container para visibilidad
containerDiv.style.visibility = "visible";
mostarOcultar.addEventListener("click",()=>{
    //*Usando if-else
    // if(containerDiv.style.visibility  === "visible")
    //     containerDiv.style.visibility  = "hidden";
    // else
    //     containerDiv.style.visibility  = "visible";
    //*Usando operador ternario
    containerDiv.style.visibility = (containerDiv.style.visibility  === "visible") ? "hidden": "visible";
});