import React, {useState} from 'react';
import {Button, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../redux/store";
import {addTodo, completeTodo, editTodo, removeTodo} from "../../redux/reducers/toDoReducer";
import {Todo} from "../../models/TodoModel";

const Task = ({title}:any) => {
    const toDos = useSelector((state:RootState) => state.toDo.value);
    const dispatch = useDispatch<AppDispatch>()
    const Count = useSelector((state:RootState) => state.toDo.count);

    const [edit, setEdit] = useState(false)

    const handleRemoveTodo = ({id}) => {
        dispatch(removeTodo({id}));
    };

    const handleEditTodo = ({id}) => {
       // setEdit(true)


    };

    const handleSaveTodo = ({id}) => {
        // setEdit(false)
    };

    const handleCompleteTodo = ({id}) => {
        dispatch(completeTodo({id}));
    };

    return (

        <View style={styles.tasksWrapper}>
            { Count > 0 && (
                <View>
            <Text style={styles.title}>{title} : {Count}</Text>
        <View style={styles.items}>
            {toDos.filter((item)=> {
           return item.completed == 'inProgress'}
            ).map(( {name, id, editing} ) => (
                <View>
                <View style={styles.Item}>
                <View style={styles.itemContent}>
                    <TouchableOpacity style={styles.itemSquare} ></TouchableOpacity>
                    <Text style={styles.itemText}>{name}</Text>
                </View>
                <View style={styles.circle}></View>
                    </View>
                    <View style={styles.buttonWrapper}>
                        <Button color={"#FD0000B3"} onPress={()=> handleRemoveTodo({id})} title="Remove"></Button>
                        { (!edit ) &&
                        <Button color={"#b9e0f7"} onPress={()=> handleEditTodo({id})} title="Edit"></Button>
                        }
                        {edit &&
                            <Button color={'green'} onPress={()=> handleSaveTodo({id})} title="Save"></Button>
                        }
                        <Button color={'#007F009E'} onPress={()=> handleCompleteTodo({id})} title="Complete"></Button>
                    </View>
                </View>

            ))}
        </View>
                </View>
                )}
            {Count=== 0 && <Text style={styles.title}>No Todos</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    Item:{
        justifyContent:"space-between",
        flexDirection:'row',
        alignItems:"center",
        backgroundColor: "#FFFFFF",
        borderWidth: 1,
        borderColor:"#f7f7f7",
         borderRadius: 10,
        shadowColor:'#161d28',
        shadowOffset: {width: 0, height: 5},
        shadowOpacity: 0.1,
        shadowRadius: 5,
        padding:15,

},
    itemContent:{
        flexDirection:'row',
        gap:15,
        alignItems:"center"
    },
    itemSquare:{
        width: 24,
        height: 24,
        backgroundColor:"#bae2f9",
        borderRadius:5,
    },
    itemText:{
        maxWidth:'80%',
    },
    circle:{
        width: 12,
        height: 12,
        borderWidth: 2,
        borderColor:"#55BCF6",
        borderRadius: 5,

    },
    items:{
        flexDirection:"column",
        gap:20,

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

    buttonWrapper:{
        flexDirection:'row',
        borderRadius:10,
        gap:1,
        marginLeft:5
    }
})

export default Task;
