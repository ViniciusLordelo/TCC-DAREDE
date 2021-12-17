 import React ,{useState, useEffect}from "react";
 import {StyleSheet,Text, View, TextInput} from "react-native";
 import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import jwtDecode from "jwt-decode";
import api from "../services/api";


 export default function Orcamento() {

  const[listBudgets, setListBudgets] = useState([])

     //BuscaOrçamento
async function getBudgets(){

  const valorToken = await AsyncStorage.getItem('tokenGerado');

      axios.get('http://localhost:5000/api/budget/mybudgets/' + jwtDecode(valorToken).jti, {
          headers : {
              'Authorization' : 'Bearer ' + valorToken
          }
      })

      .then(response => {
          if(response.status === 200){
              setListBudgets(response.data)
          }
      })

      .catch((erro) => console.warn(erro))
      
  }

  useEffect(()=>{getBudgets()}, [])

 return(
   <View style={styles.orça_main}>
    <View style={styles.orça_body}>
       <Text style={styles.Title}>Pré-Orçamento </Text>

       <View>

            {
              listBudgets.map((item) => {
                {/* itens dentro do card */}
                return(
                  <View  style=    {styles.car__card}key={item.idBudget}>
                  <Text  style={styles.car__cardInfo} >Modelo: {item.model.nameModel}</Text>
                  <Text  style={styles.car__cardInfo} >Problema: {item.service.problem}</Text>
                  <Text  style={styles.car__cardInfo} >Valor estimado: {item.totalValue} </Text>
                </View>
                )
              })
            }


       </View>
     </View>
   </View>

 )

 }const styles = StyleSheet.create({

    orça_body: {
         flex: 1,
         alignItems: 'center',
       
       },
       Title: {
         fontWeight: 'bold',
         fontSize: 30,
         color: '#1B57A6',
         paddingBottom: 25,
         paddingTop: 25,
         

        
       },
       car__card: {
        backgroundColor: "#1B57A6",
        borderRadius: 6,
        minHeight: 159,
        padding: 20,
        marginBottom: 20,
       },
       car__cardInfo: {
        fontSize: 18,
        color: "#fff",
        paddingTop: 8,
      },

 })
