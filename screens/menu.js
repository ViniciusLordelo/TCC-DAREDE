//Packages
import React , {useState} from "react";

import {StyleSheet,Text,View,TextInput,Alert,Image} from "react-native";
//importando fonte de texto
//importando biblioteca de icons
import {Avatar,Title,Caption,Paragraph,Drawer,TouchableOpacity,toucha,Switch,} from 'react-native-paper';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
//Components
import AsyncStorage from '@react-native-async-storage/async-storage';
//Services
import api from "../services/api";

import Logo from '../assets/Logo.png';
import { Button } from "../components/Button";
import Cadastro from "./Cadastro";

import jwtDecode from "jwt-decode";
export default function menu({navigation}) {

    async function signIn() {
        try {
          navigation.navigate("Login");
        } catch (error) {
          console.warn(error);
        }
      }

    async function Cadastrar() {
        try {
          navigation.navigate("Cadastro");
        } catch (error) {
          console.warn(error);
        }
      }
    return(
  <View style={styles.container}>
        <Image style={styles.Logo1}
        source={require('../assets/Logo1.png')}/>
  <Text style={styles.text}>2 IRMÃOS</Text>
  <Paragraph style={styles.paragraph}>Os melhores orçamentos e sem precisar sair de casa!</Paragraph>
  <View style={styles.view}>
  <Button onPress={signIn}>Entrar</Button>
  <View style={styles.view1}></View>
  <Button onPress={Cadastrar} >Cadastre-se</Button>

  </View>
  
  <Image style={styles.Logo}
        source={require('../assets/Logo.png')}/>
  </View>
    );
} 
const styles = StyleSheet.create({
    container: {
     alignItems: 'center',
     backgroundColor: 'white',
     justifyContent: 'center',
     display: 'flex',
     flex: 1, 
    },

    text: {
        fontSize: '40px',
        fontWeight: 'bold',
        color: '#1B57A6',
        marginBottom: "2px",
    },

    paragraph: {
        fontSize: '14px',
        marginBottom: "80px",
    },

    Logo: {
     width: '200px',
     height: '50px',
     marginTop: '60px',
    },

    Logo1: {
        width: '100px',
        height: '100px',
        color: '#1B57A6',
        marginBottom: "5px",

       },

       view: {
          
       },
       view1: {
        flexDirection: 'row',
        width: '10px'
    },


})
