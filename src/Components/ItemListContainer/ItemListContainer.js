import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import Greeting from './Greeting'


const ItemListContainer = () => {

    const OnAdd = (producto) => { if (producto >= 1) {alert (`compraste ${producto} productos`)}}
    

    return (
<div>
<Greeting saludo= "Hola mundo, acá irán mis productos!"/>
<ItemCount Initial={1} Stock={10} OnAdd={OnAdd}/>
</div>
    )
}

export default ItemListContainer
