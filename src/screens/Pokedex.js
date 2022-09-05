import { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native'
import { getPokemonsApi, getPokemonDetailsByUrlApi } from '../api/pokemon';
import PokemonList from '../components/PokemonList';

export default function Pokedex() {
  const [pokemons, setPokemons] = useState([]);
  const [nextUrl, setNextUrl] = useState(null);

  useEffect(() => {
    (async () => {
      await loadPokemos();
    })()
  }, []);

  const loadPokemos = async () => {
    try {
      const response = await getPokemonsApi(nextUrl);
      setNextUrl(response.next);
      const pokemonsArray = [];
      
      for await (const pokemon of response.results) {
        const pokemonDetails = await getPokemonDetailsByUrlApi(pokemon.url);
        pokemonsArray.push({
          id: pokemonDetails.id,
          name: pokemonDetails.name,
          type: pokemonDetails.types[0].type.name,
          order: pokemonDetails.order,
          img: pokemonDetails.sprites.other['official-artwork'].front_default,
        })
      }

      setPokemons([...pokemons, ...pokemonsArray]);
    } catch(e) {
      throw e;
    }
  }

  return (
    <SafeAreaView>
      <PokemonList isNext={nextUrl} loadPokemos={loadPokemos} pokemons={pokemons}/>
    </SafeAreaView>
  )
}