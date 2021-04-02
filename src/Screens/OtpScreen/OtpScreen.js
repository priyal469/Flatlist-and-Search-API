import React, { Component } from 'react';
import { View, Text, Image, StatusBar } from 'react-native';
import BorderTextInput from '../../Component/BorderTextInput';
import SimpleBtn from '../../Component/SimpleBtn';
import imagePath from '../../constants/imagePath';
import styles from '../OtpScreen/styles';
import strings from '../../constants/lang/en';
import navigationStrings from '../../constants/navigationStrings';
import commonStyles from '../../styles/commonStyles';
import colors from '../../styles/colors';

import validator from '../../utils/validation';
import { showMessage } from 'react-native-flash-message';
import Loader from '../../Component/Loader';
import actions from '../../redux/actions';


export default class OtpScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phoneNumber:'',
            isLoading: false,
            userId: "",
        }
    }
    // OnNavigate=()=>{
    //     const{navigation}=this.props;
    //     navigation.navigate(navigationStrings.OTP_VERIFICATION)
    // }
    _onChangeText=(key)=>{
        console.log("in onChange", key)

        return (value) => {
            console.log("in onChange value", value)

            this.setState({
                [key]: value
            })

        }

    }
    isValidData = () => {
        const {phoneNumber} = this.state;
        const error = validator({ phoneNumber:phoneNumber });
        
        if (error){
            showMessage({
                type: 'danger',
                icon: 'danger',
                message: error,
            });
            return false;
        }

        return true;
    };

    _onSendOtp = () => {
        const { phoneNumber } = this.state;
        const { navigation } = this.props;
        if (this.isValidData()) {
            this.setState({
                isLoading: true,
            });

            actions.onSendOTP({
                contactDetails: {
                    phoneNo: phoneNumber,
                    countryCode: '+91',
                    countryCodeISO: "IN"
                }
            })
                .then(res => {
                    this.setState({
                       
                        isLoading: true
                    });
                    showMessage({
                        type: 'success',
                        icon: 'success',
                        message: 'OTP sent successfully',
                    });
                    navigation.navigate(navigationStrings.OTP_VERIFICATION,{ userId:res.data.userId,})
                })
                .catch(error => {
                    this.setState({

                        isLoading: false
                    });
                    showMessage({
                        type: 'danger',
                        icon: 'danger',
                        message: error.message,
                    });
                });
        }
    };

    render() {
        const { isLoading } = this.state;
        return (
            <View style={styles.mainView}>
                <StatusBar backgroundColor={colors.themeColor} />

                <Image source={imagePath.appLogo} style={styles.appLogo} />
                <Text style={commonStyles.verfication_text}>Verification</Text>
                <Text style={commonStyles.otpText1}>We will send you a One Time Password on your</Text>
                <Text style={styles.otpText2}>phone number</Text>
                <BorderTextInput placeholder={strings.ENTER_YOUR_NUMBER} _onChangeText={this._onChangeText} inputKey={'phoneNumber'} />
                <SimpleBtn simpleBtn_Text={strings.GET_OTP} onPresSimpleBtn={this._onSendOtp} />
                <Loader isLoading={isLoading} />
            </View>
        )

    }
}