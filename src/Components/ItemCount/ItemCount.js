import React, {useState} from 'react'
import './ItemCount.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlusCircle} from '@fortawesome/free-solid-svg-icons'; 
import {faMinusCircle} from '@fortawesome/free-solid-svg-icons'

const ItemCount = ({Initial, Stock,OnAdd}) => {
    const [Contador, setContador] = useState (Initial)

const Restar = () => {Contador >= 1 ? setContador (Contador - 1) : alert ("Por favor Agrega un producto")}
const Sumar = () => {Contador < Stock ? setContador (Contador + 1) : alert ("Se nos ha acabado el stock, por favor vuelve mañana")}
    
    return (
        <div>

<div className='caja-contador'> 
<div>
<FontAwesomeIcon icon={faMinusCircle} className='icon' onClick = { () => Restar()}></FontAwesomeIcon>
<span className='contador'>{Contador}</span>
<FontAwesomeIcon icon={faPlusCircle} className='icon' onClick = { () => Sumar()}></FontAwesomeIcon>
</div>

<button onClick = { () => OnAdd (Contador) } className='boton' type='button'> { Contador >= 1 ? ('Realizar Compra') : ('Agregar Productos') }</button>
</div>
       
        </div>
    )
}

export default ItemCount
 