import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { faMinusCircle } from "@fortawesome/free-solid-svg-icons";
import "../../styles/ItemCount.scss";


const ItemCount = ({ Initial, Stock, OnAdd, }) => {
  const [Contador, setContador] = useState(Initial);

  const Restar = () => {
    Contador >= 1
      ? setContador(Contador - 1)
      : alert("Por favor Agrega un producto");
  };
  const Sumar = () => {
    Contador < Stock
      ? setContador(Contador + 1)
      : alert("Se nos ha acabado el stock, por favor vuelve mañana");
  };

  return (
    <div className="caja-contador">
      <FontAwesomeIcon
        icon={faMinusCircle}
        className="icon"
        onClick={() => Restar()}
      ></FontAwesomeIcon>{" "}
      <button onClick={() => OnAdd(Contador)} className="boton" type="button">
        {
           Contador > 0 ? "Ver Carrito" : "Agregue un producto"
        }
      </button>
      
      <FontAwesomeIcon
        icon={faPlusCircle}
        className="icon"
        onClick={() => Sumar()}
      ></FontAwesomeIcon>
      <br/>
      <span className="contador">{Contador}</span>
    </div>
  );
};

export default ItemCount;
