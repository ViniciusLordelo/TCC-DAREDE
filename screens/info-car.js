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


//importação camera\\

import { Camera } from 'expo-camera';

//Services
import api from "../services/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import jwtDecode from "jwt-decode";

//importando biblioteca de icons
import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  TouchableRipple,
  Switch,
 
} from 'react-native-paper';

import {
  DrawerContentScrollView,
  DrawerItem
} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

//Components
import { Button } from "../components/Button";
import { Component } from "react";
import { AutoFocus } from "expo-camera/build/Camera.types";


export default class infoCar extends Component {
 constructor(props) {
  super(props);
   this.state = {
     plate : '',
     brand : '' ,
     year  : '',
     model : '',
     color : '',
     city  : '',
      
   }
 }

 limparCampos = () => {
  this.setState({ 
  plate : '',
  brand : '',
  year : '',
  model : '',
  color : '',
  city : '',

})
}
// função para cadastrar um projeto
 postCar = async () => {
  
    const token = await AsyncStorage.getItem("tokenGerado");
    // const [erroMensagem, setErroMensagem] = useState("")

    // requisição em andamento
    this.setState({ isLoading: true });

    //corpo da requisição//
    let cars = {
      plate: this.state.plate,
      brand: this.state.brand,
      year: this.state.year,
      model: this.state.model,
      color: this.state.color,
      city: this.state.city
      
      //nomerequerimento: this.state.nomerequerimento
    }
    
    //constante para armazenar o valor do token
    
    console.log(cars)
    console.log(token)

    //chamando a api para o método de cadastrar e o corpo da requisição
    const res = await api.post('/Car', cars, {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    })
    
    if (res.status === 200) {
     this.limparCampos;
    }
    console.log(res)

    //   // verifica a resposta da requisição
    //   .then(resposta => {

    //     // caso seja 201
    //     if (resposta.status === 200) {

    //         // retorn message 
    //         console.warn('Carro cadastrado !')
            

    //         // request finalizada
    //         this.setState({ isLoading: false })
    //     }
      
    // })

    // // caso ocorra um erro
    // .catch(erro => {

    //     // exibe uma mensagem 
    //     console.warn(erro)

    //     // requisição finalizada
    //     this.setState({ isLoading: false })
    // })





    /////////////camera/////////////

    // Foto = async () => {{
    // const [type, setType] = useState(Camera.Constants.Type.back)
    // }}

};
render() {

  return(

   

 
      <View style={styles.cadastro__main}>

      <Drawer.Section style={styles.cadastro__icon}>

<DrawerItem 
icon={({color, size}) => (

<Icon
name= "car"
color={'#1B57A6'}
size={100}
/>
)}
label= ""
onPress={() => {}}
/>
<Text style={styles.Title}>ADICIONAR INFORMAÇÕES DO CARRO</Text>
</Drawer.Section>


 {/* Formulário para o cadastro e button */}
 
         <View style={styles.form}>
            <View style={styles.form2}>
            <TextInput
            style={styles.formInput}
            placeholder="Placa do carro"
            onChangeText={plate => this.setState({ plate })}
            required
          />


       <View style={styles.form2}>
          <TextInput
            style={styles.formInput}
            placeholder="Marca"
            onChangeText={brand => this.setState({ brand })}
            required
            />
       </View>


       <View style={styles.form2}>
          <TextInput
            style={styles.formInput}
            placeholder="Ano do Modelo"
            onChangeText={year => this.setState({ year })}
            />
      </View>

      <View style={styles.form2}>
          <TextInput 
            style={styles.formInput}
            placeholder="Modelo"
            onChangeText={model => this.setState({ model })}
            required
            />
      </View>
     

     <View style={styles.form2}>

          <TextInput 
            style={styles.formInput}
            placeholder="Cor"
            onChangeText={color => this.setState({ color })}
            required
            />
    </View>

    <View style={styles.form2}>
          <TextInput 
            style={styles.formInput}
            placeholder="Município"
            onChangeText={city => this.setState({ city })}
            required
            />

          
    </View>
      
      
      {/* camera */}

      {/* <SafeAreaView >
      <Camera 
      style={styles.camera} 
      type={type}>
      </Camera>
      </SafeAreaView> 
     */}


      <Button onPress={this.postCar}>ADICIONAR</Button>
      </View>
      </View>
   
    </View>
);
}

}

const styles = StyleSheet.create({


   cadastro__body: {
    flex: 1,
    height: '100vh',
   
    
  },

  Title: {
    fontWeight: 'bold',
    fontSize: 25,
    color: '#1B57A6',
    paddingBottom: 25,
    paddingTop: 25,
    

   
  },

  cadastro__text: {
    margin: "auto",
    alignItems: "center",
    paddingRight: 64,
    fontFamily: "Courier",
    fontSize: 18,

  },

  cadastro__text1: {
    color: "#33547D",
  },

  cadastro__logo: {
    height: 70,
    resizeMode: "contain",
  },

  cadastro__main:{
      margin : '0 auto'
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
   
    width: 380,
    padding: 20,
    borderBottomWidth:2,
    borderColor:'black',
    

  },

  cadastro__icon: {
    alignItems: "center",
    marginLeft: 50
  },

  form: {
  padding: 50,
  height: 100,
  margin: '10px auto',
  alignItems: "center",
  },

  form2: {
    
    
    },
});