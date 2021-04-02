import React, { Component } from 'react';
import { StyleSheet, View,Text} from 'react-native';


import colors from '../styles/colors';

 export default function WeekDays (props){
    const {data}=props ;
   return(
       <View>
     <Text style={styles.daysName_text}>{data.dates}</Text>
       </View>
   )
 }
 const styles= StyleSheet.create({
    daysName_text:{
        fontSize:17,
        color:colors.textGrey,
        marginHorizontal:10
    }
 })