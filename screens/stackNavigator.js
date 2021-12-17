//Packages
import React from "react";

import { createDrawerNavigator } from '@react-navigation/drawer';
//Screens
import Perfil from "./Perfil";
import Orcamento from "./Orcamento";
import infocar from "./info-car";
import listcar from "./listcar";

//Components
const Drawer = createDrawerNavigator();

export default function PerfilNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Perfil"
        component={Perfil}
        options={{
          headerTitle: (props) => <Header {...props} />,
        }}/>

     
    </Drawer.Navigator>
  );
}

 export function OrcamentoNavigator(){
     return(
     <Drawer.Navigator>
        <Drawer.Screen
            name='Orcamento'
             component={Orcamento}
             options={{headerTitle : (props) => <Header {...props}/>
         }}/>
     </Drawer.Navigator>
     );
        }

export function InfoCar(){
    return(
    <Drawer.Navigator>
        <Drawer.Screen
            name='Car Information'
            component={infocar}
            options={{headerTitle : (props) => <Header {...props}/>
        }}/>
    </Drawer.Navigator>
    );
}

export function Listcar(){
  return(
  <Drawer.Navigator>
      <Drawer.Screen
          name='Meus Carros'
          component={listcar}
          options={{headerTitle : (props) => <Header {...props}/>
      }}/>
  </Drawer.Navigator>
  );
}





