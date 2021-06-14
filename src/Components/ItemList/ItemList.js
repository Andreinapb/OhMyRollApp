import React from 'react'
import Item from '../Item/Item'

const ItemList = ({items}) => {

    return (
        <div>
            {

items.map (
    (item,i) => (
        <Item key={i} item={item}></Item>
    )
)
            }
        </div>
    )
}

export default ItemList
