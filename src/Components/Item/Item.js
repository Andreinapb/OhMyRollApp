import React from 'react'
import './Item.css'

const Item = ({item}) => {
    return (
<div className='card'> 

 <img src={item.imagen} className="card-img-top"></img>    
  <div className="card-body">
    <h5 className="card-title">{item.nombre}</h5>
    <p className="card-text">{item.cantidad}{item.precio}</p>
    <a className="btn btn-primary">Detalle</a>
</div>
        </div>
    )
}

export default Item
