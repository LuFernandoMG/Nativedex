import { useState, useEffect, useCallback } from 'react';
import { SafeAreaView, Text, Button } from 'react-native'
import { useFocusEffect } from '@react-navigation/native';
import { getPokemonFavorite } from '../api/favorite'
import { getPokemonDetailsById } from '../api/pokemon';
import PokemonList from '../components/PokemonList';
import useAuth from '../hooks/useAuth';
import NoLogged from '../components/NoLogged';

export default function Favorites() {
  const [pokemons, setPokemons] = useState([]);
  const { auth } = useAuth();

  useFocusEffect(
    useCallback(() => {
      if (auth) {
        (async () => {
          const response = await getPokemonFavorite();
  
          const pokemonsArray = [];
        
          for await (const id of response) {
          const pokemonDetails = await getPokemonDetailsById(id);
          pokemonsArray.push({
            id: pokemonDetails.id,
            name: pokemonDetails.name,
            type: pokemonDetails.types[0].type.name,
            order: pokemonDetails.order,
            img: pokemonDetails.sprites.other['official-artwork'].front_default,
          })
        }
  
        setPokemons(pokemonsArray)
        })();
      }
    }, [auth])
  );


  return (
    !auth ? 
      <SafeAreaView>
        <NoLogged />
      </SafeAreaView> :
      <SafeAreaView>
        <PokemonList pokemons={pokemons}/>
      </SafeAreaView>
  )
}