import AsyncStorage from '@react-native-async-storage/async-storage';
import { includes, pull } from 'lodash';
import { FAVORITE_STORAGE } from '../utils/constants';

export async function getPokemonFavorite () {
    try {
        const response = await AsyncStorage.getItem(FAVORITE_STORAGE);
        return JSON.parse(response || []);
    } catch(e) {
        throw e;
    }
}

export async function addPokemonFavorite (id) {
    try {
        const favorites = await getPokemonFavorite();
        favorites.push(id);
        await AsyncStorage.setItem(FAVORITE_STORAGE, JSON.stringify(favorites))
    } catch(e) {
        throw e;
    }
}

export async function isPokemonFavorite (id) {
    try {
        const favorites = await getPokemonFavorite();
        return includes(favorites, id);
    } catch (e) {
        throw e;
    }
}

export async function removePokemonFavorite (id) {
    try {
        const favorite = await getPokemonFavorite(id);
        const newFavorite = pull(favorite, id);
        await AsyncStorage.setItem(FAVORITE_STORAGE, JSON.stringify(newFavorite));
    } catch (e) {
        throw e;
    }
}