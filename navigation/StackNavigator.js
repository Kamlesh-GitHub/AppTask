import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {HomeTabNavigator} from './TabNavigator';

import SplashScreen from '../src/Screens/SplashScreen';
import InitialScreen from '../src/Screens/InitialScreen';
import SigninScreen from '../src/Screens/SigninScreen';
import PasscodeScreen from '../src/Screens/PasscodeScreen';
import RideScreen from '../src/Screens/RideScreen';
import ContactusScreen from '../src/Screens/ContactusScreen';
import EditprofileScreen from '../src/Screens/EditprofileScreen';
import NotificationScreen from '../src/Screens/NotificationScreen';
import ProfileScreen from '../src/Screens/ProfileScreen';
import RatingScreen from '../src/Screens/RatingScreen';
import VehcilemanagementScreen from '../src/Screens/Vehcilemanagementscreen';
import WalletScreen from '../src/Screens/WalletScreen';
import HistoryScreen from '../src/Screens/HistoryScreen';

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="SplashScreen">
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="InitialScreen"
        component={InitialScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SigninScreen"
        component={SigninScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PasscodeScreen"
        component={PasscodeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={HomeTabNavigator}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
const MoreStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={ProfileScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="EditprofileScreen"
        component={EditprofileScreen}
        options={{
          headerTitle: 'Edit Profile',
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="ContactusScreen"
        component={ContactusScreen}
        options={{
          headerTitle: 'Contact Us',
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="NotificationScreen"
        component={NotificationScreen}
        options={{
          headerTitle: 'Notification',
          headerTitleAlign: 'center',
        }}
      />

      <Stack.Screen
        name="VehcilemanagementScreen"
        component={VehcilemanagementScreen}
        options={{
          headerTitle: 'Vehcile Management',
          headerTitleAlign: 'center',
        }}
      />
    </Stack.Navigator>
  );
};

const HistoryStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="History" component={HistoryScreen} />
    </Stack.Navigator>
  );
};

const WalletStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Wallet" component={WalletScreen} />
    </Stack.Navigator>
  );
};

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={RideScreen}
        options={{
          headerTitle: 'Online',
          headerTitleAlign: 'center',
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
};

export {
  MainStackNavigator,
  HomeStackNavigator,
  WalletStackNavigator,
  MoreStackNavigator,
  HistoryStackNavigator,
};
