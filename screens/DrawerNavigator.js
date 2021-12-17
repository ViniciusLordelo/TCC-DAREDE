import React, { Component } from 'react';

//importação do DraweNavigator
import { createDrawerNavigator } from '@react-navigation/drawer';

//import components necessits
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    ScrollView,
    TouchableOpacity,
  } from "react-native";

// importação das telas para a main
import Perfil from './Perfil'
import infocar from './info-car'
import Orcamento from './Orcamento'
import listcar from './listcar'
import Login from './Login'
// constante para criação da Drawer Navigator
const Drawer = createDrawerNavigator();

// componente de classe p/ Main
export default function DrawerNavigator() {



return (
  
    <Drawer.Navigator  >

        
        <Drawer.Screen style={styles.bottomDrawerSection} name="Perfil"                 component={Perfil}/>
        <Drawer.Screen style={styles.bottomDrawerSection} name="Meus Carros"            component={listcar}/>
        <Drawer.Screen style={styles.bottomDrawerSection} name="Cadastrar carros"       component={infocar} />
        <Drawer.Screen style={styles.bottomDrawerSection} name="Pré orçamentos"         component={Orcamento} >
       

        </Drawer.Screen>
        
    </Drawer.Navigator>
       


)

} const styles = StyleSheet.create({

    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1,
        backgroundColor: 'red'
    },
});
