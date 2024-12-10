import axios from "axios";
import {types} from "./types";


export const searchPokemonRequest = () =>({
    type: types.SEARCH_POKEMON_REQUEST
})
export const searchPokemonSuccess = (pokemons) =>({
    type: types.SEARCH_POKEMON_SUCCESS,
    payload: pokemons
})
export const searchPokemonFailure = (error) =>({
    type: types.SEARCH_POKEMON_FAILURE,
    payload: error
})
export const fetchPokemonAction = () => async(dispatch) =>{
    dispatch(searchPokemonRequest())
    try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon')
        dispatch(searchPokemonSuccess(response.data.results))
    } catch (error) {
        dispatch(searchPokemonFailure(error.message))
    }
}
