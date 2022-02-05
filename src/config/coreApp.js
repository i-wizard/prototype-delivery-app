import React from 'react';
import {View, Text} from 'react-native';

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from '../screens/home';
import {Appcolor} from '../utils';

const Bottomtab = createMaterialBottomTabNavigator();


const Saved = () => {
  return (
    <View>
      <Text> Saved Order Screen</Text>
    </View>
  );
};
const Send = () => {
  return (
    <View>
      <Text> Send Order Screen</Text>
    </View>
  );
};
const Setting = () => {
  return (
    <View>
      <Text> Setting Screen</Text>
    </View>
  );
};

const CoreApp = () => {
  return (
    <Bottomtab.Navigator
      activeColor={Appcolor.black}
      inactiveColor='#BBBFD0'
      labeled={false}
      shifting={false}
      barStyle={{
        backgroundColor: Appcolor.lightAqua,
        height: 60,
        paddingTop: 5,
      }}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          switch (route.name) {
            case 'Home':
              iconName = 'home';
              break;
            case 'Saved':
              iconName = 'bookmark';
              break;
            case 'Send':
              iconName = 'telegram';
              break;
            case 'Setting':
              iconName = 'cog';
              break;
          }
          return (
            <MaterialCommunityIcons name={iconName} size={26} color={color} />
          );
        },
      })}
      tabBarOptions={{
        activeTintColor: Appcolor.black,
        inactiveTintColor: '#fff',
      }}>
      <Bottomtab.Screen name="Home" component={HomeScreen} options={{header: () => null}}/>
      <Bottomtab.Screen name="Saved" component={Saved} />
      <Bottomtab.Screen name="Send" component={Send} />
      <Bottomtab.Screen name="Setting" component={Setting} />
    </Bottomtab.Navigator>
  );
};

export default CoreApp;
