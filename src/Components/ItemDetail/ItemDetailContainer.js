import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import {getFirestore} from '../../firebase/firebase'
import '../../styles/ItemDetailContainer.scss'

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
    <div>
       <article class="row text-center">
            <h2 class="subtitulo col-6 col-lg-12"><span>Tu carrito OH MY ROLL</span></h2>
            <p class="titulo">disfruta de los rolls mas cremosos y deliciosos</p>
        </article>
      <div className="ContainerDetail">
      <ItemDetail Detail={Item}></ItemDetail>
    </div>
    </div>
    
  );
};

export default ItemDetailContainer;
