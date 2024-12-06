import {combineReducers} from "redux";
import titleReducer from "./titleReducer";
import contactsReducer from "./contactsReducer";
import taskReducer, {categoriesReducer} from "./taskReducer";


export const rootReducer = combineReducers({
    titleReducer,
    contactsReducer,
    taskReducer,
    categoriesReducer,
})