import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Task from "../Task/Task";
import Controls from "../Controls/Controls";
import store, {RootState} from "../../redux/store";
import {Provider, useSelector} from "react-redux";


export default function TodoApp() {

    const toDos = useSelector((state:RootState) => state.toDo.value);

    return (

        <View style={styles.container}>
            <View style={styles.tasksWrapper}>
                <Text style={styles.title}>Today's tasks</Text>
                <View style={styles.items}>
                    <Task text={"Test task 1"}/>
                    {toDos.map((item)=> <Text>{item.name}</Text>)}
                </View>
            </View>
            <View style={styles.controlsWrapper} >
                <Controls></Controls>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E8EAED',
        paddingHorizontal:20,
        paddingTop:94,
        paddingBottom:37,
        flexDirection:"column",
        justifyContent:"space-between",
    },
    title:{
        color:"#1A1A1A",
        fontStyle:"normal",
        fontWeight:"700",
        fontSize:24,
        lineHeight:28,
        marginBottom:30,
    },

    tasksWrapper :{

    },
    items:{
        flexDirection:"column",
        gap:20,

    },
    controlsWrapper:{},

});
