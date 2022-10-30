import React from "react";
import CardPokemon from "./CardPokemon";

const Cards = ({pokemones}) => {

    return (
        <div className='container'>
            <ul>
                {
                    pokemones.map( p =>{
                        <li className="card-item" key={p.name}>
                            <CardPokemon url={p.url}/>
                        </li>
                    })


                }
            </ul>
        </div>

    )
}

export default Cards