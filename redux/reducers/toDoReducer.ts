import {createSlice} from "@reduxjs/toolkit";
import {Todo} from "../../models/TodoModel";



export const toDoReducer = createSlice({
    name:'todo',
    initialState: {
        count:0,
        value:[] as Todo[],
        valueCompleted:[] as Todo[],

    },
    reducers : {
        addTodo: (state:{ value:Todo[], count:number}, action:{payload:Todo}) =>
        {

            const todo ={
                id:Math.random()*100,
                name: action.payload.name,
                completed:false,
                editing:false,
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
            action.payload.editing = !action.payload.editing
        },
       saveTodo:(state:{ value:Todo[]}, action:{payload:Todo}) =>
        {

        },
        completeTodo:(state:{value:Todo[], valueCompleted:Todo[], count:number}, action:{payload:Todo}) =>
        {
            // state.valueCompleted = state.value.filter((todo) => todo.id !== action.payload.id);
            // state.value = state.value.filter((todo) => todo.completed !== action.payload.completed);
            state.valueCompleted = state.value.filter((todo)=> action.payload.id !== todo.id)
        }

    },
})

export const { addTodo, removeTodo, editTodo,completeTodo } = toDoReducer.actions;
export default toDoReducer.reducer;
