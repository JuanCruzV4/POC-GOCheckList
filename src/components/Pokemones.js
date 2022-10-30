import React, { useState, useEffect } from 'react';
import Cards from './Cards';

const Pokemones = () => {

    const [listaPokemon, setPokemon] = useState([]);

    useEffect(() => {
        async function getPokemon() {
            const response = await fetch('https://pokeapi.co/api/v2/pokemon');
            const data = await response.json();

            setPokemon(data.results);
        }

        getPokemon();
    }, []);

    return (
        <>
            <h1>Pokeappi</h1>
            <div>
                {
                    <Cards pokemones={listaPokemon}/>
                }
            </div>
         </>
    )

}

export default Pokemones;
