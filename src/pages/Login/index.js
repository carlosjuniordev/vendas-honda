import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  Image,
} from "react-native";
import styles from "./style";
import  firebase  from "../../config/firebaseconfig/";
import { Feather } from '@expo/vector-icons';









export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erroLogin, setErrorLogin] = useState("");

  const loginFirebase = ()  =>{
    firebase.auth().signInWithEmailAndPassword(email, senha)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    navigation.navigate("Vendas",  { idUser: user.uid} )
    // ...
  })
  .catch((error) => {
    setErrorLogin(true)
    console.log(error)
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
  });
 
  };

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        navigation.navigate("Vendas",  { idUser: user.uid} )
       
       
      } 
    });

  }, []);

  return (
   
      <KeyboardAvoidingView 
      
      style={styles.container}
      >
        <View style={styles.viewlogo}>
       
      
      <Image
        style={styles.tinyLogo}
        source={require('../../../assets/novo-mascote.png')}
      />
      </View>
        <Text style={styles.title}>Controle de Vendas</Text>
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
        {erroLogin === true
        ?
        <View style={styles.contenAlert}>
          <Feather name="alert-circle" size={24} color="#bdbdbd" />
            
            <Text style={styles.warningAlert}>Email ou Senha Invalidos </Text>
        </View>
        :

            <View/>
        }
        {email === '' || senha === '' ? 
    <TouchableOpacity
    disabled={true}
    style={styles.buttonLogin}
    >
        <Text style={styles.txtButtonLogin}>Login</Text>
    </TouchableOpacity>
        :
        <TouchableOpacity
        
        style={styles.buttonLogin}
        onPress={loginFirebase}
        >
            <Text style={styles.txtButtonLogin}>Vendas</Text>
        </TouchableOpacity>

        }

       <Text style={styles.registration}>
        Não tem conta ? 
        <Text style={styles.linkSubscribe} onPress={() => navigation.navigate('Novo Cadastro')}> CADASTRE-SE</Text>
        </Text>
        <View style={{height: 100}}/>
      </KeyboardAvoidingView>
    
  );
}
