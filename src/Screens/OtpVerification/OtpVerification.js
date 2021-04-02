import React,{Component} from 'react';
import {View,Text,Image,TextInput} from 'react-native';
import BorderTextInput from '../../Component/BorderTextInput';
import SimpleBtn from '../../Component/SimpleBtn';
import imagePath from '../../constants/imagePath';
import styles from '../OtpScreen/styles';
import strings from '../../constants/lang/en';
import navigationStrings from '../../constants/navigationStrings';
import commonStyles from '../../styles/commonStyles';
import actions from '../../redux/actions';
import { showMessage } from 'react-native-flash-message';
import Loader from '../../Component/Loader';
export default class OtpScreen extends Component{
    constructor(props){
        super(props);
        this.state={
isLoading:false,
otpInput: '',

newOtp: 12345,

        }
    }
    
    _onClickSimpleBtn = () => {
        const {userId}=this.props.route.params
        const { navigation } = this.props;
        const { otpInput } = this.state;

        this.setState({
            isLoading: true,
        })
        actions.otpVerify({
            userId,
            otp: otpInput,
            deviceToken: "123",
            registerFrom: Platform.OS.toUpperCase()
        })
            .then(res => {
                this.setState({
                    isModalVisible: false,
                    isLoading: false,
                });
                showMessage({
                    type: 'success',
                    icon: 'success',
                    message: 'otp verified successfully',
                });
                navigation.navigate(navigationStrings.HOME);
            })
            .catch(error => {
                this.setState({
                    isModalVisible: false,
                    isLoading: false
                });
                showMessage({
                    type: 'danger',
                    icon: 'danger',
                    message: error.message,
                });
            });
    }
    render(){
        const{isLoading}=this.state;
        return( 
            <View style={styles.mainView}>
               <Image source={imagePath.appLogo} style={styles.appLogo}/>
               <Text style={commonStyles.verfication_text}>Verification</Text>
               <Text style={commonStyles.otpText1}>You will get a OTP via SMS</Text>
                
                <TextInput placeholder={strings.ENTER_OTP}  onChangeText={text => this.setState({ otpInput: text })}/>
                <SimpleBtn simpleBtn_Text={strings.VERIFY} onPresSimpleBtn={this._onClickSimpleBtn}/>
                   <Loader isLoading={isLoading}/>
            </View>
        )
        
    }
}