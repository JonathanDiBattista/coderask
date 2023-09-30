import React from 'react'

const PersonajeDetail = ({character}) => {
    return (
        <div>
            <img src={character.image} alt={character.name} />
            <p>{character.name}</p>
        </div>
    )
}

export default PersonajeDetail