import  {useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css';
import Greeting from './Greeting'

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
              const i = result.filter (x => x.categoria ===nombre ); setItems (i)
               console.log (items)
             } 
             else {
               setItems (result)
             }
           }
           )
}, [nombre, items] )

   /*  
 */
    return (
<div className='ContainerL'>
<Greeting saludo = {'Disfruta los mejores Rolls del mundo'}></Greeting>
<ItemList items = {items}></ItemList>
</div>
    )
}

export default ItemListContainer
