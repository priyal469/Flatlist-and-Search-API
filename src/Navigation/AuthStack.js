import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {OtpScreen, OtpVerification} from "../Screens/index";

import navigationStrings from "../constants/navigationStrings";




const Stack=createStackNavigator();

export default function AuthStack(){

    return(
        <React.Fragment>
            
             <Stack.Screen name={navigationStrings.OTP_SCREEN} component={OtpScreen} options={{headerShown:false}} />

             <Stack.Screen name={navigationStrings.OTP_VERIFICATION} component={OtpVerification} options={{headerShown:false}} />


            
                
                
                     
           
        </React.Fragment>
    )

}