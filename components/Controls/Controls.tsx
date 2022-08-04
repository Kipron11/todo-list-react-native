import React, {useState} from 'react';
import {KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {Provider, useDispatch, useSelector} from "react-redux";
import store, {AppDispatch, RootState} from "../../redux/store";
import {addTodo} from "../../redux/reducers/toDoReducer";

const Controls = () => {
    const [inputValue, setInputValue] = useState('');
    const dispatch = useDispatch<AppDispatch>()

    return (
<Provider store={store}>
        <View style={styles.controls}>
            {/*<KeyboardAvoidingView/>*/}
            <TextInput style={styles.input} placeholder={"Write a Task"} value={inputValue} onChangeText={(text)=> setInputValue(text) } ></TextInput>
            <TouchableOpacity style={styles.button}  onPress={()=>{dispatch(addTodo({name:inputValue}))}} >
                <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
        </View>
</Provider>
    );
};
const styles = StyleSheet.create({
    controls:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
    },
    input:{
        width:250,
        padding:15,
        alignItems:"center",
        textAlign:"center",
        backgroundColor: "#FFFFFF",
        borderWidth: 1,
        borderColor:"#F7F7F7",
        borderRadius: 60,
        shadowColor:'#161d28',
        shadowOffset: {width: 1, height: 5},
        shadowOpacity: 0.15,
        shadowRadius: 5,
    },
    button:{
        color:"#C0C0C0",
        justifyContent:"center",
        alignItems:"center",
        height:60,
        width:60,
        backgroundColor: "#FFFFFF",
        borderWidth: 1,
        borderColor:"#F7F7F7",
        borderRadius: 52,
        shadowColor:'#161d28',
        shadowOffset: {width: 1, height: 5},
        shadowOpacity: 0.15,
        shadowRadius: 5,
    },
    buttonText:{
        color:"#C0C0C0",
        position:"absolute",
        fontSize:32,
        top:5,
    },
})
export default Controls;
