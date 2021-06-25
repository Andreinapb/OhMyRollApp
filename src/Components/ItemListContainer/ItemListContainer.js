import  {useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from '../ItemList/ItemList'

const ItemListContainer = ({productos}) => {

  const {nombre}= useParams()

    const [items, setItems] = useState([])

useEffect(
  () => {

    new Promise (  (succes,reject) => {

        setTimeout( () => {
          
          succes (
            productos) }, 
            2000); } )
        .then (
           (result) =>  {
             if (  nombre !== undefined) {
              const i = result.filter (x => x.categoria == nombre ); setItems (i)
               console.log (items)
             } 
             else {
               setItems (result)
             }
           }
           )
}, [nombre] )

   /*  
 */
    return (
<div>
<ItemList items = {items}></ItemList>
</div>
    )
}

export default ItemListContainer
