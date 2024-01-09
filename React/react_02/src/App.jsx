import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Main from "./components/Main.jsx";
import Button from "./components/Button.jsx";
import Products from "./components/Products.jsx";

function App() {
  const patito1 =
    "https://m.media-amazon.com/images/I/81Yfyhw-QkL.__AC_SX300_SY300_QL70_ML2_.jpg";
  const patito2 =
    "https://m.media-amazon.com/images/I/51eds1ukhEL.__AC_SX300_SY300_QL70_ML2_.jpg";
  return (
    <>
      <Navbar />
      <Main />
      <Button texto="traer informaicon" />
      <Button texto="enviar informaicon" />
      <Button texto="combianr informaicon" />
      {/* <Products
        url="https://m.media-amazon.com/images/I/81Yfyhw-QkL.__AC_SX300_SY300_QL70_ML2_.jpg"
        producto="Patito de goma caballero"
        descripcion="Un patito de goma bien guerrero"
        precio="$40"
      />
      <Products
        url="https://m.media-amazon.com/images/I/51eds1ukhEL.__AC_SX300_SY300_QL70_ML2_.jpg"
        producto="Patito de goma motero"
        descripcion="Un patito de goma para el viaje"
        precio="$35"
      /> */}
      <Products
        url={patito1}
        producto="Patito de goma caballero"
        descripcion="Un patito de goma bien guerrero"
        precio="$40"
      />
      <Products
        url={patito2}
        producto="Patito de goma motero"
        descripcion="Un patito de goma para el viaje"
        precio="$35"
      />
    </>
  );
}

export default App;
