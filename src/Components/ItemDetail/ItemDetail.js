import {useState} from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'
import Card from 'react-bootstrap/Card'
import {Link} from 'react-router-dom'

const ItemDetail = ({Detail}) => {

  const [Cantidad, setCantidad] = useState(false)

  const Initial = 0
  const stock = 5
  const OnAdd = (producto) => { if (producto >= 1)(setCantidad(true))}

  const MostrarCompra = () => {
    if(Cantidad){
        return(
            <>
                <Link to="/Cart" className="Compra">Agregar al carrito </Link>
            </>
        )
    } else {
        return <ItemCount Initial ={Initial} Stock ={stock} OnAdd={OnAdd} />
    }
}

    return (
        <div>

<Card className= 'body'style={{ width: '18rem' }}>
  <Card.Img className='imgCard' variant="top" src={`${Detail.imagen}`} />
  <Card.Body>
    <Card.Title>{Detail.nombre}</Card.Title>
    <Card.Text>
    {Detail.descripcion}
    </Card.Text>
    <button> {MostrarCompra()}</button>
  </Card.Body>
</Card>

        </div>
    )
}

export default ItemDetail;