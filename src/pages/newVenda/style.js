import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f1f1f1'
    },

    label: {
        width: '90%',
        marginTop: 20,
        marginLeft: 'auto',
        marginRight: 'auto',
        fontSize: 16,
      
        fontWeight: 'bold'
    },

    inputText: {
        width: '90%',
        marginTop: 10,
        padding: 10,
        height: 50,
        
        borderRadius: 5,
        
        backgroundColor: '#fff',
        marginLeft: 'auto',
        marginRight: 'auto'
    },

    inputPicker: {
        width: '80%',
        marginTop: 10,
        padding: 10,
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 5,
        marginLeft: 10
    },

    buttonNewTask: {
        left: 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    backgroundColor: '#da251d',
    height: 50,
    width: 50,
    position: 'absolute',
    bottom: 30
        

    },

    iconButton: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 19
    },

    viewHeader: {
        width: '100%',
        height:160,
        backgroundColor: '#da251d',
        marginLeft: 'auto',
        marginRight: 'auto',
        borderBottomEndRadius: 10,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        marginBottom: -20,
        marginTop: -10,
        alignItems: 'center',
        justifyContent:'center', flexDirection:'row',
        marginBottom: 10
      },

      tinyLogo: {
        width: 100,
        height: 100,
        marginTop: 50
      },
});

export default styles;