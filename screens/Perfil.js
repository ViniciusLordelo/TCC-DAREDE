import AsyncStorage from "@react-native-async-storage/async-storage";
import React , {Component, useEffect, useState} from 'react';
import {Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Drawer } from "react-native-paper";
import api from "../services/api";

//import { Component } from "react/cjs/react.production.min";



//Components
import { Button } from "../components/Button";
import { DrawerContent } from "./DrawerContent";
import jwtDecode from "jwt-decode";



export default class Perfil extends Component {
  constructor(props){
    super(props);
    this.state = {
      nome : '',
      email : '',
      phone : '',
      plate : '',
    };
  }

  buscarDadosStorage = async () => {
    try {
      const valorToken = await AsyncStorage.getItem('tokenGerado');
      console.warn( jwtDecode(valorToken) );

      if (valorToken !== null) {
        this.setState({ nome : jwtDecode(valorToken).Name });
        this.setState({ email : jwtDecode(valorToken).email });
        this.setState({ phone : jwtDecode(valorToken).phone });
      }

    } catch (error) {
      console.warn(error);
    }
  };

  componentDidMount() {
    this.buscarDadosStorage();
  };

  realizarLogout = async () => {
    try {
      await AsyncStorage.removeItem('tokenGerado');
      this.props.navigation.navigate('Login');
    } catch (error) {
      console.warn(error);
    }
  };

  render(){
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.Title}>Perfil</Text>
    <View >


   <View style={styles.car__card}>

   <View style={styles.space2}></View>
    <Text style={styles.car__cardInfo}>Nome: {this.state.nome}</Text>

    <View style={styles.linha}></View>


  

    <Text style={styles.car__cardInfo}>Telefone: {this.state.phone}</Text>
    <View style={styles.linha}></View>

    
    <Text style={styles.car__cardInfo}>Email: {this.state.email}</Text>

    <View style={styles.linha}></View>
    <View style={styles.space2}></View>

   </View>
    <View style={styles.space1}></View>

    </View>



     {/*listando nome, email e telefone -- perfil */}
     
      </View>
    </View>
  );
}
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F6F7F9",
    flex: 1,
    alignItems: "center",
  },

  main: {
    flex: 1,
    alignItems: "center",
  },

  Title: {
    fontWeight: 'bold',
    fontSize: 30,
    color: '#1B57A6',
    paddingBottom: 25,
    paddingTop: 25,
  
  },

  form_list: {

    

  },
  car__card: {
    backgroundColor: "#1B57A6",
    borderRadius: 6,
    Height: 150,
    marginBottom: 20,
    width: 350,
    shadowColor: "#000",
    alignItems: "center",
  
  },

  car__cardInfo: {
    fontSize: 18,
    color: "white",
    paddingTop: 8,
   

  },

 

  linha: {
    backgroundColor: "white",
    color: "white",
    height: 1,
    width: 270,
    alignItems: "center",
    borderBottomWidth:2,
    borderColor:'#000',
    margin: "auto",


  },
  
  paragraph: {

  alignItems: "center",
  fontFamily:"Outfit" ,
  fontSize: 24,
  margin: "auto",
  display: "flex",
  padding: 6,
  
  },

  paragraphNames: {

    paddingRight: 130,
    fontFamily:"Outfit" ,
    fontSize: 24,
    margin: "auto",
    display: "flex",
    padding: 10,
    color: 'blue'
    
    },

  space: {
  width: 100,
  height: 250,
  },
  space1: {
    width: 100,
    height: 200,
    },
    space2: {
      
      height: 20,
      },

});
