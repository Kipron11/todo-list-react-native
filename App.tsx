import React, {useState} from 'react';
import store from "./redux/store";
import {Provider} from "react-redux";
import TodoApp from "./components/TodoApp/TodoApp";
import WelcomeScreen from "./components/WelcomeScreen/WelcomeScreen";
import Navigate from './components/Routes/Routes'
import {NavigationContainer} from "@react-navigation/native";



export default function App() {
    const [isLoaded, setIsLoaded] = useState(false)

   if(isLoaded){
        return (
            <Provider store={store}>
                <Navigate></Navigate>
            </Provider>
        )
    } else {
        return( <WelcomeScreen OnPress={()=> setIsLoaded(true)}></WelcomeScreen>
        )
    }};
   // return(
   //     <NavigationContainer>
   //  <Provider store={store}>
   //      <TodoApp></TodoApp>
   //    </Provider>
   //     </NavigationContainer>
// )};



