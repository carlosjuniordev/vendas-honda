
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: Platform.OS === "ios" ? 0 : 50,
        },
        title: {
            fontSize: 48,
            color: 'red',
            marginBottom: 10,
            fontWeight: 'bold'
        }, 
        input: {
            width: 300,
            marginTop: 10,
            padding: 10,
            height: 50,
            borderBottomWidth: 1,
            borderBottomColor: 'red',
            marginLeft: 'auto',
            marginRight: 'auto'
        },
    
        buttonLogin: {
            width: 200,
            backgroundColor: 'red',
            height: 50,
            marginTop: 10,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 50
        },
    
        txtButtonLogin: {
            color: '#fff',
            fontSize: 20,
            fontWeight: 'bold'
        },
    
        contenAlert: {
            marginTop: 20,
            flexDirection: 'row',
            justifyContent: 'center',
            alignSelf: 'center'
    
        },
    
        warningAlert: {
            paddingLeft: 10, 
            color: '#bdbdbd',
            fontSize: 16
        },
    
    
        registration: {
            marginTop: 10
        },
    

 
});

export default styles;