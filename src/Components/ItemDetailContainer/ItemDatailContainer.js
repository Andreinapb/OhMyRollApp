import {useEffect, useState, useParams} from "react";
import ItemDatail from '../ItemDetail/ItemDatail';

const ItemDatailContainer = ({productos}) => {

const [Item, setItem] = useState([])

    useEffect(() => {
        new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(productos);
          }, 2000);
        }).then((result) => {
          const i = result.filter(x => x.id === parseInt(productos.id))[0];
          setItem(i)
        });
      }, [productos.id]);

      console.log (Item)

    return (
        <div>
           <ItemDatail Detail ={productos}></ItemDatail> 
        </div>
    )
}

export default ItemDatailContainer