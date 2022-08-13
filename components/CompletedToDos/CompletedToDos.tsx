import React from 'react';
import {Button, Text, TouchableOpacity, View} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../redux/store";
import {increaseCounter, removeTodo, unCompleteTodo} from "../../redux/reducers/toDoReducer";
import styles from './CompleteToDosStyles'


const CompletedToDos = () => {
    const toDos = useSelector((state: RootState) => state.toDo.value);
    const dispatch = useDispatch<AppDispatch>()

    const handleUnCompleteTodo = ({id}) => {
        dispatch(unCompleteTodo({id}));
        dispatch(increaseCounter())
    }
    const handleRemoveTodo = ({id}) => {
        dispatch(removeTodo({id}));
    };

    return (
        <View style={styles.tasksWrapper}>
            <View style={styles.items}>
                {toDos.filter((item) => {
                    return item.completed == 'complete'
                }).map(({name, id}) => (
                    <View>
                        <View style={styles.Item}>
                            <View style={styles.itemContent}>
                                <TouchableOpacity style={styles.itemSquare}></TouchableOpacity>
                                <Text>{name}</Text>
                            </View>
                            <View style={styles.circle}></View>
                        </View>
                        <View style={styles.buttonWrapper}>
                            <Button color={"#FD0000B3"} onPress={() => handleRemoveTodo({id})} title="Remove"></Button>
                            <Button color={'#007F009E'} onPress={() => handleUnCompleteTodo({id})}
                                    title="UnComplete"></Button>
                        </View>
                    </View>
                ))}
            </View>
        </View>
    );
};


export default CompletedToDos;
