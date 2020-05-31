import * as React from "react";
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
  //userToken:string;
  
}

class LoginScreen extends React.Component<{}, State> {
  passwordInputRef = React.createRef<FormTextInput>();

  readonly state: State = {
    email: "",
    password: "",
    emailTouched: false,
    passwordTouched: false,
    userToken:"",
    isAuthenticated: false,
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
//fetch('https://gatewayslm03.hrpassport.com/api-mobile/v2/mobile/signon', {
  fetch('http://localhost:8080/auth', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        //"provider": "username",
        //"data": {
        "id": this.state.email,
        "password": this.state.password
        //"signonType": "2"
        //}
        })
    })
.then((response) => {
            console.log(response);
            console.log(response.headers);
            if (response.status !== 200) {
                  console.log('Status Code: ' + response.status);
                  return;
              } else {
                console.log('Status Code in else block: ' + response.status);
                console.log('Authorization Status: ' + response.headers.get('Authorization'));
                this.setState({ isAuthenticated: true });
              }
}
    
    /*
    .then((res) => {
      console.log("response =>");
      console.log(res);
      if(typeof(res.message) != "undefined"){
          console.log("Not undefined");
      Alert.alert("Error signing up", "Error: "+ res.message);
}
      else{
          console.log("undefined");
          console.log(res);
          this.setState({ isAuthenticated: true });
          this.setState({ token: res.data.userToken });
      //Alert.alert("Success", "You have succesfully signed up");
      }
    } */
    ).catch((error) => {
    console.error(error);
    });

  };


    /*
    .then(
          function(response) {
            console.log(response);
            console.log(response.headers);

              console.log(response.headers.get('Content-Type'));
              console.log(response.headers.get('Date'));

              console.log(response.status);
              console.log(response.statusText);
              console.log(response.type);
              console.log(response.url);
              if (response.status !== 200) {
                  console.log('Status Code: ' + response.status);
                  return;
              } else {
                console.log('Status Code in else block: ' + response.status);
                console.log('Authorization Status: ' + response.headers.get('Authorization'));
                this.setState({ isAuthenticated: true });
              }

          }
      )
      .catch(function(err) {
          console.log('Fetch Error', err);
      });
  };

  **/


    /*
    
    .then((response) => response.json())
    .then((res) => {
      console.log("response =>");
      console.log(res);
      if(typeof(res.message) != "undefined"){
          console.log("Not undefined");
      Alert.alert("Error signing up", "Error: "+ res.message);
}
      else{
          console.log("undefined");
          console.log(res);
          this.setState({ isAuthenticated: true });
          this.setState({ token: res.data.userToken });
      //Alert.alert("Success", "You have succesfully signed up");
      }
    }).catch((error) => {
    console.error(error);
    });

  };

  */

  render() {
   console.log("Inside render!!");
   console.log(this.state.isAuthenticated);
   if(this.state.isAuthenticated==false){
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
            error={emailError}
          />
          <FormTextInput
            ref={this.passwordInputRef}
            value={this.state.password}
            onChangeText={this.handlePasswordChange}
            placeholder={strings.PASSWORD_PLACEHOLDER}
            secureTextEntry={true}
            returnKeyType="done"
            onBlur={this.handlePasswordBlur}
            error={passwordError}
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
   console.log("Inside else block!!");
   console.log(this.state.userToken);
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

export default LoginScreen;