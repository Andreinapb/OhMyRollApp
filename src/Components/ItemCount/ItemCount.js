
import React, {useState}from 'react'
import './ItemCount.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlusCircle} from '@fortawesome/free-solid-svg-icons'; 
import {faMinusCircle} from '@fortawesome/free-solid-svg-icons'

const ItemCount = () => {

    const Stock = 10
    const Initial = 1
    const [Contador, setContador] = useState (Initial)

    const onAdd = (producto) => {
    alert (`compraste ${producto} productos`)
    }

    return (
        <div>

<div className='caja-contador'> 
<div>
<FontAwesomeIcon icon={faMinusCircle} className='icon' onClick = { () => Contador > 0 ? setContador (Contador - 1) : alert ("Por favor Agrega un producto")}></FontAwesomeIcon>
<span className='contador'>{Contador}</span>
<FontAwesomeIcon icon={faPlusCircle} className='icon' button onClick = { () => Contador < Stock ? setContador (Contador + 1) : alert ("Se nos ha acabado el stock, por favor vuelve mañana")}></FontAwesomeIcon>
</div>

<button onClick = { () => onAdd (Contador) } className='boton' type='button'> Agregar Productos</button>
</div>
       
        </div>
    )
}

export default ItemCount
