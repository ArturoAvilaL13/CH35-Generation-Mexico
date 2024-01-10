import { Link } from "react-router-dom";
const Inicio = () => {
  return (
    <>
      <div>
        <h2>Pagina Inicio</h2>
        <Link to="nosotros">Sobre nosotros</Link>
        <br />
        <Link to="contacto">contacto</Link>
      </div>
    </>
  );
};

export default Inicio;
