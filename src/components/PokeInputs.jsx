import React, { useContext } from 'react'
import Context from '../context/Context';
import './PokeInputs.css'

function PokeInputs() {
  const { handleSearchPokemon,
          pokemon,
          handlePokemonStats,
          pokemonStats,
          handleClickFilter,
        } 
  = useContext(Context);

  const { statsPokemon, comparisonPokemonStats, statsValue } = pokemonStats.filterStats[0];

  return (
    <form className="StyleInput">
      <div>
        <label htmlFor="searchPokemon">
        Pokemon Name:
        { " " }
          <input
            type="text"
            id="searchPokemon"
            placeholder="digite o nome do pókemon"
            name="searchPokemon"
            value={ pokemon }
            onChange={ handleSearchPokemon }
          />
        </label>
      </div>
      <div>
        <label htmlFor="statsPokemon">
          <select
            id="statsPokemon"
            name="statsPokemon"
            value={ statsPokemon }
            onChange={ handlePokemonStats }
          >
            <option value={0}>Health Points</option>
            <option value={1}>Attack</option>
            <option value={2}>Defense</option>
            <option value={3}>Special Attack</option>
            <option value={4}>Special Defense</option>
            <option value={5}>Speed</option>
          </select>
        </label>
      </div>
      <div>
        <label htmlFor="comparisonPokemonStats">
          <select
            id="comparisonPokemonStats"
            name="comparisonPokemonStats"
            value={ comparisonPokemonStats }
            onChange={ handlePokemonStats }
          >
            <option>maior que</option>
            <option>igual a</option>
            <option>menor que</option>
          </select> 
        </label>
      </div>
      <div>
        <label htmlFor="statsValue">
          <input
            id="statsValue"
            name="statsValue"
            type="number"
            value={ statsValue }
            onChange={ handlePokemonStats }
          />
        </label>
      </div>
      <div>
        <button
          type="button"
          className="StyleButtonFiltrar"
          onClick={ handleClickFilter }
        >
            Filtrar
        </button>
      </div>
    </form>
  );
}

export default PokeInputs;
