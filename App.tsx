import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Task from "./components/Task/Task";
import Controls from "./components/Controls/Controls";

export default function App() {
  return (

    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
<Text style={styles.title}>Today's tasks</Text>
          <View style={styles.items}>
            <Task text={"task 1"}/>
              <Task text={"task 2"}/>
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
