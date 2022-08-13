import React, {useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from "react-native";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../redux/store";
import {addTodo, increaseCounter} from "../../redux/reducers/toDoReducer";
import styles from './ControlsStyle'

const Controls = () => {
    const [inputValue, setInputValue] = useState('');
    const dispatch = useDispatch<AppDispatch>();
    const handleAddTodo = () => {
        // @ts-ignore
        dispatch(addTodo({name: inputValue}));
        setInputValue('');
        dispatch(increaseCounter())
    };

    const handleOnChange = (text: string) => {
        setInputValue(text)
    }

    return (
        <View style={styles.controlsWrapper}>
            <View style={styles.controls}>
                <TextInput style={styles.input} value={inputValue} placeholder={"Write a TaskList"}
                           onChangeText={handleOnChange}></TextInput>
                <TouchableOpacity style={styles.button} onPress={() => handleAddTodo()}>
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
};

export default Controls;
