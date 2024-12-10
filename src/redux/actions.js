import axios from "axios";
import {types} from "./types";


export function asyncFuncAction() {
    return function () {
        setTimeout(()=>{
            alert('hello')
        },2000)
    }
}
function getUsersAction(users) {
    return {
        type: "USER",
        payload: users,
    }
}
export function fetchUsersAction() {
    return async function(dispatch) {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json()
        dispatch(getUsersAction(data))
    }
}
export const searchUserRequest = () =>({
    type: types.SEARCH_USERS_REQUEST
})
export const searchUserSuccess = (users) =>({
    type: types.SEARCH_USERS_SUCCESS,
    payload: users
})
export const searchUserFailure = (error) =>({
    type: types.SEARCH_USERS_FAILURE,
    payload: error
})
export const fetchUsers = (query) => async (dispatch) => {
    dispatch(searchUserRequest())
    try {
        const response = await axios.get(`https://api.github.com/search/users?q=${query}`)
        dispatch(searchUserSuccess(response.data.items))
    } catch (error) {
        dispatch(searchUserFailure(error.message))
    }
}

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
