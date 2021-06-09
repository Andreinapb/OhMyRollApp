
import React, {useState}from 'react'

const ItemCount = () => {

    const Stock = 10
    const Initial = 1
    const [Contador, setContador] = useState (Initial)

    return (
        <div>

<button
onClick = { () => Contador > 0 ? setContador (Contador - 1) : alert ("Por favor Agrega un producto")}>-</button> 

<span>{Contador}</span>

<button onClick = { () => Contador < Stock ? setContador (Contador + 1) : alert ("Se nos ha acabado el stock, por favor vuelve mañana")}>+</button>

<button onClick = { () => alert ("fue agreado a su carrito") }> Agregar Productos</button>

        </div>
    )
}

export default ItemCount
