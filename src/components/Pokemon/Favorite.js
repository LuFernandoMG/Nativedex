import { useState, useEffect } from "react";
import { View } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { addPokemonFavorite, isPokemonFavorite, removePokemonFavorite } from "../../api/favorite"; 

export default function Favorite(props) {
  const { id } = props;
  const [isFavorite, setIsFavorite] = useState(null);
  const [reloadCheck, setReloadCheck] = useState(false);
  const Icon = isFavorite ? FontAwesome : FontAwesome5;

  useEffect(() => {
    (async () => {
      try {
        const response = await isPokemonFavorite(id);
        setIsFavorite(response);
      } catch (e) {
        setIsFavorite(false)
        throw e;
      }
    })();
  }, [id, reloadCheck]);

  const onReloadFavorite = () => {
    setReloadCheck(prev => !prev);
  }

  const addFavorite = async () => {
    try {
      await addPokemonFavorite(id)
      onReloadFavorite();
    } catch (e) {
      throw e;
    }
  }

  const removeFavorite = async () => {
    try {
      await removePokemonFavorite(id);
      onReloadFavorite();
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <View>
      <Icon
        name="heart"
        color="#fff"
        size={20}
        onPress={isFavorite ? removeFavorite : addFavorite}
        style={{ marginRight: 20 }}
      />
    </View>
  );
}
