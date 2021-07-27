import { useState } from 'react';
import CartContext from './CartContext';

const CartProvider = ({ children }) => {

    const [Carrito, setCarrito] = useState([]);

    const AddItem = ( producto, cantidad) => {

        const productoIndex = IsInCart(producto.id);

        if (productoIndex >= 1) {
            const nuevaCantidad = Carrito[productoIndex].cantidad + cantidad;
            const nuevoItem = Carrito.map(function(el){
                if (el.producto.id === producto.id) {
                    el = {producto,  cantidad: nuevaCantidad}
                }
                return el;
            });
            setCarrito(nuevoItem);
        } else {
            setCarrito([
                ...Carrito,
                { producto, cantidad }
            ]);
        }
    };

    const IsInCart = (id) => {
        const indexElement = Carrito.findIndex((el) => el.producto.id === id);
        return indexElement;
    }

    const PrecioTotal = () => {
        let PrecioTotal = 0;
        for (let i = 0; i < Carrito.length; i++) {
            let totalProducto = Carrito[i].producto.precio * Carrito[i].cantidad;
            PrecioTotal = PrecioTotal + totalProducto;
        }
        return PrecioTotal;
    }

    const RemoveItem = (id) => {
        let nuevoCart = Carrito.filter(({producto}) => producto.id !== id )
        setCarrito(nuevoCart);
    };

    const Clear = () => {
        setCarrito([]);
    };

    return(
        <CartContext.Provider value={{ Carrito, AddItem, Clear, PrecioTotal, RemoveItem}}>
            { children }
        </CartContext.Provider>
    );

}

export default CartProvider;