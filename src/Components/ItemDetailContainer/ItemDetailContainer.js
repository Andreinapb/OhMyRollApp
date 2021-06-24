import {useEffect, useState} from "react";
import ItemDetail from '../ItemDetail/ItemDetail';
import {useParams} from 'react-router-dom'

const ItemDetailContainer = ({productos}) => {

const [Item, setItem] = useState([])

useEffect(() => {
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(productos);
    }, 2000);
  }).then((result) => {
    const i = result.find ( x => x.id == 3 )
    setItem (i)
  });
}, []);

    return (
        <div>
           <ItemDetail className="DetailContainer" Detail ={Item}></ItemDetail> 
        </div>
    )
}

export default ItemDetailContainer