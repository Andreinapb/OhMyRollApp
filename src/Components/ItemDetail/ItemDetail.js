import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'


const ItemDetail = ({Detail}) => {

    return (
        <div>
<div className="card">
<img src={Detail.imagen} className="DetailImg rounded img-fluid "/>
  <div className="card-body">
    <h5 className="card-title">{Detail.nombre}</h5>
    <h6 className="card-subtitle mb-2 text-muted">{Detail.precio}</h6>
    <p className="card-text">{Detail.descripcion}</p>
    <a className="card-link">Comprar ahora!</a>
  </div>
</div>
        </div>
    )
}

export default ItemDetail
