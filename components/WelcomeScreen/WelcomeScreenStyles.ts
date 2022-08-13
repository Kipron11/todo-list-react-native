import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    page: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-around",
        padding: 20,
        backgroundColor: "#e6e8eb",
        alignItems: 'center',
    },
    title: {
        color: "#1A1A1A",
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: 24,
        lineHeight: 28,
        marginBottom: 20,
    },
    input: {
        height: 50,
        backgroundColor: "#2195f1",
        color: '#FFFFFF',
        padding: 5,
        fontSize: 24,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: "#55BCF6",
    }


})

export default styles;
