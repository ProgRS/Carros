import { StyleSheet } from "react-native";

const styles = StyleSheet.create({ 

    Container : {
        padding: 10,
    },
    Buttons : {
        flexDirection: "row",
        width: '100%',
        marginBottom: 10,
        marginLeft: -10,
    },  
    Button : {
        width: '29.8%',
        backgroundColor: '#257cc0',
        padding: 12,
        marginHorizontal: 10,
    },
    CleanButton : {
        width: '100%',
        backgroundColor: '#257cc0',
        padding: 12,
        marginBottom: 10,
    },
    TextButton : {
        color: '#fff',
        textAlign: 'center',
        textTransform: 'uppercase'
    },  
})

export default styles