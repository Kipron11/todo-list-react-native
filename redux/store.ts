import {configureStore} from "@reduxjs/toolkit";
import toDoReducer from "./reducers/toDoReducer";


const store = configureStore({
    reducer: {
        toDo: toDoReducer,
    },

})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;
