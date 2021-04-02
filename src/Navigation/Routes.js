import React,{useContext} from "react";

import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import AuthStack from "./AuthStack";
import MainStack from "./MainStack";
const Stack=createStackNavigator();

export default function Routes(props){
    const{isLoggedIn}=props;
    return(
      
<NavigationContainer>
    <Stack.Navigator>

         {/* {AuthStack()} */}
        {MainStack()}
    </Stack.Navigator>
</NavigationContainer>
    )
}