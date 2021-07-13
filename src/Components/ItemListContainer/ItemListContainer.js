import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";
import Greeting from "./Greeting";
import {getFirestore} from '../../firebase/firebase'

const ItemListContainer = () => {
  const { nombre } = useParams();

  const [items, setItems] = useState([]);


  useEffect(() => {
    let mounted = true;

    const db = getFirestore();
    const itemCollection = db.collection('items');
    itemCollection
    .get()
    .then((querySnapshot) => {
        if (mounted) {
            if (querySnapshot.size === 0) {
                console.log("Sin datos");
            }
            let allProducts = querySnapshot.docs.map( el => {
                return {id: el.id, ...el.data()}
            });
            if (nombre) {
                let filter = allProducts.filter( el => el.categoria === nombre);
                setItems(filter);
            } else {
                setItems(allProducts);
            }
        }
    }).catch((error) => console.log(error))
    return () => mounted = false;
}, [nombre]);


  return (
    <div className="ContainerL">
      <Greeting saludo={"Disfruta los mejores Rolls del mundo"}></Greeting>
      <ItemList items={items}></ItemList>
    </div>
  );
};

export default ItemListContainer;
