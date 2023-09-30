import { useState, useEffect } from 'react'
import RickMortList from './RickMortList';

const RickMortContainer = () => {
    const [data, setData] = useState([]);
    const getData = async() => {
        try{
            const response = await fetch(`https://rickandmortyapi.com/api/character`)
            const data = await response.json()
            setData(data.results)
        } catch (error){
            console.log(error);
        }
    } 

    useEffect( () => {
        getData()
    }, []);

    return (
        <RickMortList personajes={data} />
    );
}

export default RickMortContainer;
