import React from "react";
import Item from "./Item";
import "../../styles/Productos.scss";

const ItemList = ({ items }) => {
  return (
      <div className="row" id= 'listado'>
       
          {items.map((item, i) => (
            <Item key={item.id} item={item}></Item>
          ))}
       
      </div>
  );
};

export default ItemList;
