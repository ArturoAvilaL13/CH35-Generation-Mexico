import "./Button.css";

/*
Props
Propiedades qeu se pueden asignar a los componentes para modificar el texto, la informacion desde la renderizacion del ismo.
Se asignan dentro de la funcion con el nombre del prop y debe ir entre llaves 
Se manda a llamar en el bloque de codigo donde se debe implementar utilizando llaves
*/

const Button = ({ texto }) => {
  return (
    <>
      <button>{texto}</button>
    </>
  );
};

export default Button;
