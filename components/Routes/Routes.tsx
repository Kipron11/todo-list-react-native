import React from 'react';

import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import TodoApp from "../TodoApp/TodoApp";
import CompletedToDos from "../CompletedToDos/CompletedToDos";

const Stack = createStackNavigator();


export default function Navigate() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Todos"
                    component={TodoApp}
                    options={{title: 'My Task List'}}
                ></Stack.Screen>
                <Stack.Screen
                    name="Completed"
                    component={CompletedToDos}
                    options={{title: 'Completed Task'}}
                ></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    )
};
