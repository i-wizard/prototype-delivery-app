import React, {useState, useContext} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';

import CoreApp from './coreApp';
import AppIntro from '../screens/intro';
import TrackingScreen from '../screens/trackingScreen';
import {Appcolor} from '../utils';

const MainStack = createStackNavigator();

const Balance = () => {
  return (
    <View>
      <Text> Balance screen</Text>
    </View>
  );
};

const MainApp = () => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#fff',
          elevation: 0,
          shadowOpacity: 0,
        },
        headerTintColor: Appcolor.primary,
        headerTitleStyle: {
          fontSize: 15,
        },
      }}>
      <MainStack.Screen name="AppIntro" component={AppIntro} options={{header: () => null}} />
      <MainStack.Screen
        name="Core"
        component={CoreApp}
        options={{header: () => null}}
      />
      <MainStack.Screen name="Tracking" component={TrackingScreen} options={{header: () => null}} />
    </MainStack.Navigator>
  );
};

export default MainApp;
