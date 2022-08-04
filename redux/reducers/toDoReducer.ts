import {createSlice} from "@reduxjs/toolkit";
import {Todo} from "../../models/TodoModel";


export const toDoReducer = createSlice({
    name:'todo',
    initialState: {
        value:[] as Todo[],
    },
    reducers : {
        addTodo: (state: { value : Todo[] }, action:{payload: Todo}) =>
        {
            state.value.push(action.payload)
        },

    },
})

export const { addTodo } = toDoReducer.actions;
export default toDoReducer.reducer;
