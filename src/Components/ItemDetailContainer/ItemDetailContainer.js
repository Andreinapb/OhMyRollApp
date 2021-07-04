import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import "./ItemDetailContainer.css";

const ItemDetailContainer = ({ productos }) => {
  const { id } = useParams();

  const [Item, setItem] = useState([]);

  useEffect(() => {
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(productos);
      }, 2000);
    }).then((result) => {
      const i = result.find((x) => x.id === parseInt(id));
      setItem(i);
    });
  }, [Item]);

  return (
    <div className="ContainerDetail">
      <ItemDetail Detail={Item}></ItemDetail>
    </div>
  );
};

export default ItemDetailContainer;
