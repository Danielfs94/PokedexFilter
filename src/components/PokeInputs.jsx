import React, { useContext } from 'react'
import Context from '../context/Context';

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
    <form>

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
            <option value={0} name="Health Points">Health Points</option>
            <option value={1} name="Attack">Attack</option>
            <option value={2} name="Defense">Defense</option>
            <option value={3} name="Special Attack">Special Attack</option>
            <option value={4} name="Special Defense">Special Defense</option>
            <option value={5} name="Speed">Speed</option>
          </select>
        </label>

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

        <label htmlFor="statsValue">
          <input
            id="statsValue"
            name="statsValue"
            type="number"
            value={ statsValue }
            onChange={ handlePokemonStats }
          />
        </label>

        <button
          type="button"
          onClick={ handleClickFilter }
        >
            Filtrar
        </button>

      </div>

    </form>
  );
}

export default PokeInputs;
