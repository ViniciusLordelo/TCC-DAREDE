//Packages
import React , {useState} from "react";

import {StyleSheet,Text,View,TextInput,Alert} from "react-native";
//importando fonte de texto
//importando biblioteca de icons
import {Avatar,Title,Caption,Paragraph,Drawer,TouchableOpacity,toucha,Switch,} from 'react-native-paper';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
//Components
import AsyncStorage from '@react-native-async-storage/async-storage';
//Services
import api from "../services/api";


import { Button } from "../components/Button";
import Cadastro from "./Cadastro";

import jwtDecode from "jwt-decode";

//Components

export default function Login({navigation}) {
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [erroMensagem, setErroMensagem] = useState("")
  

  async function signIn() {
    try {
      if (Email.trim() === "" || Password.trim() === "") {
        return;
      }

  
      const res = await api.post("/login", {
        email: Email,
        password: Password,
      });

      const token = res.data.token;

      await AsyncStorage.setItem("tokenGerado", token);
      
     
      navigation.navigate("Navigation");
    } catch (error) {
      console.warn(error);
      setErroMensagem("Email ou senha incorretos!")
    }
  }

 

  return (
    <View style={styles.login__body}>
      <View style={styles.login__main}>
      <Drawer.Section style={styles.login__icon}>

<DrawerItem icon={({color, size}) => (
<Icon name= "lock"color={'#1B57A6'} size={100}/>)} label= "" onPress={() => {}}
/>

<Text style={styles.login__text}>LOGIN</Text>
</Drawer.Section>
        <View style={styles.formField}>

          <TextInput
            style={styles.formInput}
            placeholder="Email"
            onChangeText={(Email) => setEmail(Email)}
          />
        </View>

        <View style={styles.formField}>
          <TextInput 
            style={styles.formInput}
            type='password'
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={(Password) => setPassword(Password)}
          />
        </View>

        <Text style={{color : 'red', margin : '25px auto', fontSize : '18px'}}>{erroMensagem}</Text>
      

      </View>
     
        <Button onPress={signIn}>Entrar</Button>
        
       
    </View>

  );
  
}

const styles = StyleSheet.create({
  login__body: {
    flex: 1,
  },

  login__text: {
    margin: "auto",
    alignItems: "center",
    paddingRight: 64,
    fontSize: 30,
    fontWeight: "bold",
    color: '#1B57A6',

  },

  login__text1: {
    color: "#33547D",
  },

  login__logo: {
    height: 70,
    resizeMode: "contain",
  },

  login__main: {
    padding: 20,
    paddingLeft: 20,
    marginTop: 60,
    marginBottom: "auto",
  },
  
  login__input: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
      
      
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    height: 40,
    marginBottom: 25,
  },

  login__img: {
    height: 119,
  },

 
  formField: {
    marginBottom: 20,
    
  },

  formLabel: {
    fontSize: 18,
    color: "#000",
    marginBottom: 8,
  },

  formInput: {
    backgroundColor: "transparent",
    outline: "none",
    height: 60,
    paddingLeft: 15,
    borderBottomWidth:2,
    borderColor:'#000'
  },

  login__icon: {
    alignItems: "center",
    marginLeft: 50
  },

  container1: {
   flexDirection: "row",
  },

 
});