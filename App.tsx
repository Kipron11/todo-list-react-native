import React from 'react';
import store from "./redux/store";
import {Provider} from "react-redux";
import TodoApp from "./components/TodoApp/TodoApp";


export default function App() {
return(
    <Provider store={store}>
      <TodoApp></TodoApp>
    </Provider>
)};
