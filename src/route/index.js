import { StackNavigator, createSwitchNavigator } from "react-navigation";

import SignInScreen from '../pages/auth/signIn';
import CheckAuthScreen from '../pages/auth/checkAuth';
import HomeScreen from '../pages/main/index';
import ErrorScreen from '../pages/base/errorScreen';

const HomeStack = StackNavigator(
  { Home: HomeScreen,
    Error:ErrorScreen }
  );

export default IndexRoute = createSwitchNavigator(
  {
    CheckAuth: CheckAuthScreen,
    SignIn: SignInScreen,
    Home: HomeStack
  },
  {
    initialRouteName: 'CheckAuth'
  }
);
