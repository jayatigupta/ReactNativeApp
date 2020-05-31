/*import React, { Component } from 'react';
import { AppRegistry, Dimensions } from 'react-native';
import { DrawerNavigator } from 'react-navigation';

import SideMenu from '../screens/SideMenu'
import stackNav from '../screens/stacknav';

const drawernav = DrawerNavigator({
  Item1: {
      screen: stackNav,
    }
  }, {
    contentComponent: SideMenu,
    drawerWidth: Dimensions.get('window').width - 120,  
});

//AppRegistry.registerComponent('Demo', () => drawernav);

export default Home;
*/



import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, SafeAreaView, ScrollView, Dimensions, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import { Icon } from 'native-base';
import HomePage from '../screens/Page/HomePage';
import SettingsPage from '../screens/Page/SettingsPage';
import NotificationPage from '../screens/Page/Notifications';
import NewsPage from '../screens/Page/News';

const { width } = Dimensions.get("window");

const CustomDrawerNavigation = (props) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ height: 250, backgroundColor: '#d2d2d2', opacity: 0.9 }}>
        <View style={{ height: 200, backgroundColor: 'Green', alignItems: 'center', justifyContent: 'center' }}>
          <Image source={require('../assets/images/no-image.png')} style={{ height: 150, width: 150, borderRadius: 60 }} />
        </View>
        <View style={{ height: 50, backgroundColor: 'Green', alignItems: 'center', justifyContent: 'center' }}>
          <Text>John Doe</Text>
        </View>
      </View>
      <ScrollView>
        <DrawerItems {...props} />
      </ScrollView>
      <View style={{ alignItems: "center", bottom: 20 }}>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ flexDirection: 'column', marginRight: 15 }}>
            <Icon name="flask" style={{ fontSize: 24 }} onPress={() => console.log("Tıkladın")} />
          </View>
          <View style={{ flexDirection: 'column' }}>
            <Icon name="call" style={{ fontSize: 24 }} onPress={() => console.log("Tıkladın")} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const Drawer = createDrawerNavigator({
  Home: {
    screen: HomePage,
    navigationOptions: {
      title: 'Homepage'
    }
  },
  Settings: {
    screen: SettingsPage,
    navigationOptions: {
      title: 'Settings'
    }
  },
  Notifications: {
    screen: NotificationPage,
    navigationOptions: {
      title: 'Notifications'
    }
  },
  News: {
    screen: NewsPage,
    navigationOptions: {
      title: 'News'
    }
  }
},
  {
    drawerPosition: 'left',
    contentComponent: CustomDrawerNavigation,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
    drawerWidth: (width / 3) * 2
  });

const Home = createAppContainer(Drawer);

export default Home;


/*** 
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
***/