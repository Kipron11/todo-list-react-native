import React, {useState} from 'react';
import {Button, Text, TextInput, TouchableOpacity, View} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../redux/store";
import {completeTodo, decreaseCounter, removeTodo, saveTodo} from "../../redux/reducers/toDoReducer";
import styles from "./TaskListStyles";

const TaskList = ({title}: any) => {
    const toDos = useSelector((state: RootState) => state.toDo.value);
    const dispatch = useDispatch<AppDispatch>()
    const Count = useSelector((state: RootState) => state.toDo.count);
    const userName = useSelector((state: RootState) => state.toDo.userName)

    const [newName, setNewName] = useState('')

    type editType = {
        id: number,
        edit: boolean,
    }

    const [edit, setEdit] = useState<editType>({
        id: 0,
        edit: false
    })

    const handleRemoveTodo = ({id}) => {
        dispatch(removeTodo({id}));
        dispatch(decreaseCounter())
    };

    const handleEditTodo = ({id}) => {
        setEdit({id: id, edit: true})

    };

    const handleSaveTodo = ({id, name}) => {
        setEdit({id: 0, edit: false})
        dispatch(saveTodo({id, name}));
        setNewName('');
    };

    const handleCompleteTodo = ({id}) => {
        dispatch(completeTodo({id}));
        dispatch(decreaseCounter())
    };

    const handleOnChange = (text: string) => {
        setNewName(text);
    }


    return (

        <View style={styles.tasksWrapper}>
            {Count > 0 && (
                <View>
                    <Text style={styles.title}>{title} : {Count}</Text>
                    <View style={styles.items}>
                        {toDos.filter((item) => {
                                return item.completed == 'inProgress'
                            }
                        ).map(({name, id}) => (
                            <View>
                                <View style={styles.Item}>
                                    <View style={styles.itemContent}>
                                        <TouchableOpacity style={styles.itemSquare}></TouchableOpacity>
                                        {
                                            (edit.id !== id) ?
                                                <Text numberOfLines={2} style={styles.itemText}>{name}</Text> :
                                                <TextInput style={styles.editInput} value={newName}
                                                           onChangeText={handleOnChange}></TextInput>
                                        }</View>
                                    <View style={styles.circle}></View>
                                </View>
                                <View style={styles.buttonWrapper}>
                                    <Button color={"#FD0000B3"} onPress={() => handleRemoveTodo({id})}
                                            title="Remove"></Button>
                                    {(!edit.edit) &&
                                        <Button color={"#b9e0f7"} onPress={() => handleEditTodo({id})}
                                                title="Edit"></Button>
                                    }
                                    {(edit.edit && edit.id == id) &&
                                        <Button color={'green'} onPress={() => handleSaveTodo({
                                            id: id, name: newName
                                        })} title="Save"></Button>
                                    }
                                    <Button color={'#007F009E'} onPress={() => handleCompleteTodo({id})}
                                            title="Complete"></Button>
                                </View>
                            </View>

                        ))}
                    </View>
                </View>
            )}
            {Count === 0 && <Text style={styles.title}>Hello {userName}, please write your first task</Text>}
        </View>
    );
};

export default TaskList;
