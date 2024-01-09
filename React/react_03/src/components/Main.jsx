import "./Main.css";
import GenMxLogo from "../assets/logo.jpg";

const Main = () => {
  return (
    <>
      <div className="container--main">
        <div className="main--head">
          <a href="https://www.grabient.com/">
            <img src={GenMxLogo} alt="GenMxLogo" className="main--logo" />
          </a>
        </div>
        <h1>React + Vite</h1>
        <h2>Astros API</h2>
      </div>
    </>
  );
};

export default Main;
