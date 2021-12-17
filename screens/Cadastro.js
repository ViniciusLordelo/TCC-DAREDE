//Packages
import React, {useState, useEffect} from "react";
import {
  StyleSheet,
  Text,
  View,  
  TextInput,
  Animated,
  SafeAreaView,
 
} from "react-native";

import axios from 'axios';
import { Button } from "../components/Button";


//importando biblioteca de icons
import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  TouchableRipple,
  Switch
} from 'react-native-paper';

import {
  DrawerContentScrollView,
  DrawerItem
} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

//Components



export default function Cadastro() {
  

const[email, setEmail] = useState("")
const[password, setPassword] = useState("")
const[phone, setPhone] = useState("")
const[name, setName] = useState("")

const TypeUser = 2

    const[erroMensagem, setErroMensagem] = useState("");



    async function handleSubmit({ navigation }) {
  
      try {
      axios.post('http://localhost:5000/api/User/create-account', {
          name : name,
          email : email,
          password : password,
          phone : phone,
          imagePlate : "",
          typeUser : TypeUser
        })
        
        .then(response => {
          if(response.status === 200){
            console.log('Usuário cadastrado com sucesso!')
            navigation.navigate("/Login");
          }
        })

        .catch(() => setErroMensagem("Erro ao cadastrar usuário! - Tente novamente"))

        } catch (error) {
        throw new Error(error.message)
        
      }
    }
return (
    <View style={styles.cadastro__body}>

 
      <View style={styles.cadastro__main}>
      <Drawer.Section style={styles.cadastro__icon}>

<DrawerItem 
icon={({color, size}) => (

<Icon
name= "account-plus"
color={'#1B57A6'}
size={100}
/>
)}
label= ""
onPress={() => {}}
/>

<Text style={styles.cadastro__text}>CADASTRE-SE</Text>
</Drawer.Section>
        <View style={styles.formField}>
          
          <TextInput
            style={styles.formInput}
            placeholder="Name Full"
            onChangeText={(name) => setName(name)}
          
          />
        </View>

        <View style={styles.formField}>
          <TextInput 
            style={styles.formInput}
            placeholder="Email"
            onChangeText={(email) => setEmail(email)}
          />
        </View>

        <View style={styles.formField}>
          <TextInput 
            style={styles.formInput}
            placeholder="Password"
            type='password'
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
          />
        </View>

        <View style={styles.formField}>
          <TextInput 
            style={styles.formInput}
            placeholder="Phone"
            onChangeText={(phone) => setPhone(phone)}
          />
          <Text style={{color : 'red', margin : '20px auto'}}>{erroMensagem}</Text>

        </View>
        
               <Button 
                onPress={handleSubmit}
               >
                CADASTRAR
               </Button>

     
      </View>
    </View>

  );
  
}

const styles = StyleSheet.create({


   cadastro__body: {
    flex: 1,
  },

  cadastro__text: {
    margin: "auto",
    alignItems: "center",
    paddingRight: 64,
    fontWeight: 'bold',
    fontSize: 30,
    color: '#1B57A6',
  },

  cadastro__text1: {
    color: "#33547D",
  },

  cadastro__logo: {
    height: 70,
    resizeMode: "contain",
  },

  cadastro__main: {
    padding: 20,
    paddingLeft: 20,
    marginTop: 60,
    marginBottom: "auto",
  },
  
  cadastro__input: {
    shadowColor: "black",
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

  cadastro__img: {
    height: 119,
  },

 
  formField: {
    marginBottom: 20,
  },

  formLabel: {
    fontSize: 18,
    color: "black",
    marginBottom: 8,
  },

  formInput: {
  
    height: 60,
    paddingLeft: 20,
    borderBottomWidth:2,
    borderColor:'black'
  },

  cadastro__icon: {
    alignItems: "center",
    marginLeft: 50
  },
  Camera: {
  height: "100%",
  width: "100%",

  },
 
});