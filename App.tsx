import React, {useState} from 'react';
import store from "./redux/store";
import {Provider} from "react-redux";
import WelcomeScreen from "./components/WelcomeScreen/WelcomeScreen";
import Navigate from './components/Routes/Routes'


export default function App() {
    const [isLoaded, setIsLoaded] = useState(false)

    if (isLoaded) {
        return (
            <Provider store={store}>
                <Navigate></Navigate>
            </Provider>
        )
    } else {
        return (<Provider store={store}><WelcomeScreen OnPress={() => setIsLoaded(true)}></WelcomeScreen></Provider>
        )
    }
};




