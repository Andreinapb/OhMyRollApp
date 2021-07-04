import { useState, useContext } from "react";
import ItemCount from "../ItemCount/ItemCount";
import CartContext from "../../Context/CartContext";
import "./ItemDetail.css";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const ItemDetail = ({ Detail }) => {
  const { AddItem } = useContext(CartContext);
  const Initial = 0;
  const stock = 5;

  const [Cantidad, setCantidad] = useState(false);
  const [CantidadFinal, setCantidadFinal] = useState(false);

  const OnAdd = (cantidad) => {
    if (cantidad <= stock) {
      setCantidad(stock - cantidad);
      setCantidadFinal(true);
    }
    AddItem (Detail, cantidad);
  };

  const MostrarCompra = () => {
    if (CantidadFinal) {
      return (
        <>
          <Link to="/Cart" className="Compra">
            Agregar al carrito{" "}
          </Link>
        </>
      );
    } else {
      return <ItemCount Initial={Initial} Stock={stock} OnAdd={OnAdd} />;
    }
  };

  return (
    <div className="DetailCard">
      <Card className="bodyD" style={{ width: "18rem" }}>
        <Card.Img className="imgCardD" variant="top" src={`${Detail.imagen}`} />
        <Card.Body>
          <Card.Title>{Detail.nombre}</Card.Title>
          <Card.Text>{Detail.descripcion}</Card.Text>
          <button> {MostrarCompra()}</button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ItemDetail;
