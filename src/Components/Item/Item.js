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

/* 
<div className="item">
      <Card className="body" style={{ width: "18rem" }}>
        <Card.Img  />
        <Card.Body>
          <Card.Title>{item.nombre}</Card.Title>
          <Card.Text>
            Obten tus delicisos rolls de {item.descripcion} por tan solo $
            {item.precio}
          </Card.Text>
          <Button variant="light">
            <Link to={`/item/${item.id}`}>Ver Detalle</Link>
          </Button>
        </Card.Body>
      </Card>








    </div>
 */
