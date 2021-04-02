import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';



export default StyleSheet.create({
    mainView:{
        flex:1,
        padding:20
    },
   appLogo:{
      alignSelf:'center',
        height:70,
        width:'100%',
        resizeMode:'contain',
        marginTop:50
    },
    otpText1:{
        fontSize:10,
        color:colors.textGreyLight,
        alignSelf:'center',
        marginTop:10
    },
    otpText2:{
        fontSize:10,
        
        color:colors.textGreyLight,
        alignSelf:'center',
       
    },
    verfication_text:{
        fontSize:20,
        color:colors.black,
        alignSelf:'center',
        marginTop:10
    }
})