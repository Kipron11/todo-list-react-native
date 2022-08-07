import React from 'react';
import {Text, View} from "react-native";
import {useSelector} from "react-redux";
import {RootState} from "../../redux/store";

const CompletedToDos = () => {
    const toDos = useSelector((state:RootState) => state.toDo.valueCompleted);

    return (
<View>
    {toDos.map(({name})=>(
        <View>
            <Text>{name}</Text>
        </View>
    ))}
</View>
    );
};

export default CompletedToDos;
