import {createSlice} from "@reduxjs/toolkit";
import {Todo} from "../../models/TodoModel";



export const toDoReducer = createSlice({
    name:'todo',
    initialState: {
        count:0,
        value:[] as Todo[],

    },
    reducers : {
        addTodo: (state:{ value:Todo[], count:number}, action:{payload:Todo}) =>
        {

            const todo ={
                id:Math.random()*100,
                name: action.payload.name,
                completed:'inProgress',
                editing:'none',
            };
            state.value.push(todo);
            state.count +=1;

            // state.value.push(action.payload)
        },
        removeTodo:(state:{ value:Todo[], count:number}, action:{payload:Todo}) =>
        {
            state.value = state.value.filter((todo) => todo.id !== action.payload.id);
            state.count -=1;
        },
        editTodo:(state:{ value:Todo[]}, action:{payload:Todo}) =>
        {

        },
       saveTodo:(state:{ value:Todo[]}, action:{payload:Todo}) =>
        {

        },
        completeTodo:(state:{value:Todo[], count:number}, action:{payload:Todo}) =>
        {
            let completedTodo = state.value.filter((todo) => todo.id == action.payload.id)[0];
            completedTodo.completed = 'complete';
            state.count -=1;
            //Todo : In future need to fix state count usage in functions
        }

    },
})

export const { addTodo, removeTodo, editTodo,completeTodo } = toDoReducer.actions;
export default toDoReducer.reducer;
