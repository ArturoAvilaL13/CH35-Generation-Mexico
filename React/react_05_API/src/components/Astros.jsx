import { useEffect, useState } from "react";
import "./Astros.css";
import Astro from "./Astro";

//Mandar a llamar la API, utilizanod Hooks (useState y useEfect)

const Astros = () => {
  //Definir la URL de la API
  const ASTROS_URL = "http://api.open-notify.org/astros.json";
  //Implementando useState;
  const [astros, setAstros] = useState([]);
  //Implementando useEffect
  useEffect(() => {
    fetchAstros();
  }, []);
  // Crear funcion fetch para conectarse a la API
  const fetchAstros = () => {
    fetch(ASTROS_URL)
      .then((response) => response.json())
      .then((data) => setAstros(data.people)) //Para que la información viva dentro del componente actualizado, traigo setAstros y le paso los datos de `people` de la API
      .catch((error) => console.error(error));
  };
  console.log(astros); //vive en la consola del navegador
  //astro funciona como los elementos que se recorren en el array 'astros' y .map recibe dichos elementos, mas un index y una funcion de tipo callback
  return (
    <>
      {astros.map((astro, index) => (
        //Exporto el componente Astroj
        //Crear una llave  unica para cada elemento del array (key)
        //Desestructurar el array para que cada elmento reciba los props definidos dentro de Astro ({name},{craft})
        <Astro key={index} {...astro} />
      ))}
    </>
  );
};

export default Astros;
