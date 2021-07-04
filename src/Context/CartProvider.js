import React from "react";
import { useState } from "react";
import CartContext from "./CartContext";

const CartProvider = ({ children }) => {
  const [Carrito, setCarrito] = useState([]);

  const IsInCart = (id) => {
    const indexElement = Carrito.findIndex((el) => el.producto.id === id);
    return indexElement;
  };

  const AddItem = (producto, cantidad) => {
    const productoIndex = IsInCart(producto.id);

    if (productoIndex >= 0) {
      const CarritoFinal = Carrito[productoIndex].cantidad + cantidad;
      const NuevoProducto = Carrito.map(function (el) {
        if (el.producto.id === producto.id) {
          el = { producto, cantidad: CarritoFinal };
        }
        return el;
      });
      setCarrito(NuevoProducto);
    } else {
      setCarrito([...Carrito, { producto, cantidad }]);
    }
  };

  const PrecioTotal = () => {
    let Total = 0;
    for (let i = 0; i < Carrito.length; i++) {
      let totalProducto = Carrito[i].producto.precio * Carrito[i].precio;
      Total = Total + totalProducto;
    }
    return Total;
  };

  const RemoveItem = (id) => {
    let CarritoNuevo = Carrito.filter(({ producto }) => producto.id !== id);
    setCarrito(CarritoNuevo);
  };

  const Clear = () => {
    setCarrito([]);
  };

  return (
    <div>
      <CartContext.Provider
        value={{ Carrito, AddItem, Clear, PrecioTotal, RemoveItem }}
      >
        {children}
      </CartContext.Provider>
    </div>
  );
};

export default CartProvider;
