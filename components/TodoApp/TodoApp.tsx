import React from 'react';
import {Button, StyleSheet, View} from 'react-native';
import Task from "../Task/Task";
import Controls from "../Controls/Controls";


// @ts-ignore
export default function TodoApp({navigation}) {
    const loadCompletedTasks = () =>{
        navigation.navigate('Completed')
    }


    return (
        <View style={styles.container}>
                    <Task title="Today's Tasks"/>
                <Controls />
            <View>
                <Button title="Check Completed Tasks" onPress={loadCompletedTasks}></Button>
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




});
