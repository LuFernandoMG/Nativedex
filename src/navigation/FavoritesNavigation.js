import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Favorites from "../screens/Favorites";
import PokemonScreen from '../screens/hideScreens/Pokemon';

const Stack = createNativeStackNavigator();

export default function FavoritesNavigation() {
  return (
    <Stack.Navigator>
        <Stack.Screen name="FavoritesNavigation" component={Favorites} options={{
          title: 'Mis Favoritos',
          headerTransparent: true,
        }} />
        <Stack.Screen name="Pokemon" component={PokemonScreen} options={{
          title: "",
          headerTransparent: true,
        }} />
    </Stack.Navigator>
  )
}