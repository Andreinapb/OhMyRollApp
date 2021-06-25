import React from 'react'
import Item from '../Item/Item'
import './ItemList.css'

const ItemList = ({items}) => {

    return (
        <div className='listado'> 
            {

items.map (
    (item,i) => (
  <Item key={item.id} item={item}></Item>
  
        
    )
)
            }
        </div>
    )
}

export default ItemList