import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  Platform,
} from "react-native";
import styles from "./style";
import  firebase  from "../../config/firebaseconfig/";
import { Feather } from '@expo/vector-icons';




export default function NewUser({ navigation }) {

  

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erroRegister, setErrorRegister] = useState("");

  const  cadastroFirebase = ()  =>{
    firebase.auth().createUserWithEmailAndPassword(email, senha)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    navigation.navigate("Login")
    // ...
  })
  .catch((error) => {
    setErrorRegister(true)
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
  });
 
  };

 return (
  <KeyboardAvoidingView 
      
  style={styles.container}
  >
  
    <TextInput
    style={styles.input}
    placeholder="Digite seu Email "
    type="text"
    onChangeText={(text) => setEmail(text)}
    value={email}
    />

<TextInput
    style={styles.input}
    placeholder="Digite sua Senha "
    secureTextEntry={true}
    type="pa"
    onChangeText={(text) => setSenha(text)}
    value={senha}
    />
    
    {email === '' || senha === '' ? 
<TouchableOpacity
disabled={true}
style={styles.buttonLogin}
>
    <Text style={styles.txtButtonLogin}>Cadastrar</Text>
</TouchableOpacity>
    :
    <TouchableOpacity
    
    style={styles.buttonLogin}
    onPress={cadastroFirebase}
    >
        <Text style={styles.txtButtonLogin}>Cadastrar</Text>
    </TouchableOpacity>

    }

   
    <View style={{height: 100}}/>
  </KeyboardAvoidingView>
  );
}