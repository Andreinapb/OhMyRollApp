import React from 'react'
import './Greeting.css'

const Greeting = ({saludo}) => {
    return (
        <div className='saludo'>
{saludo}
        </div>
    )
}

export default Greeting
