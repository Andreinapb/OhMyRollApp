import { useState, useContext } from "react";
import ItemCount from "./ItemCount";
import CartContext from "../../Context/CartContext";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import '../../styles/ItemDetail.scss'

const ItemDetail = ({ Detail }) => {
  const { AddItem } = useContext(CartContext);
  const Initial = 0;
  const stock = 5;

  const [Cantidad, setCantidad] = useState(false);
  const [CantidadFinal, setCantidadFinal] = useState(false);

  const OnAdd = (Cantidad) => {
    if (Cantidad <= stock) {
      setCantidad(stock - Cantidad);
      setCantidadFinal(true);
    }
    AddItem (Detail, Cantidad);
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
          <Card.Title className="title">{Detail.nombre}</Card.Title>
          <Card.Text>{Detail.descripcion}</Card.Text>
          <button className='boton-caja'> {MostrarCompra()}</button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ItemDetail;
