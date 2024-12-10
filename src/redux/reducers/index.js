import {combineReducers} from "redux";
import usersReducer from "./usersReducer";
import {pokemonsReducer} from "./pokemonsReducer";


export const rootReducer = combineReducers({
    usersReducer,
    pokemonsReducer
})