import Context from "./Context";
import React, { useEffect, useState } from 'react';
import getPokemon from '../services/getPokemon';

function Provider({ children }) {
  const [pokemon, setPokemon] = useState(1);
  const [pokemonData, setPokemonData] = useState([]);

  async function getPokemonFromApi() {
    const getPokemonResponse = await getPokemon();
      setPokemonData(getPokemonResponse);
    }


  useEffect(() => {
    getPokemonFromApi();
  }, []);

  return (
    <Context.Provider value={{
      pokemon,
      pokemonData,
      getPokemon,
    }} >
      { children }
    </Context.Provider>
  );
}

export default Provider;
