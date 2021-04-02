import React, { Component } from 'react';
import { View, Text } from 'react-native'
import Routes from './src/Navigation/Routes';
import SplashScreen from 'react-native-splash-screen'
import FlashMessage from 'react-native-flash-message';
// import {Provider} from 'react-redux';
// import FlashMessage, { showMessage } from 'react-native-flash-message';
// import store from './src/redux/store';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }


  componentDidMount() {

    SplashScreen.hide();
  }
  render() {

    return (
      <>
        <Routes />
        <FlashMessage position="top" />
      </>
      //  <Provider store={store}>

      //     <FlashMessage /> 
      //  </Provider>


    )
  }
}