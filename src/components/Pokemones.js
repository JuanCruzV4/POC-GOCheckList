/* eslint-disable comma-dangle */
/* eslint-disable array-callback-return */
/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable quotes */
/* eslint-disable react/jsx-filename-extension */
import React, { useState, useEffect } from "react";

function Pokemones() {
  const [listaPokemon, setPokemon] = useState([]);

  useEffect(() => {
    async function getPokemon() {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon");
      const data = await response.json();

      const pokemons = data?.results;
      pokemons.map(async (pokemon) => {
        const response2 = await fetch(pokemon.url);
        const data2 = new Array(await response2.json());
        setPokemon(data2);
      });
    }
    getPokemon();
  }, []);
  return (
    <>
      <h1>Pokeappi</h1>
      <div>
        {listaPokemon?.map((pokemon) => (
          <div key={pokemon?.id} className="card" style={{ width: "18rem" }}>
            <div className="card-header">
              <h5 className="card-title">{pokemon?.name}</h5>
            </div>
            <div className="card-body">
              <img src={pokemon?.sprites?.front_default} alt={pokemon?.name} />
            </div>
            <div className="card-footer">
              <p className="card-text text-capitalize">asd</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Pokemones;
