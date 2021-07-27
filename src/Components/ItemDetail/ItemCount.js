import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { faMinusCircle } from "@fortawesome/free-solid-svg-icons";
import "../../styles/ItemCount.scss";
import { Link } from "react-router-dom";

const ItemCount = ({ Initial, Stock, OnAdd }) => {
  const [Contador, setContador] = useState(Initial);

  const Restar = () => {
    Contador >= 2
      ? setContador(Contador - 1)
      : 
        setContador(Initial);
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
      ></FontAwesomeIcon>
      {Contador >= 2 ? (
        
        <button onClick={() => OnAdd(Contador)} className="boton" type="button">
            <Link to="/Cart" className="Compra">
          Ver Carrito
          </Link>
        </button>
      ) : (
        <button onClick={() => OnAdd(Contador)} className="boton" type="button">
         Agregue un producto
        </button>
      )}

      <FontAwesomeIcon
        icon={faPlusCircle}
        className="icon"
        onClick={() => Sumar()}
      ></FontAwesomeIcon>
      <br />
      <span className="contador">{Contador}</span>
    </div>
  );
};

export default ItemCount;
