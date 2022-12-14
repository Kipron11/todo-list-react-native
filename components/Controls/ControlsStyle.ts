import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    controls: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: 10,
    },
    input: {
        width: 250,
        padding: 15,
        alignItems: "center",
        textAlign: "center",
        backgroundColor: "#FFFFFF",
        borderWidth: 1,
        borderColor: "#F7F7F7",
        borderRadius: 60,
        shadowColor: '#161d28',
        shadowOffset: {width: 1, height: 5},
        shadowOpacity: 0.15,
        shadowRadius: 5,
    },
    button: {

        color: "#C0C0C0",
        justifyContent: "center",
        alignItems: "center",
        height: 60,
        width: 60,
        backgroundColor: "#FFFFFF",
        borderWidth: 1,
        borderColor: "#F7F7F7",
        borderRadius: 52,
        shadowColor: '#161d28',
        shadowOffset: {width: 1, height: 5},
        shadowOpacity: 0.15,
        shadowRadius: 5,
    },
    buttonText: {
        color: "#C0C0C0",
        position: "absolute",
        fontSize: 32,
        top: 5,
    },
    controlsWrapper: {},
})

export default styles;
