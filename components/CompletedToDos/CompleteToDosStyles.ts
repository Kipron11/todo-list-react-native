import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    Item: {
        justifyContent: "space-between",
        flexDirection: 'row',
        alignItems: "center",
        backgroundColor: "#FFFFFF",
        borderWidth: 1,
        borderColor: "#f7f7f7",
        borderRadius: 10,
        shadowColor: '#161d28',
        shadowOffset: {width: 0, height: 5},
        shadowOpacity: 0.1,
        shadowRadius: 5,
        padding: 15,

    },
    itemContent: {
        flexDirection: 'row',
        gap: 15,
        alignItems: "center"
    },
    itemSquare: {
        width: 24,
        height: 24,
        backgroundColor: "#671010",
        borderRadius: 5,
    },
    itemText: {
        maxWidth: '80%',
    },
    circle: {
        width: 12,
        height: 12,
        borderWidth: 2,
        borderColor: "#671010",
        borderRadius: 5,

    },
    items: {
        flexDirection: "column",
        gap: 20,
        overflow: 'scroll',
        maxHeight: 640
    },

    tasksWrapper: {
        padding: 20,

    },
    buttonWrapper: {
        flexDirection: 'row',
        borderRadius: 10,
        gap: 1,
        marginLeft: 5
    }
})

export default styles
