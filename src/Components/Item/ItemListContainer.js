import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { getFirestore } from "../../firebase/firebase";
import "../../styles/ItemListContainer.scss";

const ItemListContainer = () => {
  const { nombre } = useParams();

  const [items, setItems] = useState([]);

  useEffect(() => {
    let mounted = true;

    const db = getFirestore();
    const itemCollection = db.collection("items");
    itemCollection
      .get()
      .then((querySnapshot) => {
        if (mounted) {
          if (querySnapshot.size === 0) {
            console.log("Sin datos");
          }
          let allProducts = querySnapshot.docs.map((el) => {
            return { id: el.id, ...el.data() };
          });
          if (nombre) {
            let filter = allProducts.filter((el) => el.categoria === nombre);
            setItems(filter);
          } else {
            setItems(allProducts);
          }
        }
      })
      .catch((error) => console.log(error));
    return () => (mounted = false);
  }, [nombre]);

  return (
    <div className="row productos">
      <article class="col-12 text-center">
        <h2 class="subtitulo">
          <span>Nuestros productos</span>
        </h2>
        <p class="titulo">Un bocado nunca es suficiente</p>
        <p>
          "Amaso y horneo con amor e ilusión de que a cada uno mis clientes les
          encante tanto como a mi"
        </p>
      </article>
      <ItemList items={items}></ItemList>
    </div>
  );
};

export default ItemListContainer;
