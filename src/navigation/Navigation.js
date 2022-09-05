import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';
import FavoritesNavigation from './FavoritesNavigation';
import PokedexNavigation from './PokedexNavigation';
import AccountNavigation from './AccountNavigation';
import pokeball from '../assets/icons/pokeball.png';

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }} initialRouteName="Pokedex">
      <Tab.Screen name='Favorites' component={FavoritesNavigation} options={{
          tabBarLabel: "",
          tabBarIcon: ({ color, size }) => <Icon name="heart" color={color} size={size} />,
      }} />
      <Tab.Screen name='Pokedex' component={PokedexNavigation} options={{
          tabBarLabel: "",
          tabBarIcon: () => renderPokeball(),
      }} />
      <Tab.Screen name='Account' component={AccountNavigation} options={{
          tabBarLabel: "",
          tabBarIcon: ({ color, size }) => <Icon name="user" color={color} size={size} />,
      }} />
    </Tab.Navigator>
  )
}

const renderPokeball = () => {
    return (
        <Image source={pokeball} style={{ width: 75, height: 75, top: -15 }} />
    )
}