import React from "react";
import { useContext } from "react";
import CartContext from "../../Context/CartContext";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

const Cart = () => {
  const context = useContext(CartContext);

  return (
    <div>
      {context.Carrito.length == 0 ? (
        <div>
          <div className="container-empty-cart">
            No hay Productos en el carrito, por favor agregue alguno
          </div>
          <Link to="/" className="link-back">
            Volver al Home
          </Link>
        </div>
      ) : (
        <div className="container-cart">
          <div className="container-back">
            <Link to="/" className="link-back">
              Volver
            </Link>
          </div>


          <div>
        <div>
          <p>
            Precio total: ${context.PrecioTotal()}
          </p>
          <div>
            <button
              onClick={() => {
                context.Clear();
              }}
              className="button-clear-cart"
            >
              Vaciar
            </button>
            <Link to="/Checkout" className="finish-cart-link">Finalizar</Link>
          </div>
        </div>
      </div>


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
                        x
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
                <div ></div>
              </div>
            );
          })}
        </div>
      )}
      
    </div>
  );
};

export default Cart;