import { StyleSheet } from "react-native";

const styles = StyleSheet.create({ 

    Item : {
        flexDirection: 'row',
        marginBottom: 10,
    },
    Ano : {
        backgroundColor: '#1693f4',
        color: '#ffffff',
        padding: 5,
        textAlign: 'center',
        textAlignVertical: 'center'
    }, 
    Texto : {
        width: '90%',
        padding: 10,
        flexWrap: 'wrap',

        textAlignVertical: 'center',
        color: '#ffffff',
        backgroundColor: '#257cc0',
    }
})

export default styles