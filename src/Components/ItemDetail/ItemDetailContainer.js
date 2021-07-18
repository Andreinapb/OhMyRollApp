import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import {getFirestore} from '../../firebase/firebase'

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [Item, setItem] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const products = db.collection("items");
    products.doc(id)
    .get()
    .then( (el) => {
      setItem({id: el.id, ...el.data()});
    });
  }, [id]);

  return (
    <div className="ContainerDetail">
      <ItemDetail Detail={Item}></ItemDetail>
    </div>
  );
};

export default ItemDetailContainer;
