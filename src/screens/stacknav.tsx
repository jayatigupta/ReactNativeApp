/*

import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import {
  Platform,
  StyleSheet,
  Text,
  View, TouchableOpacity
} from 'react-native';

import { StackNavigator } from  'react-navigation';
import { DrawerNavigator } from 'react-navigation';
import IOSIcon from "react-native-vector-icons/Ionicons";
import MainScreen from "../screens/MainScreen";
import DetailScreen from "../screens/Detail";

const stackNav = StackNavigator({
  Main : {
    screen: MainScreen,
    navigationOptions: ({navigation}) => ({
      title: "Main",
      headerLeft:(<TouchableOpacity onPress={() => navigation.navigate("DrawerOpen")}>
                    <IOSIcon name="ios-menu" size={30} />
                  </TouchableOpacity>
      ),
      headerStyle: { paddingRight: 10, paddingLeft: 15 }
    })
  },
  Detail: {
    screen: DetailScreen,
    navigationOptions: ({navigation}) => ({
      title: "Detail",
    }) 
        
  }
});

export default stackNav;
*/



/*
import * as React from "react";
import {
  Image,
  KeyboardAvoidingView,
  StyleSheet,
  View,
  Text
} from "react-native";
import Button from "../components/Button";
import FormTextInput from "../components/FormTextInput";
import imageLogo from "../assets/images/logo.png";
import colors from "../config/colors";
import strings from "../config/strings";

interface State {
  email: string;
  password: string;
  // We add a field that tracks if the user has already
  // touched the input...
  emailTouched: boolean;
  passwordTouched: boolean;
  token: string;
}

class Home extends React.Component<{}, State> {
  passwordInputRef = React.createRef<FormTextInput>();

  readonly state: State = {
    email: "",
    password: "",
    emailTouched: false,
    passwordTouched: false
  };

  handleEmailChange = (email: string) => {
    this.setState({ email: email });
  };

  handlePasswordChange = (password: string) => {
    this.setState({ password: password });
  };

  handleEmailSubmitPress = () => {
    if (this.passwordInputRef.current) {
      this.passwordInputRef.current.focus();
    }
  };

  // ...and we update them in the input onBlur callback
  handleEmailBlur = () => {
    this.setState({ emailTouched: true });
  };

  handlePasswordBlur = () => {
    this.setState({ passwordTouched: true });
  };

  handleLoginPress = () => {
    console.log("Login button pressed");

    console.log(this.state.email);
    console.log(this.state.password);
fetch('http://10.0.0.181:8080/api-mobile/v2/mobile/signon', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        //"provider": "username",
        //"data": {
        "username": this.state.email,
        "password": this.state.password,
        "signonType": "2"
        //}
        })
    }).then((response) => response.json())
    .then((res) => {
      if(typeof(res.message) != "undefined"){
          console.log("Not undefined");
      Alert.alert("Error signing up", "Error: "+ res.message);
}
      else{
          console.log("undefined");
          console.log(res);
          this.setState({ token: res.userToken });
      //Alert.alert("Success", "You have succesfully signed up");
      }
    }).catch((error) => {
    console.error(error);
    });

  };

  render() {
    const {
      email,
      password,
      emailTouched,
      passwordTouched
    } = this.state;
    // Show the validation errors only when the inputs
    // are empty AND have been blurred at least once
    const emailError =
      !email && emailTouched
        ? strings.EMAIL_REQUIRED
        : undefined;
    const passwordError =
      !password && passwordTouched
        ? strings.PASSWORD_REQUIRED
        : undefined;
    return (
      
       <Text> "WELCOME TO HOME" </Text>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
    alignItems: "center",
    justifyContent: "space-between"
  },
  logo: {
    flex: 1,
    width: "100%",
    resizeMode: "contain",
    alignSelf: "center"
  },
  form: {
    flex: 1,
    justifyContent: "center",
    width: "80%"
  }
});

export default Home;
*/