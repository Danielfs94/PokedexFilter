import axios from 'axios';

const getPokemon = async () => {
  const pokeArray = [];
  try {
   for (let pokemon = 1; pokemon <= 10; pokemon += 1) {
    const endPoint = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    const response = await axios.get(endPoint);
    pokeArray.push(response.data)
  } return pokeArray;
  } catch (error) {
    console.log(error);
  }
  
};

export default getPokemon;
