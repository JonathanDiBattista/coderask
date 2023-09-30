import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PersonajeDetail from '../Items/PersonajeDetail'


const Personajes = () => {
    const [data,setData] = useState([])
    const {id} = useParams()
    useEffect(()=>{
        getPersonajes()
    },[id])
    const getPersonajes = async() =>{
        try{
            const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
            const data = await response.json()
            setData(data.results)
        } catch(error){
            console.log(error);
        }
    }
    return (
        <div>
            <PersonajeDetail character={data} />
        </div>
    )
}

export default Personajes