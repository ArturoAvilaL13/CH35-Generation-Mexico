// let cantidadPersonas = "1";
// let titulo = "Hot cakes para "+ cantidadPersonas+ " persona(s)\n";
// let textoTazasHarina = "Tazas de harina para hotcake";
// let textoCucharaAzucar = "Cucharada(s) de azucar";
// let textoCucharaPolvoHornear = "Cucharada(s) de polvo para hornear";
// let textoCucharaSal = "cucharada(s) de sal";
// let textoTazaLeche = "Taza de leche";
// let textoCucharaMantequilla = "Cucharada(s) de mantequilla derretida";
// let textoHuevo = "Huevo(s)";
// let textoChorroVainilla = "Cucharada de vainilla";
// let saltoLinea="<br>";
let ingredientesCantidades = [.5,1,.5,.25,.3,1,1,.2];
let ingredientesTextoC  = ["Harina","Azucar","Polvo para hornear","Sal","Leche","Mantequilla","Huevo","Vainilla"];
// let tazasHarina = .5;
// let cucharadaAzucar = 1;
// let cucharaPolvoHornear = .5;
// let cucharaSal = .25;
// let tazaLeche = .3;
// let cucharaMantequilla = 1;
// let huevo = 1;
// let chorroVainilla = .2;
let ingredientesTexto = `
tazasHarina = .5<br>
cucharadaAzucar = 1<br>
cucharaPolvoHornear = .5<br>
cucharaSal = .25<br>
tazaLeche = .3<br>
cucharaMantequilla = 1<br>
huevo = 1<br>
chorroVainilla = .2<br>
<br><hr><br>
`;

let ingredientesInputs = [];
ingredientesInputs[0] = document.getElementById("tazasHarina");
ingredientesInputs[1] = document.getElementById("cucharadaAzucar");
ingredientesInputs[2] = document.getElementById("cucharaPolvoHornear");
ingredientesInputs[3] = document.getElementById("cucharaSal");
ingredientesInputs[4] = document.getElementById("tazaLeche");
ingredientesInputs[5] = document.getElementById("cucharaMantequilla");
ingredientesInputs[6] = document.getElementById("huevo");
ingredientesInputs[7] = document.getElementById("chorroVainilla");

let verificar = document.getElementById("verificar");
let ptext = document.getElementById("ingredientes");
let iftext = document.getElementById("ingredientesFaltantes");
let textFaltantes = "";
ptext.innerHTML = ingredientesTexto;


verificar.addEventListener("click",()=>{
    for(let i=0;i<ingredientesCantidades.length;i++){
        if(Number(ingredientesInputs[i].value) < ingredientesCantidades[i]){
            textFaltantes += "Falta: "+ingredientesTextoC[i]+"<br>";
        }
    }
    iftext.innerHTML = textFaltantes;
    textFaltantes = "";
});







