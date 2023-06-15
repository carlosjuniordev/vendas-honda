import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, TextInput, TouchableOpacity, StatusBar, Image } from 'react-native';
import firebase from "../../config/firebaseconfig";
import styles from './style';
import { Picker } from '@react-native-picker/picker';

import { Entypo } from '@expo/vector-icons';




export default function NewVenda({ navigation, route }) {

  const [description, setDescription] = useState(null);
  const [proposta, setProposta] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState('Sim');
  const [date, setDate] = useState(null);
  const [pagamento, setPagamento] = useState(null)
  const [moto, setMoto] = useState('BIZ 110I');
  const [valor, setValor] = useState(null)
  const database = firebase.firestore();

  function addTask() {
    database.collection(route.params.idUser).add({
      description: description,
      proposta: proposta,
      pagrecbido: selectedLanguage,
      datavenda: date,
      pagamento: pagamento,
      moto: moto,
      valor: valor,
      status: false
    })
    navigation.navigate("Vendas", { idUser: route.params.idUser });
  }

  useEffect(() => {
    const hoje = new Date()
    const dia = hoje.getDate().toString().padStart(2, '0')
    const mes = String(hoje.getMonth() + 1).padStart(2, '0')
    const ano = hoje.getFullYear()
    const dataAtual = `${dia}/${mes}/${ano}`
    setDate(dataAtual)
    setPagamento(dataAtual)
    console.log(date)
  }, []

  );





  return (

    <View style={styles.container}>
      <StatusBar style="light" />

      <View style={styles.viewHeader}>




        <Image
          style={styles.tinyLogo}
          source={require('../../../assets/novo-mascote.png')}
        />


        <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 25, marginTop: 50 }}>Nova Venda</Text>




      </View>
      <ScrollView>
        <Text style={styles.label}>Nome do Cliente</Text>
        <TextInput
          style={styles.inputText}
          placeholder="Ex: Carlos Alberto Neves"
          onChangeText={setDescription}
          value={description}


        />

        <Text style={styles.label}>Proposta</Text>
        <TextInput
          style={styles.inputText}
          placeholder="Ex: 0000000-0"
          onChangeText={setProposta}
          value={proposta}

        />

        <View style={{ flexDirection: 'row', marginLeft: 12 }}>
          <View style={{ flexDirection: 'column', width: '50%' }}>
            <Text style={styles.label}>Data da Venda</Text>

            <TextInput
              style={styles.inputText}
              placeholder="Ex: 0000000-0"
              onChangeText={setDate}
              value={date}


            />
          </View>
          <View style={{ flexDirection: 'column', width: '50%' }}>
            <Text style={styles.label}>Data do Pagamento</Text>

            <TextInput
              style={styles.inputText}
              placeholder="Ex: 0000000-0"
              onChangeText={setPagamento}
              value={pagamento}


            />
          </View>
        </View>

        <View style={{ flexDirection: 'row', marginLeft: 12 }}>
          <View style={{ flexDirection: 'column', width: '50%' }}>
            <Text style={styles.label}>Pagamento Recebido</Text>
            <Picker
              style={styles.inputPicker}
              selectedValue={selectedLanguage}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedLanguage(itemValue)
              }>
              <Picker.Item label="Sim" value="Sim" />
              <Picker.Item label="Não" value="Não" />
            </Picker>
          </View>

          <View style={{ flexDirection: 'column', width: '50%' }}>
            <Text style={styles.label}>Moto</Text>
            <Picker
              style={styles.inputPicker}
              selectedValue={moto}
              onValueChange={(itemValue, itemIndex) =>
                setMoto(itemValue)
              }>
              <Picker.Item label="BIZ 110i" value="BIZ 110i" />
              <Picker.Item label="BIZ 125" value="BIZ 125" />
              <Picker.Item label="CB 1000R" value="CB 1000R" />
              <Picker.Item label="CB 300F TWISTER ABS" value="CB 300F TWISTER ABS" />
              <Picker.Item label="CB 300F TWISTER CBS" value="CB 300F TWISTER CBS" />
              <Picker.Item label="CB 500F" value="CB 500F" />
              <Picker.Item label="CBR 650R" value="CBR 650R" />
              <Picker.Item label="CG 160 FAN" value="CG 160 FAN" />
              <Picker.Item label="CG 160 START" value="CG 160 START" />
              <Picker.Item label="CG 160 TITAN" value="CG 160 TITAN" />
              <Picker.Item label="CRF 1100L AFRICA TWIN" value="CRF 1100L AFRICA TWIN" />
              <Picker.Item label="CRF 250F" value="CRF 250F" />
              <Picker.Item label="ELITE 125" value="ELITE 125" />
              <Picker.Item label="HONDA ADV" value="HONDA ADV" />
              <Picker.Item label="NC 750X" value="NC 750X" />
              <Picker.Item label="NXR 160 BROS ESDD" value="NXR 160 BROS ESDD" />
              <Picker.Item label="PCX" value="PCX" />
              <Picker.Item label="PCX ABS" value="PCX ABS" />
              <Picker.Item label="POP 110I" value="POP 110I" />
              <Picker.Item label="TRX 420 FM" value="TRX 420 FM" />
              <Picker.Item label="XRE 190" value="XRE 190" />

            </Picker>
          </View>

        </View>

        <Text style={styles.label}>Valor da Parcela</Text>

        <TextInput
          keyboardType='decimal-pad'
          style={styles.inputText}
          placeholder="Ex: 168.91"
          onChangeText={setValor}
          value={valor}


        />





      </ScrollView>
      <TouchableOpacity style={styles.buttonNewTask}
        onPress={() => {
          addTask()
        }}>


        <Entypo name="save" size={24} color="#fff" />
      </TouchableOpacity>
    </View>

  );
}