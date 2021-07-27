import React from "react";
import { useContext } from "react";
import CartContext from "../../Context/CartContext";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import "../../styles/Cart.scss";
import Card from "react-bootstrap/Card";

const Cart = () => {
  const context = useContext(CartContext);

  return (
    /* Aca comienza mi render*/
    <div>
      {
        //Aca comienzo mi condicion
        context.Carrito.length == 0 ? (
          <div className="empty-cart">
            <Link to="/" className="link-back">
              <FontAwesomeIcon
                icon={faArrowAltCircleLeft}
                className="left-icon"
              />
              Volver al Home
            </Link>
            <div className="container-empty-cart">
              No hay Productos en el carrito, por favor agregue alguno
            </div>
          </div>
        ) : (
          <div className="cart">
            <div className="cart-view">
              {context.Carrito.map((el, index) => {
                return (
                  <div key={index} className="product-cart">
                <div className="DetailCard">
                  <Card className="bodyD" style={{ width: "18rem" }}>
                    <div>
                      <span
                        onClick={() => {
                          context.RemoveItem(el.producto.id);
                        }}
                      >
                        <FontAwesomeIcon icon={faTimesCircle} className="close-icon"/>
                      </span>
                    </div>
                    <Card.Img
                      className="imgCardD"
                      variant="top"
                      src={`${el.producto.imagen}`}
                    />
                    <Card.Body>
                      <Card.Title>{el.producto.nombre}</Card.Title>
                      <Card.Text>{el.producto.descripcion}</Card.Text>
                      <Card.Text> Cantidad: {el.cantidad} </Card.Text>
                      <Card.Text> Precio: ${el.producto.precio * el.cantidad}</Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              </div>
                );
              })}
            </div>

            <div className="cart-options">
              <span className="precioTotal">Precio total: ${context.PrecioTotal()}</span>
              <br/>
              <button
                onClick={() => {
                  context.Clear();
                }}
                className="button-clear-cart"
              >
                Vaciar
              </button>
              <Link to="/Checkout" className="finish-cart-link">
                Finalizar
              </Link>
            </div>
          </div>
        )
        //Aca termino mi condicion
      }
    </div>
    /* Aca termina mi render*/
  );
};

export default Cart;
