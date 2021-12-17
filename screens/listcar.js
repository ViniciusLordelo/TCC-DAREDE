//Packages
import React, { useState, useEffect } from "react";

import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";

import { Feather } from "@expo/vector-icons";

//Services
import api from "../services/api";

//Components
import { Button } from "../components/Button";

import { BsTrash } from 'react-icons/bs'

export default function Car({ navigation }) {
  const [carList, setCarList] = useState([]);

  async function getCar() {
    //return list has been sucessfull 
    try {
      const token = await AsyncStorage.getItem("tokenGerado");

      const res = await api("/Car/mycar", {
        headers: {
          'Authorization': 'Bearer ' + token
        },
      });

      console.warn(res.data)

      setCarList(res.data);


    } 
    
    //return error for no open
    catch (error) {

      console.warn(error);

    }
  }

  async function deleteCar(item){

    const token = await AsyncStorage.getItem("tokenGerado") 

  const res = api.delete('/Car/' + item.idCar, {
      headers : {
        'Authorization' : 'Bearer ' + token
      }
    })

    if((await res).status === 200){
        getCar()
    }
  }

  useEffect(() => {
    getCar();
  }, []
  );

  async function infocar() {
    try {
      navigation.navigate("infocar");
    } catch (error) {
      console.warn(error);
    }
  }


  return (
    <View style={styles.container}>
    

      <View style={styles.main}>

        <View style={styles.top}>

          <Text style={styles.Title}>MEUS CARROS</Text>

        <TouchableOpacity onPress={getCar()}>
            <Feather name="refresh-ccw" size={24} color="white" />
          </TouchableOpacity> 

        </View>


      </View>

      {
              carList.map((item) => {
                return(
                <View style={styles.car__card}>
            
                      {/* itens dentro do card */}
            
                  <Text style={styles.car__cardInfo}>
                   Marca: {item.brand}
                  </Text>
            
                  <Text style={styles.car__cardInfo}>
                   Modelos: {item.model}
                  </Text>

                  <Text style={styles.car__cardInfo}>
                   Cor: {item.color}
                   </Text>
            
                  <Text style={styles.car__cardInfo}>
                   Placa: {item.plate}
                   </Text>
            
                  <Text style={styles.car__cardInfo}>
                   Ano: {item.year}
                  </Text>
            
                  <BsTrash style={{cursor : 'pointer', margin : '15px 20px'}} onClick={() => deleteCar(item)} size={21} color="white"/>

                </View>
                )
            })
      }



        {/* Button redirect page ./info/car */}

        <Button onPress={infocar} >Cadastrar</Button>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F6F7F9",
    flex: 1,
    alignItems: "center",
  },

  main: {
    // flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
  },

  top: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  Title: {
    // flex: 1,


    fontWeight: 'bold',
    fontSize: 30,
    color: '#1B57A6',
    paddingBottom: 25,
    paddingTop: 25,
  },


  car__card: {
    backgroundColor: "#1B57A6",
    borderRadius: 6,
    minHeight: 140,
    padding: 20,
    marginBottom: 20,
   width: 450,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  carList: {

  },

  car__cardTitle: {
    fontSize: 22,
    color: "#33547D",
  },

  car__cardInfo: {
    fontSize: 18,
    color: "#fff",
    paddingTop: 8,
  },

  

  footer: {
    position: "absolute",
    bottom: 0,
    alignSelf: "center",
    width: "100%",
  },
});