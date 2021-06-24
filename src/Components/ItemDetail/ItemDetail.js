import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'

const ItemDetail = ({Detail}) => {

  const Initial = 0
  const stock = 5
  const OnAdd = (producto) => { if (producto >= 1) {alert (`compraste ${producto} productos`)}}

    return (
        <div>
<div className="card">
<img src={Detail.imagen} className="DetailImg rounded img-fluid " alt=""/>
  <div className="card-body">
    <h5 className="card-title">{Detail.nombre}</h5>
    <h6 className="card-subtitle mb-2 text-muted">{Detail.precio}</h6>
    <p className="card-text">{Detail.descripcion}</p>
    <ItemCount Initial ={Initial} Stock ={stock} OnAdd={OnAdd} > </ItemCount>
    
  </div>
</div>
        </div>
    )
}

export default ItemDetail