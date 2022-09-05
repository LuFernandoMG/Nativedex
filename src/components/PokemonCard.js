import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Image,
} from "react-native";
import { capitalize } from "lodash";
import getColorByType from "../utils/getColorByType";
import { useNavigation } from "@react-navigation/native";

export default function PokemonCard(props) {
  const { pokemon } = props;
  const navigation = useNavigation();
  const pokemonColor = getColorByType(pokemon.type);
  const bgStyles = { backgroundColor: pokemonColor, ...style.bgStyles}

  const goToPokemon = () => {
    navigation.navigate('Pokemon', { id: pokemon.id })
  };

  return (
    <TouchableWithoutFeedback onPress={goToPokemon}>
      <View style={style.card}>
          <View style={style.spacing}>
              <View style={bgStyles}>
                  <Text style={style.order}>#{`${pokemon.order}`.padStart(3,0)}</Text>
                  <Text style={style.name}>{capitalize(pokemon.name)}</Text>
                  <Image source={{ uri: pokemon.img }} style={style.img} />
              </View>
          </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const style = StyleSheet.create({
    card: {
        flex: 1,
        height: 130
    },
    spacing: {
        flex: 1,
        padding: 5,
    },
    bgStyles: {
        flex: 1,
        borderRadius: 15,
        padding: 10,
    },
    img: {
        position: "absolute",
        bottom: 2,
        right: 2,
        width: 90,
        height: 90,
    },
    name: {
        color: "white",
        fontSize: 15,
        paddingTop: 10,
        fontWeight: "bold",
    },
    order: {
        position: "absolute",
        right: 10,
        top: 10,
        color: "#fff",
        fontSize: 11,
    },
})
