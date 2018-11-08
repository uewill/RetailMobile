// You can import Ionicons from @expo/vector-icons if you use Expo or
// react-native-vector-icons/Ionicons otherwise.
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from 'react-navigation';

import AppColor from '../../common/theme';
import HomeScreen from '../home/home';
import SettingScreen from '../setting/index';

export default createBottomTabNavigator(
  {
    Home: HomeScreen,
    Settings: SettingScreen,
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `md-home`;
        } else if (routeName === 'Settings') {
          iconName = `md-person`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: AppColor.PrimaryColor,
      inactiveTintColor: AppColor.TabTitleColor,
    },
  }
);