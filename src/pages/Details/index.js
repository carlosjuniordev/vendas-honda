import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StatusBar, Image } from 'react-native';
import styles from '../Details/style';
import firebase from "../../config/firebaseconfig";
import { Picker } from '@react-native-picker/picker';
import { Feather } from '@expo/vector-icons';

export default function Details({ navigation, route }) {

  const database = firebase.firestore();
  const [descriptionEdit, setDescriptionEdit] = useState(route.params.description);
  const [pagrecbidoEdit, setPagrecbidoEdit] = useState(route.params.pagrecbido);
  const [propostaEdit, setPropostaEdit] = useState(route.params.proposta);
  const [datavendaEdit, setDatavendaEdit] = useState(route.params.datavenda);
  const [pagamentoEdit, setPagamentoEdit] = useState(route.params.pagamento);
  const [valorEdit, setValorEdit] = useState(route.params.valor);
  const [motoEdit, setMotoEdit] = useState(route.params.moto);
  const idTask = route.params.id;


  function EditTask(description, id) {
    database.collection(route.params.idUser).doc(id).update({
      description: descriptionEdit,
      pagrecbido: pagrecbidoEdit,
      proposta: propostaEdit,
      datavenda: datavendaEdit,
      pagamento: pagamentoEdit,
      moto: motoEdit,
      valor: valorEdit

    })
    navigation.navigate("Vendas", { idUser: route.params.idUser });
  }

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <View style={styles.viewHeader}>




        <Image
          style={styles.tinyLogo}
          source={require('../../../assets/novo-mascote.png')}
        />


        <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 25, marginTop: 50 }}>Editar Venda</Text>




      </View>
      <Text style={styles.label}>Nome do Cliente</Text>
      <TextInput
        style={styles.inputText}
        onChangeText={setDescriptionEdit}
        value={descriptionEdit}

      />

      <Text style={styles.label}>Proposta</Text>
      <TextInput
        style={styles.inputText}
        onChangeText={setPropostaEdit}
        value={propostaEdit}

      />


      <View style={{ flexDirection: 'row', marginLeft: 12 }}>
        <View style={{ flexDirection: 'column', width: '50%' }}>
          <Text style={styles.label}>Data da Venda</Text>
          <TextInput
            style={styles.inputText}
            onChangeText={setDatavendaEdit}
            value={datavendaEdit}

          />

        </View>
        <View style={{ flexDirection: 'column', width: '50%' }}>
          <Text style={styles.label}>Data do Pagamento</Text>
          <TextInput
            style={styles.inputText}
            onChangeText={setPagamentoEdit}
            value={pagamentoEdit}

          />

        </View>
      </View>

      <View style={{ flexDirection: 'row', marginLeft: 12 }}>
        <View style={{ flexDirection: 'column', width: '50%' }}>
          <Text style={styles.label}>Pagamento Recebido</Text>
          <Picker
            style={styles.inputText}
            selectedValue={pagrecbidoEdit}
            onValueChange={(itemValue, itemIndex) =>
              setPagrecbidoEdit(itemValue)
            }>
            <Picker.Item label={pagrecbidoEdit} value={pagrecbidoEdit} />
            <Picker.Item label='Sim' value='Sim' />
            <Picker.Item label='Não' value='Não' />



          </Picker>

        </View>

        <View style={{ flexDirection: 'column', width: '50%' }}>

          <Text style={styles.label}>Moto</Text>
          <Picker
            style={styles.inputText}
            selectedValue={motoEdit}
            onValueChange={(itemValue, itemIndex) =>
              setMotoEdit(itemValue)
            }>
            <Picker.Item label={motoEdit} value={motoEdit} />
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
        onChangeText={setValorEdit}
        value={valorEdit}


      />


      <TouchableOpacity style={styles.buttonNewTask}
        onPress={() => {
          EditTask(descriptionEdit, idTask)
        }}>
        <Feather name="edit" size={24} color="#FFF" />
      </TouchableOpacity>
    </View>
  );
}