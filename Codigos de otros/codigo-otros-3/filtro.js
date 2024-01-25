// Tenemos un li de productos

const productos = [
  {
    nombre: "Zapato negro",
    tipo: "zapato",
    color: "negro",
    img: "./taco-negro.jpg",
  },
  {
    nombre: "Zapato azul",
    tipo: "zapato",
    color: "azul",
    img: "./taco-azul.jpg",
  },
  {
    nombre: "Bota negra",
    tipo: "bota",
    color: "negro",
    img: "./bota-negra.jpg",
  },
  { nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg" },
  {
    nombre: "Zapato rojo",
    tipo: "zapato",
    color: "rojo",
    img: "./zapato-rojo.jpg",
  },
];

//cambiamos las variables a un getElementById
const divProductos = document.getElementById("lista-de-productos"); //Refactorizar el nombre de variable a divProductos
const inputFiltro = document.getElementById("filtro"); //Refactorizar el nombre de variable a inputFiltro
const botonDeFiltro = document.getElementById("aplicarFiltro"); //movemos a la parte de arriba para tener un orden

function displayProductos(productos) {
  for (let i = 0; i < productos.length; i++) {
    const divProducto = document.createElement("div"); //Refactorizamos a divProducto, cambiamos de var a const
    divProducto.classList.add("producto");

    const titutloProducto = document.createElement("p"); //cambiamos a tituloPorducto y de var a const
    titutloProducto.classList.add("titulo");
    titutloProducto.textContent = productos[i].nombre;

    const imagen = document.createElement("img"); //cambiamos de var a const
    imagen.setAttribute("src", productos[i].img);

    divProducto.appendChild(titutloProducto);
    divProducto.appendChild(imagen);

    divProductos.appendChild(divProducto);
  }
}

displayProductos(productos); //Crearemos su funcion

botonDeFiltro.onclick = function () {
  while (divProductos.firstChild) {
    divProductos.removeChild(divProductos.firstChild);
  }

  const texto = inputFiltro.value;
  //console.log(texto);//lo comento por que no quiero que se despliegue en la consola
  const productosFiltrados = filtrado(productos, texto);

  // for (let i = 0; i < productosFiltrados.length; i++) {
  //   var d = document.createElement("div");
  //   d.classList.add("producto");

  //   var ti = document.createElement("p");
  //   ti.classList.add("titulo");
  //   ti.textContent = productosFiltrados[i].nombre;

  //   var imagen = document.createElement("img");
  //   imagen.setAttribute("src", productosFiltrados[i].img);

  //   d.appendChild(ti);
  //   d.appendChild(imagen);

  //   divProductos.appendChild(d);
  // }
  displayProductos(productosFiltrados); //el for anterior es inecesario ya que arriba tenemos un metodo para agregar elementos al DOM
};

const filtrado = (productos /*= []*/, texto) => {
  //no es necesario hacer el = []
  return productos.filter(
    (item) => item.tipo.includes(texto) || item.color.includes(texto)
  );
};
