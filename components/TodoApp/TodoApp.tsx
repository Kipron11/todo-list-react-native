import React from 'react';
import {Button, View} from 'react-native';
import Controls from "../Controls/Controls";
import TaskList from "../TaskList/TaskList";
import styles from "./TodoAppStyles";
// @ts-ignore
export default function TodoApp({navigation}) {
    const loadCompletedTasks = () => {
        navigation.navigate('Completed')

    }


    return (
        <View style={styles.container}>
            <TaskList title="Today's Tasks"/>
            <Controls/>
            <View>
                <Button title="Check Completed Tasks" onPress={loadCompletedTasks}></Button>
            </View>
        </View>


    );
}

