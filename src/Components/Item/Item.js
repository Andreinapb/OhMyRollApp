import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Item.scss";

const Item = ({ item }) => {
  return (
    <article className="col-4 col-lg-3 py-1 justify-content-center">
      <figure className="producto">
        <img className="img-fluid" src={`${item.imagen}`} alt=""></img>
        <figcaption class="overlay">
          <p className="overlay-titulo">{item.nombre}</p>
          <p className="overlay-texto">
            {" "}
            <br /> {item.descripcion} por tan solo $ {item.precio}{" "}
          </p>
        </figcaption>
      </figure>
      <Link to={`/item/${item.id}`}>
        <button className="btn-productos btn"> Ver Detalle</button>
      </Link>
    </article>
  );
};

export default Item;


