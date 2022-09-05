import { api_host } from "../utils/constants";

export async function getPokemonsApi(endpointUrl) {
    try {
        const url = `${api_host}/pokemon?limit=20&offset=0`;
        const response = await fetch(endpointUrl || url);
        const result = await response.json();
        return result;
    } catch(e) {
        throw e;
    }
}

export async function getPokemonDetailsByUrlApi(url) {
    try {
        const response = await fetch(url);
        const result = await response.json();
        return result;
    } catch(e) {
        throw e;
    }
}

export async function getPokemonDetailsById(id) {
    try {
        const requestedPokemon = `${api_host}/pokemon/${id}`;
        const response = await fetch(requestedPokemon);
        const result = await response.json();
        return result;
    } catch(e) {
        throw e;
    }
}