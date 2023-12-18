/*
 ? Manipulacion del DOM.
 * Leer y traer nodos del arbol del DOM.
   ~ document.getElementById("id");
   ~ document.getElementsByClass("class");
   ~ document.getElementsByTagName("tagName");
 */

//* getElementById("id");
const titulo = document.getElementById("title1");
console.log(titulo);
console.log(titulo.innerText); //* traer un string

//* getElementByClassName
const titulos = document.getElementsByClassName("title");
console.log(titulos);
console.log(titulos.length);//* Devuelve la longitud de elementos de la clase
console.log(typeof titulos);

//* getElementsByTagName("tagName");
const tituloH3 = document.getElementsByTagName("h3");
console.log(tituloH3);
console.log(tituloH3[0].innerText);

/*
 ? Metodos para llamar elementos mediante selectores de css
 * Se usa para procesos mas especificos y la sintaxis querySelector
    ~ document.querySelector("selector"); #, ., <>
    ~ document.querySelectorAll(); selecciona los elementos que se especifiquen.
 * Siempre van a traer el primer elemento con el selector indicado
 */

//* querySelector("");
const query = document.querySelector("#title4");
console.log(query.innerText);

const queryClass = document.querySelector(".title");
console.log(queryClass);

//* querySelectorAll("");
const queryClassAll = document.querySelectorAll(".title");
console.log(queryClassAll);

//* Manipular elementos del DOM (styles) con JS
titulo.style.textAlign = "center";
titulo.style.color = "#5058F2";

//* Manipular el texto de un elemento
const titulo2 = document.querySelector("#title2");
titulo2.innerText = "Sesion de Manipulacion del DOM. CH35";
titulo2.style.color = "#F23D3D";

/*
 ? Metodos para crear y agregar elementos en el DOM.
 * Este proceso se divide en dos: "crear el nodo y agregar el nodo".
  ~ Crear nodos
   & document.createElement("element"); -> crea elementos a partir de etiquetas
   & document.createTextNode("text"); -> crea textos dentro de las etiquetas
*/

const nodo1 = document.createElement("h4");
const imgNodo = document.createElement("img");

/*
 ~ Agregar nodos
  & parentElement.appendChild(const);
  & parentElement.append(const);
  & parentElement.insertBefore(const);
  & parentElement.insertAdjacentElement(const);
* Utilizaremos mayormente appendChild
*/

//* Obtengo el elemento padre por tag, class o id
const parentElement = document.getElementById("dif");
//insertar texto que vivira en el nodo1
const textoNodo1 = document.createTextNode("Imagen agregada desde el DOM");
//Inserto el texto en el nodo1
nodo1.appendChild(textoNodo1);
//Insertar nodo1 en el elemento padre
parentElement.appendChild(nodo1);
parentElement.style.fontFamily = "'Karla',sans-serif";
parentElement.style.color = "#D8F2DC";

//* Agregando imagen

//* Inserto el imgNodo en el elemento padre para definirlo posteriormente
parentElement.appendChild(imgNodo);
//* Accedo a las propiedades de la imagen
imgNodo.src = "./src/Assets/logo-github.jpg";
// imgNodo.style.width = "70px"; //* si se quieren usar unidades de medida se debe definir que es en el style
imgNodo.alt = "logo-github";
imgNodo.width = "200";
// imgNodo.height = "80px";

/*
 ? Otra forma de leer y modificar nodos
    ~ document.outerHTML(leer)
    ~ node.innerHTML(escribir sobre el nodo);
*/

const elementOuter = titulo2.outerHTML;
console.log(elementOuter);
titulo2.innerHTML = "Manipulacion del DOM - CH35";