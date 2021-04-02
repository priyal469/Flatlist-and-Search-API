import {StyleSheet} from 'react-native';
import colors from './colors';
import fontFamily from './fontFamily';

export default StyleSheet.create({
    otpText1:{
        fontSize:10,
        color:colors.textGreyLight,
        alignSelf:'center',
        marginTop:10,
        fontFamily:fontFamily.robotoRegular
    },
    
    verfication_text:{
        fontSize:20,
        color:colors.black,
        alignSelf:'center',
        marginTop:10,
        fontFamily:fontFamily.robotoRegular
    }
})