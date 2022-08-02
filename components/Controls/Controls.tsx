import React from 'react';
import {KeyboardAvoidingView, StyleSheet, TextInput, TouchableOpacity, View} from "react-native";

const Controls = () => {
    return (
        <View style={styles.controls}>
            {/*<KeyboardAvoidingView/>*/}
            <TextInput style={styles.input} placeholder={"Write a Task"}></TextInput>
            <TouchableOpacity style={styles.button}>
                +
            </TouchableOpacity>
        </View>
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
        fontSize:32,
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
})
export default Controls;
