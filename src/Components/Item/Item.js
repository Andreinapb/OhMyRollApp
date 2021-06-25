import React from 'react'
import './Item.css'
import {Link} from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const Item = ({item}) => {
    return (
        <div className='item'>
    <Card className= 'body'style={{ width: '18rem' }}>
  <Card.Img className='imgCard' variant="top" src={`${item.imagen}`} />
  <Card.Body>
    <Card.Title>{item.nombre}</Card.Title>
    <Card.Text>
     Obten tus delicisos rolls de {item.cantidad} por tal solo ${item.precio}
    </Card.Text>
    <Button variant="light"><Link to={`/item/${item.id}`}>Ver Detalle</Link></Button>
  </Card.Body>
</Card>
        </div>
    )
}

export default Item


{/*  */}