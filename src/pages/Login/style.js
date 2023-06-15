

import { Platform, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === "ios" ? 0 : 50,
    },
    title: {
        fontSize: 38,
        color: '#da251d',
        marginBottom: 10,
        fontWeight: 'bold'
    }, 
    input: {
        width: '90%',
        marginTop: 10,
        padding: 10,
        height: 50,
        
        borderRadius: 5,
       
        marginLeft: 'auto',
        marginRight: 'auto',
        backgroundColor: '#fff'
    },

    buttonLogin: {
        width: 200,
        backgroundColor: '#da251d',
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

    linkSubscribe: {
        color: '#1877f2',
        fontWeight: 'bold'
    },
    tinyLogo: {
        width: 300,
        height: 300,
      },
      viewlogo: {
        flexDirection: 'row'
      }

 
});

export default styles;