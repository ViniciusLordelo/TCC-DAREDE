import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from "@react-navigation/stack";

//importando telas
import  Login  from "./screens/Login";
// import  Orcamento  from "./screens/Orcamento";
// import Cadastro from "./screens/Cadastro"; 
import { DrawerContent } from "./screens/DrawerContent";  
import Perfil from "./screens/Perfil";
import infocar from "./screens/info-car";
import  StackNavigator  from "./screens/stackNavigator";
import DrawerNavigator from "./screens/DrawerNavigator";
import Cadastro from "./screens/Cadastro";
import menu from "./screens/menu";
import listcar from "./screens/listcar";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export default function App() {
  return (




    <NavigationContainer>
      <Stack.Navigator headerMode="none">
      <Stack.Screen name="menu" component={menu} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="infocar" component={infocar} />
        <Stack.Screen name="listcar" component={listcar} />
        <Stack.Screen
          name="Navigation"
          component={DrawerNavigator}
          headerMode="none"
        />
      </Stack.Navigator>
    </NavigationContainer>






    // <NavigationContainer>
    //   <Drawer.Navigator drawerContent={props => <DrawerContent {...props}></DrawerContent>}headerMode="none">

    //     {/* <Drawer.Screen name="Cadastro" component={Cadastro} /> */}
    //     <Drawer.Screen name="Login" component={Login} />
    //     <Drawer.Screen name="Perfil" component={Perfil}/>
    //     <Drawer.Screen name="Info-car" component={infocar}/>
    //     {/* <Drawer.Screen name="Orcamento" component={Orcamento} headerMode="none" /> */}
    //      {/* <Drawer.Screen name="Main" component={Main} headerMode="none" />  */}
        
    //   </Drawer.Navigator>
    // </NavigationContainer>




  );
}

