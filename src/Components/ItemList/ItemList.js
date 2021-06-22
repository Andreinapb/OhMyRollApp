import React from 'react'
import Item from '../Item/Item'
import './ItemList.css'
import { Link } from 'react-router-dom'

const ItemList = ({items}) => {

    return (
        <div>
            {

items.map (
    (item,i) => (
  <Link to = {`/${item.id}`} >
  <Item key={item.id} item={item}></Item>
  </Link>
        
    )
)
            }
        </div>
    )
}

export default ItemList
