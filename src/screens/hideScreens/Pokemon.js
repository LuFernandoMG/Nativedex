import { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import { getPokemonDetailsById } from "../../api/pokemon";
import Icon from "react-native-vector-icons/FontAwesome5";
import PokemonHeader from "../../components/Pokemon/Header";
import Type from "../../components/Pokemon/Type";
import Stats from "../../components/Pokemon/Stats";
import Favorite from "../../components/Pokemon/Favorite";
import useAuth from "../../hooks/useAuth";

export default function Pokemon(props) {
  const {
    route: { params },
    navigation,
  } = props;
  const { auth } = useAuth();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await getPokemonDetailsById(params.id);
        setPokemon(response);
      } catch (e) {
        navigation.goBack();
      }
    })();
  }, [params]);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (auth ? <Favorite id={pokemon?.id} /> : null),
      headerLeft: () => (
        <Icon
          name="arrow-left"
          color="#fff"
          size={20}
          style={{ marginLeft: 20 }}
          onPress={navigation.goBack}
        />
      ),
    });
  }, [navigation, params, pokemon]);

  if (!pokemon) return null;

  return (
    <ScrollView>
      <PokemonHeader
        name={pokemon.name}
        order={pokemon.order}
        image={pokemon.sprites.other["official-artwork"].front_default}
        type={pokemon.types[0].type.name}
      />
      <Type types={pokemon.types} />
      <Stats stats={pokemon.stats} type={pokemon.types[0].type.name} />
    </ScrollView>
  );
}
