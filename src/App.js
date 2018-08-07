import React from 'react';

import { StackNavigator, createSwitchNavigator } from "react-navigation";
import HomeScreen from './main/index';
import { CheckAuthScreen, SignInScreen } from './auth/auth';
import NavigationService from './common/navigationService';
import SplashScreen from 'react-native-splash-screen'

const HomeStack = StackNavigator(
  { Home: HomeScreen }, {
    navigationOptions: {
      header: null
    }
  });
const AuthStack = StackNavigator({ SignIn: SignInScreen });
const TopLevelNavigator = createSwitchNavigator(
  {
    CheckAuth: CheckAuthScreen,
    Home: HomeStack,
    Auth: AuthStack
  },
  {
    initialRouteName: 'CheckAuth'
  }
);

export default class App extends React.Component {
  render() {
    return (<TopLevelNavigator
      ref={navigatorRef => {
        NavigationService.setTopLevelNavigator(navigatorRef);
      }}
    />)
  }
  componentDidMount() {
    this.timer = setTimeout(
      () => {
        //登录检查
        NavigationService.navigate('Auth');
        SplashScreen.hide();
      },
      3000
    );
  };
  componentWillUnmount() {
    this.timer && clearTimeout(this.timer);
  }
}