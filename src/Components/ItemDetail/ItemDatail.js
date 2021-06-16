import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

const ItemDatail = ({Detail}) => {

    return (
        <div>
            <p>Nombre : {Detail.id}</p>
            <p>Precio: {Detail.precio}</p>
            <p>Descripcion: {Detail.cantidad}</p>
        </div>
    )
}

export default ItemDatail
