import React from 'react';
import './CartWidget.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';

const CardWidget = () => {
    return (
        <div>
        <FontAwesomeIcon icon={faShoppingCart} className='icon'/>
        </div>
    )
}

export default CardWidget
