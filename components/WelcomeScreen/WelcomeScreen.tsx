import React, {useState} from 'react';
import {Button, Text, TextInput, View} from "react-native";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../redux/store";
import {updateUserName} from "../../redux/reducers/toDoReducer";
import styles from "./WelcomeScreenStyles";

// @ts-ignore

const WelcomeScreen = ({OnPress}) => {
    const dispatch = useDispatch<AppDispatch>()
    const [userName, setUserName] = useState('')
    const handleOnChangeName = (text: string) => {
        setUserName(text)
    }

    const handleStartApp = () => {
        OnPress()
        ;
        dispatch(updateUserName(userName))
    }


    return (
        <View style={styles.page}>
            <View>
                <Text style={styles.title}>Hello, this is my Todo List</Text>
                <Text>In this project i use React Native, Redux, States</Text>
            </View>
            <View>
                <TextInput style={styles.input} value={userName} placeholder={'Please enter your name'}
                           onChangeText={handleOnChangeName}></TextInput>
            </View>
            <Button title="Start App" onPress={handleStartApp}></Button>
        </View>
    );
};


export default WelcomeScreen;
