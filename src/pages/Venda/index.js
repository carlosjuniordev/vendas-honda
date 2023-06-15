import React, { useState, useEffect, version } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  TextInput,
  Modal,
  Image
} from "react-native";

import firebase from "../../config/firebaseconfig";

import { StatusBar } from 'expo-status-bar';



import { MaterialCommunityIcons, Feather, FontAwesome5, AntDesign, Fontisto } from "@expo/vector-icons";

export default function Venda({ navigation, route }) {
  const [venda, setVenda] = useState([]);
  const database = firebase.firestore();
  const [pago, setPago] = useState()
  const [searchText, setSearchText] = useState('')
  const [modalVisible, setModalVisible] = useState(false);
  const [date, setDate] = useState(null);


  function countCharacters() {
    return venda.length;
  }




function countPago(pago) {
  if(pago === 'Sim' || pago === 'Não'){
    return venda.filter((vendas) => vendas.pagrecbido === pago)
    .length;
  } else {
    return 'Valor inválido';
  }
}



  function logout() {
    firebase.auth().signOut().then(() => {
      navigation.navigate("Login")
    }).catch((error) => {
      // An error happened.
    });
  }

  function deleteTask(id) {

    database.collection(route.params.idUser).doc(id).delete()
  }

  useEffect(() => {
    
    const hoje = new Date()
    const dia = hoje.getDate().toString().padStart(2,'0')
    const mes = String(hoje.getMonth() + 1).padStart(2,'0')
    const ano = hoje.getFullYear()
    const dataAtual = `${dia}/${mes}/${ano}`
    setDate(dataAtual)
    database.collection(route.params.idUser).onSnapshot((query) => {
      const list = [];
      query.forEach((doc) => {
        list.push({ ...doc.data(), id: doc.id });
      });

      if (searchText === '') {
        setVenda(list);
      } else {
        setVenda(
          list.filter((item) => (item.description.toLowerCase().indexOf(searchText.toLowerCase()) > -1))
        )
      }
    });
   
  }, [searchText]);

  console.log(date);

  const handleOrderClick = () => {
    let newList = [...venda];

    newList.sort((a, b) => (a.pagrecbido > b.pagrecbido ? 1 : b.pagrecbido > a.pagrecbido ? -1 : 0));

    setVenda(newList);
  };



  return (




    <View style={styles.container}>
       <StatusBar style="light" />



       



      <View style={styles.viewHeader}>


      <TouchableOpacity
        style={styles.buttonLogout}
        onPress={() => { logout() }}
      >
        <Text style={styles.iconButtonLogout}>
          <MaterialCommunityIcons name="location-exit" size={24} color="#fff" />
        </Text>
      </TouchableOpacity>

      <Image
       style={styles.tinyLogo}
        source={require('../../../assets/novo-mascote.png')}
      />
      
     
      <Text style={{color: '#fff', fontWeight:'bold', fontSize: 25}}>Controle de  Vendas</Text>
      <Text style={{marginTop: 60, marginLeft: -100, color: '#fff'}}> <Fontisto name="date" size={14} color="#fff" /> {date}</Text>
      
     
      

      </View>
      

      <View style={{with: '90%', flexDirection: 'row', marginLeft: 'auto', marginRight: 'auto', marginBottom: 10}}>
        <View style={{borderRadius: 5,width: 110, height: 110, backgroundColor: '#fff', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{fontWeight: 'bold'}}>Total de Vendas</Text>
          <AntDesign style={{margin:5}} name="table" size={44} color="#42a1f5" />
          <Text style={{fontSize: 23,fontWeight: 'bold'}} >{countCharacters()}</Text>

        </View>

        <View style={{borderRadius: 5,width: 110, height: 110, backgroundColor: '#fff', marginLeft: 10, marginRight: 10, flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{fontWeight: 'bold'}}>Pagas</Text>
        <AntDesign style={{margin:5}} name="checkcircle" size={44} color="green" />
        <Text style={{fontSize: 23,fontWeight: 'bold'}} >{countPago('Sim')}</Text>
        </View>

        <View style={{borderRadius: 5,width: 110, height: 110, backgroundColor: '#fff', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{fontWeight: 'bold'}}>Não Pagas</Text>
        <Feather style={{margin:5}} name="x-circle" size={46} color="#da251d" />
        <Text style={{fontSize: 23,fontWeight: 'bold'}}>{countPago('Não')}</Text>
        </View>

      </View>


      <Text style={styles.label}>Buscar Cliente</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '80%', marginLeft: 'auto', marginRight: 'auto' }}>
        <TextInput
          style={styles.inputText}
          placeholder="Ex. Carlos Alberto"
          value={searchText}
          onChangeText={(t) => setSearchText(t)}

        />
        <TouchableOpacity 
        style={{marginTop:15, marginRight: 10}}
        onPress={handleOrderClick}>
          <MaterialCommunityIcons
            name="order-alphabetical-ascending"
            size={42}
            color="#da251d"
          />
        </TouchableOpacity>
      </View>











      <FlatList
        style={{ marginBottom: 10 }}
        showsHorizontalScrollIndicator={false}
        data={venda}
        renderItem={({ item }) => {

          


          let pag = 'Não Pago';
          if (item.pagrecbido === 'Sim') {
            pag = 'Pago';
          }

          

          return (
            <View style={styles.contextAllTask}>

              

              <View
              
              style={{
                width: '90%',
                flexDirection: 'column',
                padding: 10,
                borderBottomWidth: 1,
                borderBottomColor: '#b1bab1',
                backgroundColor: '#FFF',
                borderRadius: 10
              }}>
                
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                  <View style={{justifyContent: 'center', alignItems: 'center'}}>
                  {
                  item.pagrecbido === 'Sim' ?
                  
                  <AntDesign name="checkcircle" size={40} color="green" />
                  :
                  <Text> <Feather name="x-circle" size={42} color="#da251d" /></Text>
                }
                  </View>

                <View style={{width: '70%', marginLeft: 5}}>
                <Text style={styles.txtList}>Cliente </Text>
                <Text style={{ fontSize: 16 }}>{item.description}</Text>
                
                {
                  item.pagrecbido === 'Sim' ?
                  
                  <View></View>
                  :
                  <View style={{flexDirection: 'row'}}>
                    <Text> Data do Pagamento: </Text>
                    <Text style={{fontWeight: 'bold'}}>{item.pagamento}</Text>
                  </View>
                  
                }
                </View>
                <View style={{flexDirection: 'row',  marginLeft: -20}}>
                <TouchableOpacity
                style={{justifyContent: 'center', alignItems: 'center'}}
                  onPress={() => {
                    navigation.navigate("Detalhes", {
                      id: item.id,
                      description: item.description,
                      proposta: item.proposta,
                      datavenda: item.datavenda,
                      pagamento: item.pagamento,
                      pagrecbido: item.pagrecbido,
                      valor: item.valor,
                      moto: item.moto,
                      idUser: route.params.idUser

                    })
                  }}>
                  <FontAwesome5 style={styles.btn} name="edit" size={24} color="#42a1f5" />
                </TouchableOpacity>

                <TouchableOpacity
                  style={{justifyContent: 'center', alignItems: 'center', marginLeft: 25}}
                  onPress={() => {
                    deleteTask(item.id)
                    
                  }}>
                  <AntDesign name="delete" size={24} color="#da251d" />
                </TouchableOpacity>
                </View>
                
                </View>
                


              </View>

              

            </View>
          );

        }}
      ></FlatList>
     
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Nova Venda", { idUser: route.params.idUser })}
      >
        <Text style={styles.iconButton}>+</Text>
      </TouchableOpacity>

    
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#F1F1F1'
  },

  iconButton: {

    marginLeft: '4%',
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold'


  },

  button: {
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

  buttonLogout: {
    right: 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,

    height: 60,
    width: 60,
    position: 'absolute',
    bottom: 80
  },

  iconButtonLogout: {
    color: '#fff',
    fontSize: 25,
    fontWeight: "bold"
  },


  contextAllTask: {
    width: "100%",
    alignItems: 'flex-start',
    marginTop: 15,
    marginLeft: 20,
    marginRight: 'auto',

  },

  deleteTask: {
    justifyContent: 'center',
    paddingLeft: 15
  },

  descriptionTesk: {
    width: '85%',
    alignContent: 'flex-start',
    backgroundColor: "#f5f5f5cf",
    padding: 12,
    paddingHorizontal: 20,
    borderRadius: 50,
    marginBottom: 5,
    marginRight: 15,
    color: "#282b2db5",

  },

  txtList: {
    fontSize: 13,
    fontWeight: 'bold'


  },

  btn: {
  
    left: '80%'
  },

  inputText: {
    width: '80%',
    padding: 10,
    marginTop: 10,
   
    borderRadius: 5,
   
    backgroundColor: '#fff'


  },

  label: {
    width: '90%',

    marginLeft: 'auto',
    marginRight: 'auto',
    fontSize: 16,
    
    fontWeight: 'bold'
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
    justifyContent:'center', flexDirection:'row'
  },

  tinyLogo: {
    width: 100,
    height: 100,
  },


 

});



