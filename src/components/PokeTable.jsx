import React, { useContext } from 'react';
import Context from '../context/Context'
// trybe

function PokeTable() {
  const { pokemonData, pokemon } = useContext(Context);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Number</th>
            <th>Name</th>
            <th>Health Points</th>
            <th>Attack</th>
            <th>Defense</th>
            <th>Special Attack</th>
            <th>Special Defense</th>
            <th>Speed</th>
            <th>Total</th>
            <th>Type</th>
            <th>Height</th>
            <th>Weight</th>
            <th>First Hability</th>
            <th>Secound Hability</th>
          </tr>
        </thead>
        <tbody>
          { pokemonData.length > 0 ? pokemonData
          .filter((text) => text.name.toLowerCase().includes(pokemon.toLowerCase()))
          .map((poke) => (
            <tr key={poke.id}>
              <td>
              <img
              src={poke.sprites.front_default}
              alt={poke.name}
              />
              </td>
              <td>{poke.id}</td>
              <td>{poke.name}</td>
              <td>{poke.stats[0].base_stat}</td>
              <td>{poke.stats[1].base_stat}</td>
              <td>{poke.stats[2].base_stat}</td>
              <td>{poke.stats[3].base_stat}</td>
              <td>{poke.stats[4].base_stat}</td>
              <td>{poke.stats[5].base_stat}</td>
              <td>{poke.stats.reduce((acc, curr) => acc + curr.base_stat, 0)}</td>
              <td>{poke.types.length === 2 ? (poke.types[0].type.name + "/" + poke.types[1].type.name) : poke.types[0].type.name }</td>
              <td>{poke.height}</td>
              <td>{poke.weight}</td>
              <td>{poke.abilities[0].ability.name}</td>
              <td>{poke.abilities.length === 2 ? (poke.abilities[1].ability.name) : ''}</td>
            </tr>
          )) : null }
        </tbody>
      </table>
    </div>
  );
}

export default PokeTable;
