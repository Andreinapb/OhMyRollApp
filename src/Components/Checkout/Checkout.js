import { Link } from "react-router-dom";
import {useContext} from 'react';
import CartContext from '../../Context/CartContext';
import { useState } from 'react';
import { getFirestore } from '../../firebase/firebase';
import firebase from 'firebase/app';
import "firebase/firestore";
import '../../styles/Checkout.scss'


const Checkout = () => {

    const {Carrito, Clear, PrecioTotal} = useContext(CartContext);
    const db = getFirestore();
    const [lastId, setLastId] = useState('');
    const [isLoad, setIsLoad] = useState(true);
    const [priceOrder, setPriceOrder] = useState(0);
    const [emptyInput, setEmptyInput] = useState(false);
    const [wrongEmail, setWrongEmail] = useState(false);

    const checkedData = (e) => {

        e.preventDefault();

        const checkedEmail = document.getElementById('user-check-email').value;
        const email = document.getElementById('user-email').value;

        if (email === '' || checkedEmail === '') {
            setEmptyInput(true);
        } else {
            setEmptyInput(false);
            if (email === checkedEmail) {
                setWrongEmail(false);
                createNewOrder();
            } else {
                setWrongEmail(true);
            }
        }

    }

    const createNewOrder = () => {
        const newOrder = {
            user: {
                name: document.getElementById('user-name').value,
                number: parseInt(document.getElementById('user-number').value),
                email: document.getElementById('user-email').value},
            products: listProductsCart(),
            total: PrecioTotal(),
            dateCreate: firebase.firestore.Timestamp.fromDate(new Date())
        }
        const orders = db.collection('orders');
        orders.add(newOrder).then( (resp) => {
            setLastId(resp.id);
            setTimeout(() => {
                setIsLoad(false);
            }, 4000);
        });
        Clear();
    }

    const listProductsCart = () => {
        let products = [];
        for (let i = 0; i<Carrito.length; i++) {
            const product = {
                id: Carrito[i].producto.id,
                nombre: Carrito[i].producto.nombre,
                cantidad: Carrito[i].cantidad,
                precio: Carrito[i].producto.precio * Carrito[i].cantidad
            }
            products.push(product);
        }
        return products;
    }

    const CheckoutOrder = () => {
        return(
            <div className="container-checkout">
                <h1 className="title-checkout">CONFIRMACIÓN</h1>
                <p className="text-checkout">Por favor complete los siguientes datos para finalizar su compra.</p>
                <br/>
                <form id="form-checkout" className="form-checkout">
                    <div className="div-input">
                        <label className="label-input">Nombre y Apellido: </label>
                        <br/>
                        <input id="user-name" className="form-input" type="text" required autoComplete="off"></input>
                    </div>
                    <div className="div-input">
                        <label className="label-input">Teléfono: </label>
                        <br/>
                        <input id="user-number" className="form-input" type="number" required autoComplete="off"></input>
                    </div>
                    <div className="div-input">
                        <label className="label-input">Correo:</label>
                        <br/>
                        <input id="user-email" className="form-input" type="email" required autoComplete="off"></input>
                    </div>
                    <div className="div-input">
                        <label className="label-input">Reingrese su correo:</label>
                        <br/>
                        <input id="user-check-email" className="form-input" type="email" required autoComplete="off"></input>
                    </div>
                    {
                        emptyInput ?
                        <span className="warning-text">Por favor completar todos los campos.</span>
                        : wrongEmail &&
                        <span className="warning-text">El correo no coincide.</span>
                    }
                    <button onClick={(e) => checkedData(e)}className="button-form" type="submit">Confirmar</button>
                    
                </form>
            </div>
        );
    }

    const WaitingMessage = () => {
        return(
            <div className="waiting-div">
                <p>Estamos procesando su compra. Por favor aguarde...</p>
            </div>
        );
    }

    const OrderFinalMessage = () => {
        const orderUser = db.collection('orders').doc(lastId);
        orderUser.get().then( resp => {
            setPriceOrder(resp.data().total);
        });

        return(
            <div className="container-order-message">
                <p className="thanks-message">Gracias por su compra!</p>
                <p className="text-order-message">Numero de orden: {lastId}</p>
                <p className="price-order-message">Precio: ${priceOrder}</p>
                <Link to="/" className="link-order-message">Cerrar</Link>
            </div>
        );
    }


    return(
        <>
        {
            lastId === '' ?
            <CheckoutOrder />
            :
            isLoad === true ?
            <WaitingMessage />
            :
            <OrderFinalMessage />
        }
        </>
    );
}

export default Checkout;