import React from 'react';
import {Button} from "react-native";

// @ts-ignore
const WelcomeScreen = ({OnPress}) => {
    console.log(1)
    return (
        <div>
          Welcome screen
            <Button title="Start App" onPress={OnPress} ></Button>
        </div>
    );
};

export default WelcomeScreen;
