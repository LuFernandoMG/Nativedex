import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Pokedex from "../screens/Pokedex";
import Pokemon from "../screens/hideScreens/Pokemon";

const Stack = createNativeStackNavigator();

export default function PokedexNavigation() {
  return (
    <Stack.Navigator>
        <Stack.Screen name="PokedexNavigation" component={Pokedex} options={{
          title: "",
          headerTransparent: true,
        }} />
        <Stack.Screen name="Pokemon" component={Pokemon} options={{
          title: "",
          headerTransparent: true,
        }} />
    </Stack.Navigator>
  )
}