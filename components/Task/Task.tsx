import React from 'react';
import {Text, TouchableOpacity, View, StyleSheet} from "react-native";

const Task = (prop: any) => {
    return (
        <View style={styles.Item}>
            <View style={styles.itemContent}>
                <TouchableOpacity style={styles.itemSquare}></TouchableOpacity>
                <Text style={styles.itemText}>{prop.text}</Text>
            </View>
    <View style={styles.circle}></View>
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
        borderColor:"#F7F7F7",
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
})

export default Task;
