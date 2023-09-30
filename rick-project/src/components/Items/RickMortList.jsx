import React from 'react'
import ItemDetailCont from './ItemDetailCont'

const RickMortList = ( {personajes} ) => {
    return (
        <>
            {
            personajes.map((personaje) => (
                <div key={personaje.id}>
                    <ItemDetailCont key={personaje.id} personaje={personaje}/>
                </div>
            ))
            }
        </>
    )   
}

export default RickMortList