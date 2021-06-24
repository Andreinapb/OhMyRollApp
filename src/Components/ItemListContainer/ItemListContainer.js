import  {useEffect, useState } from "react";
import ItemList from '../ItemList/ItemList'
import {useParams} from 'react-router-dom'


const ItemListContainer = ({productos}) => {

  const {categoria} = useParams ()

    const [items, setItems] = useState([])

useEffect(
  () => {

    new Promise (  (succes,reject) => {

        setTimeout( () => {
          
          succes (
            productos) }, 
            2000); } )
        .then (
           (result) =>  setItems (result))
}, [] )

   /*  
 */
    return (
<div>
<ItemList items = {productos}></ItemList>
</div>
    )
}

export default ItemListContainer
