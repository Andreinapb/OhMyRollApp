import { useContext } from "react";
import CartContext from "../../Context/CartContext";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import '../../styles/CardWidget.scss'

function CartWidget() {
  const { Carrito } = useContext(CartContext);

  let totalItems = 0;

  for (let i = 0; i < Carrito.length; i++) {
    totalItems = totalItems + Carrito[i].cantidad;
  }

  return (
    <div className="cart-container">
      {Carrito.length >= 1 && <span className="span-cart">{totalItems}</span>}

      <Link to={`/Cart`} >
        <FontAwesomeIcon icon={faShoppingCart} className="icon"  />
      </Link>
    </div>
  );
}

export default CartWidget;

/* import React from 'react';
import './CartWidget.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';

const CardWidget = () => {
    return (
        <div>


            
       
        </div>
    )
}

export default CardWidget
 */
