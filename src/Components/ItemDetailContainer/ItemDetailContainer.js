import {useEffect, useState, useParams} from "react";
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = ({productos}) => {

const [Item, setItem] = useState([])

    useEffect(() => {
        new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(productos);
          }, 2000);
        }).then((result) => {
          setItem (result[0])
        });
      }, []);


    return (
        <div>
           <ItemDetail className="DetailContainer" Detail ={Item}></ItemDetail> 
        </div>
    )
}

export default ItemDetailContainer