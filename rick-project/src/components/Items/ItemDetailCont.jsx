import React from 'react'
import { useNavigate } from 'react-router-dom'

const ItemDetailCont = ({personaje, id}) => {
    const navigate = useNavigate()
    return (
        <>
            <img onClick={()=> navigate(`/{id}`)} src={personaje.image} alt={personaje.name} />
            <p>{personaje.name}</p>
            <p>{personaje.species}</p>
        </>
    )
}

export default ItemDetailCont