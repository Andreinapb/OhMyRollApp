import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import Greeting from './Greeting'


const ItemListContainer = () => {
    return (
<div>
<Greeting saludo= "Hola mundo, acá irán mis productos!"/>
<ItemCount/>
</div>
    )
}

export default ItemListContainer
