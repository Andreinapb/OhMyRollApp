import  {useEffect, useState } from "react";
import ItemCount from '../ItemCount/ItemCount'
import ItemList from '../ItemList/ItemList'
import Greeting from './Greeting'

const ItemListContainer = ({productos}) => {

    const [items, setItems] = useState([])

useEffect(
  () => {

    new Promise (  (succes,reject) => {
        setTimeout( () => {succes (productos)}, 2000); } )

        .then ( (result) => setItems (result) )

}, [] )

    const OnAdd = (producto) => { if (producto >= 1) {alert (`compraste ${producto} productos`)}}

    return (
<div>
<ItemList items = {productos}></ItemList>
</div>
    )
}

export default ItemListContainer
