import React from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import Venda from "./src/pages/Venda";
import NewVenda from "./src/pages/newVenda";
import Login from "./src/pages/Login";
import NewUser from "./src/pages/NewUser"

import Details from "./src/pages/Details";

const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
      <Stack.Screen name="Novo Cadastro" component={NewUser}  />
      <Stack.Screen name="Vendas" component={Venda} options={{headerShown: false, headerBackVisible: false }} />
      <Stack.Screen name="Nova Venda" component={NewVenda}  options={{headerShown: false, headerBackVisible: false }}  />
      <Stack.Screen name="Detalhes" component={Details}  options={{headerShown: false, headerBackVisible: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


