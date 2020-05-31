


/*
//import * as React from "react";
import React, { Component, createRef } from 'react';
import {
  Image,
  KeyboardAvoidingView,
  StyleSheet,
  View
} from "react-native";
import Button from "../components/Button";
import FormTextInput from "../components/FormTextInput";
import imageLogo from "../assets/images/logo.png";
import colors from "../config/colors";
import strings from "../config/strings";
import Home from "../screens/Home";

interface State {
  email: string;
  password: string;
  // We add a field that tracks if the user has already
  // touched the input...
  emailTouched: boolean;
  passwordTouched: boolean;
  token: string;
}

class LoginPage extends React.Component<{}, State> {
   passwordInputRef = React.createRef();

   state: State = {
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
      
    if(this.state.userToken==''){
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
      <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"
      >
        <Image source={imageLogo} style={styles.logo} />
        <View style={styles.form}>
          <FormTextInput
            value={this.state.email}
            onChangeText={this.handleEmailChange}
            onSubmitEditing={this.handleEmailSubmitPress}
            placeholder={strings.EMAIL_PLACEHOLDER}
            autoCorrect={false}
            keyboardType="email-address"
            returnKeyType="next"
            autoCapitalize={"none"}
            onBlur={this.handleEmailBlur}
           // error={emailError}
          />
          <FormTextInput
            ref={this.passwordInputRef}
            value={this.state.password}
            onChangeText={this.handlePasswordChange}
            placeholder={strings.PASSWORD_PLACEHOLDER}
            secureTextEntry={true}
            returnKeyType="done"
            onBlur={this.handlePasswordBlur}
           // error={passwordError}
          />
          <Button
            label={strings.LOGIN}
            onPress={this.handleLoginPress}
            disabled={!email || !password}
          />
        </View>
      </KeyboardAvoidingView>
    );
    } else {
      return(
          <Home />
        );
        
    }
    


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

export default LoginPage;
*/

import React, { Component } from 'react';
import {
    ScrollView,
    Text,
    TextInput,
    View,
    Button,
    Alert,
    ActivityIndicator
} from 'react-native';

import Home from "../screens/Home";

import PropTypes from 'prop-types';

//import Environment from '../../Environment';


export default class Login extends Component {

    state = {
        username: '',
        password: '',
        isLoggingIn: false,
        message: ''
    }

    _userLogin = () => {

        console.log("Login button pressed");

    console.log(this.state.username);
    console.log(this.state.password);
    var proceed = false;
fetch('https://gatewayslm03.hrpassport.com/api-mobile/v2/mobile/signon', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "username": this.state.username,
        "password": this.state.password,
        "signonType": "2"
        })
    }).then((response) => response.json())
    .then((response) => {
                if (response.statusCode==200) proceed = true;
                else {
                    proceed = true;
                    console.log(response)
                    this.setState({ message: response.message });
                }
            })
            .then(() => {
                this.setState({ isLoggingIn: false })
                if (proceed) { 
                    console.log("response again!!")
                    return <Home />;
                    //console.log(response)
                    //this.props.onLoginPress();
                }
            })
            .catch(err => {
				this.setState({ message: err.message });
				this.setState({ isLoggingIn: false })
			});
    }

    clearUsername = () => {
        this._username.setNativeProps({ text: '' });
        this.setState({ message: '' });
    }

    clearPassword = () => {
        this._password.setNativeProps({ text: '' });
        this.setState({ message: '' });
    }

    render() {
        return (
            <ScrollView style={{padding: 20}}>
				<Text 
					style={{fontSize: 27}}>
					Login
				</Text>
				<TextInput
					ref={component => this._username = component}
					placeholder='Username' 
					onChangeText={(username) => this.setState({username})}
					autoFocus={true}
					onFocus={this.clearUsername}
				/>
				<TextInput 
					ref={component => this._password = component}
					placeholder='Password' 
					onChangeText={(password) => this.setState({password})}
					secureTextEntry={true}
					onFocus={this.clearPassword}
					onSubmitEditing={this._userLogin}
				/>
				{!!this.state.message && (
					<Text
						style={{fontSize: 14, color: 'red', padding: 5}}>
						{this.state.message}
					</Text>
				)}
				{this.state.isLoggingIn && <ActivityIndicator />}
				<View style={{margin:7}} />
				<Button 
					disabled={this.state.isLoggingIn||!this.state.username||!this.state.password}
		      		onPress={this._userLogin}
		      		title="Submit"
		      	/>
	      </ScrollView>
        )
    }
}


/*** 
import React, {useState} from 'react';
import {Text, StyleSheet, View, TextInput} from 'react-native';

const LoginForm = () => {
  const [value, setValue] = useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.formLabel}> Login Form </Text>
      <View>
        <TextInput placeholder="Enter Email" style={styles.inputStyle} />
        <TextInput
          secureTextEntry={true}
          placeholder="Enter Password"
          style={styles.inputStyle}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
  },

  formLabel: {
    fontSize: 20,
    color: '#fff',
  },
  inputStyle: {
    marginTop: 20,
    width: 300,
    height: 40,
    paddingHorizontal: 10,
    borderRadius: 50,
    backgroundColor: '#DCDCDC',
  },
  formText: {
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    fontSize: 20,
  },
  text: {
    color: '#fff',
    fontSize: 20,
  },
});

export default LoginForm;
***/