import React from 'react'
import './Item.css'
import {Link} from 'react-router-dom'

const Item = ({item}) => {

    return (
<div className='card-Item'> 

 <img src={item.imagen} className="card-img-top" alt=""></img>    
  <div className="card-body">
    <h5 className="card-title">{item.nombre}</h5>
    <p className="card-text">{item.cantidad}{item.precio}</p>
   <Link to={`/item/${item.id}`}>Ver Detalle</Link>
</div>
        </div>
    )
}

export default Item
