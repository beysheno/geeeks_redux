import {types} from "./types";


export function changeTitleAction(){
    return {
        type: types.CHANGE_TITLE,

    }
}
export function withParamsAction(payload){
    return {
        type: types.WITH_PARAMS,
        payload: payload
    }
}

export const addTask = (task) =>({
    type: types.ADD_TASK,
    payload: task
})

export const toggleTask = (taskId) =>({
    type: types.TOGGLE_TASK,
    payload: taskId
})
export const deleteTask = (id) =>({
    type: types.DELETE_TASK,
    payload: id
})
export const editTask = (id, newText) =>({
    type: types.EDIT_TASK,
    payload: { id, newText }
})