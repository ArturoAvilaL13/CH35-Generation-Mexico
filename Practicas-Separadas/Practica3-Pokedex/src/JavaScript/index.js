const boton = document.getElementById("action");
const abuelo = document.getElementById("contenedor");
boton.addEventListener("click", () => sacaPokemones());
let pokemones = null;
const cantidadPokemones = 20;
const sacaPokemones = () => {
  let url = null;
  for (let i = 1; i <= cantidadPokemones; i++) {
    url = "https://pokeapi.co/api/v2/pokemon-form/" + i.toString();
    fetch(url)
      .then((data) => data.json())
      .then((pokemones) => {
        //*sacamos nombre e imagen
        // console.log(pokemones);
        // console.log(pokemones.name);
        // console.log(pokemones.sprites.front_default);
        creaContenedorPokemones(
          pokemones.name,
          pokemones.sprites.front_default
        );
      })
      .catch((error) => console.error("algo malio sal", error));
  }
};

const creaContenedorPokemones = (name, imgUrl) => {
  const padre = document.createElement("div");
  abuelo.appendChild(padre);
  const nombre = document.createElement("h4");
  const imagen = document.createElement("img");
  nombre.innerText = name;
  imagen.src = imgUrl;
  imagen.width = 200;
  padre.appendChild(nombre);
  padre.appendChild(imagen);
};
