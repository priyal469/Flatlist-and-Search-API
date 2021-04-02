import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {Home, Search} from "../Screens/index";

import navigationStrings from "../constants/navigationStrings";



const Stack=createStackNavigator();

export default function MainStack(){

    return(
        <React.Fragment>
             
                
                     <Stack.Screen name={navigationStrings.HOME} component={Home} options={{
                headerShown:false}} ></Stack.Screen>

<Stack.Screen name={navigationStrings.SEARCH} component={Search} options={{
                headerShown:false}} ></Stack.Screen>

        </React.Fragment>
    )

}