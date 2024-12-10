import {types} from "../types";
export const initialState = {
    pokemons: [],
    loading: false,
    error: null,
}

export const pokemonsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SEARCH_POKEMON_REQUEST:
            return {...state, loading: true, error: null};
        case types.SEARCH_POKEMON_SUCCESS: {
            return {...state, loading: false, pokemons: action.payload};
        }
        case types.SEARCH_POKEMON_FAILURE: {
            return {...state, loading: false, error: action.payload};
        }
        default:
            return state;
    }
}
