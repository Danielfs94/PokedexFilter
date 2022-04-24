import Context from "./Context";
import React, { useEffect, useState } from 'react';
import getPokemon from '../services/getPokemon';

function Provider({ children }) {
  const [pokemon, setPokemon] = useState('');
  const [pokemonData, setPokemonData] = useState([]);
  const [pokemonStats, setPokemonStats] = useState({
    filterStats: [
      {
        statsPokemon: 0,
        comparisonPokemonStats: 'maior que',
        statsValue: 0,
      }] });
  const { filterStats } = pokemonStats;

  async function getPokemonFromApi() {
    const getPokemonResponse = await getPokemon();
      setPokemonData(getPokemonResponse);
    }

    const handleSearchPokemon = (event) => {
      setPokemon(event.target.value);
    };

    const handlePokemonStats = (event) => {
      const { value, id } = event.target;
      setPokemonStats({ filterStats:
        [{ ...filterStats[0], [id]: value }] });
    };

    const handleClickFilter  = () => {
      const { statsPokemon, comparisonPokemonStats, statsValue } = filterStats[0];
      /* console.log('Valor do statsPokemon', +statsPokemon); */
      const filterArray = [...pokemonData];
      if (comparisonPokemonStats === 'maior que') {
        setPokemonData(filterArray
          .filter((pokemon) => +pokemon.stats[+statsPokemon].base_stat > +statsValue));
      }
      if (comparisonPokemonStats === 'menor que') {
        setPokemonData(filterArray
          .filter((pokemon) => +pokemon.stats[+statsPokemon].base_stat < +statsValue));
      }
      if (comparisonPokemonStats === 'igual a') {
        setPokemonData(filterArray.filter((pokemon) => +pokemon.stats[+statsPokemon].base_stat === +statsValue));
      }
      const teste = document.querySelector('select')
      document.querySelector('select')
        .childNodes.filter((option) => (console.log(option.innerText) !== console.log(option.innerText) ? option
          .remove() : null));
      /* document.querySelector('select')
      .childNodes.forEach((option) => console.log(option.innerHTML, 'stats', statsPokemon.parentElement)); */
    }

  useEffect(() => {
    getPokemonFromApi();
  }, []);

  return (
    <Context.Provider value={{
      pokemon,
      pokemonData,
      pokemonStats,
      getPokemon,
      handleSearchPokemon,
      handlePokemonStats,
      handleClickFilter,
    }} >
      { children }
    </Context.Provider>
  );
}

export default Provider;
