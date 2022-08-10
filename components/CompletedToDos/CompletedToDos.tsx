import React from 'react';
import {Button, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../redux/store";
import {completeTodo, increaseCounter, removeTodo, unCompleteTodo} from "../../redux/reducers/toDoReducer";

const CompletedToDos = () => {
    const toDos = useSelector((state:RootState) => state.toDo.value);
    const dispatch = useDispatch<AppDispatch>()

    const handleUnCompleteTodo = ({id}) =>{
        dispatch(unCompleteTodo({id}));
        dispatch(increaseCounter())
    }
    const handleRemoveTodo = ({id}) => {
        dispatch(removeTodo({id}));

    };

    return (
        <View style={styles.tasksWrapper}>
                    <View style={styles.items}>
                        {toDos.filter((item)=> {
                            return item.completed == 'complete'
                        }     ).map(( {name, id} ) => (
                            <View>
                                <View style={styles.Item}>
                                    <View style={styles.itemContent}>
                                        <TouchableOpacity style={styles.itemSquare} ></TouchableOpacity>
                                        <Text>{name}</Text>
                                        </View>
                                    <View style={styles.circle}></View>
                                </View>
                                <View style={styles.buttonWrapper}>
                                    <Button color={"#FD0000B3"} onPress={()=> handleRemoveTodo({id})} title="Remove"></Button>
                                    <Button color={'#007F009E'} onPress={()=> handleUnCompleteTodo({id})} title="UnComplete"></Button>
                                </View>
                            </View>
                        ))}
                </View>

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

    tasksWrapper :{

    },
    buttonWrapper:{
        flexDirection:'row',
        borderRadius:10,
        gap:1,
        marginLeft:5
    }
})

export default CompletedToDos;
