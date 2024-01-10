import "./Navbar.css"; //importacion de CSS
import IssLogo from "../assets/Iss_Logo.svg";
// Crear una funcion que contiene el marcado para que vivaa nuestro codigo

const Navbar = () => {
  const url1 = "https://www.nasa.gov/international-space-station/";
  const url2 = "https://www.nasa.gov/mission/apollo-13/";
  const url3 = "http://open-notify.org/Open-Notify-API/People-In-Space/";
  return (
    <>
      {/*Fragmento (por cierto, el comentario debe ser multilinea y estar encerrado entre llaves)*/}
      <div className="navbar--container">
        <div className="navbar--title">
          <a href={url1} id="link--logo ">
            <img src={IssLogo} alt="ISS" className="img--logo" />
          </a>
        </div>
        <div className="navbar--links">
          <div className="navbar--link">
            <a href={url1}>Home</a>
          </div>
          <div className="navbar--link">
            <a href={url2}>About</a>
          </div>
          <div className="navbar--link">
            <a href={url3}>Astros</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
