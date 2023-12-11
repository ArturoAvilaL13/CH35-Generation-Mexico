let cantidadPersonas = "1";
let titulo = "Hot cakes para "+ cantidadPersonas+ " persona(s)\n";
let textoTazasHarina = "Tazas de harina para hotcake";
let textoCucharaAzucar = "Cucharada(s) de azucar";
let textoCucharaPolvoHornear = "Cucharada(s) de polvo para hornear";
let textoCucharaSal = "cucharada(s) de sal";
let textoTazaLeche = "Taza de leche";
let textoCucharaMantequilla = "Cucharada(s) de mantequilla derretida";
let textoHuevo = "Huevo(s)";
let textoChorroVainilla = "Cucharada de vainilla";
let saltoLinea="<br>";1

let tazasHarina = .5;
let cucharadaAzucar = 1;
let cucharaPolvoHornear = .5;
let cucharaSal = .25;
let tazaLeche = .3;
let cucharaMantequilla = 1;
let huevo = 1;
let chorroVainilla = .2;



document.write(titulo+saltoLinea+saltoLinea);
document.write("Ingredientes"+saltoLinea+
tazasHarina+" "+textoTazasHarina+saltoLinea+
cucharadaAzucar+" "+textoCucharaAzucar+saltoLinea+
cucharaPolvoHornear+" "+textoCucharaPolvoHornear+saltoLinea+
cucharaSal+" "+textoCucharaSal+saltoLinea+
tazaLeche+" "+textoTazaLeche+saltoLinea+
cucharaMantequilla+" "+textoCucharaMantequilla+saltoLinea+
chorroVainilla+" "+textoChorroVainilla+saltoLinea+
huevo+" "+textoHuevo+saltoLinea
);

document.write("<br><hr><br>");

cantidadPersonas =  Number(prompt("Dame para cuantas personas quieres los hotcakes"));
titulo = "Hot cakes para "+ cantidadPersonas+ " persona(s)\n";
document.write(saltoLinea+titulo+saltoLinea+saltoLinea);
document.write("Ingredientes"+saltoLinea+
(tazasHarina*cantidadPersonas).toFixed(2)+" "+textoTazasHarina+saltoLinea+
(cucharadaAzucar*cantidadPersonas)+" "+textoCucharaAzucar+saltoLinea+
(cucharaPolvoHornear*cantidadPersonas).toFixed(2)+" "+textoCucharaPolvoHornear+saltoLinea+
(cucharaSal*cantidadPersonas).toFixed(2)+" "+textoCucharaSal+saltoLinea+
(tazaLeche*cantidadPersonas).toFixed(2)+" "+textoTazaLeche+saltoLinea+
(cucharaMantequilla*cantidadPersonas)+" "+textoCucharaMantequilla+saltoLinea+
(chorroVainilla*cantidadPersonas).toFixed(2)+" "+textoChorroVainilla+saltoLinea+
(huevo*cantidadPersonas)+" "+textoHuevo+saltoLinea
);
