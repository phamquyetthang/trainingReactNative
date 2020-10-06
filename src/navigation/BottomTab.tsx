import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import {NavigationContainer} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ListUser from '../screens/ListUser';
import {Text} from 'react-native';
import UserDetail from '../screens/UserDetail';

const Tab = createMaterialBottomTabNavigator();
export function Menu() {
  return (
    <Tab.Navigator
      initialRouteName="Screen1"
      //   tabBarOptions={{
      //     activeTintColor: '#fff',
      //     inactiveTintColor: '#90CAF9',
      //     showIcon: true,
      //     showLabel: false,
      //     style: {height: 56, backgroundColor: '#0D47A1'},
      //   }}
    >
      <Tab.Screen
        name="Screen1"
        component={ListUser}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="md-planet" style={{fontSize: 28, color, width: 30}} />
          ),
        }}
      />
      <Tab.Screen
        name="Screen2"
        component={Sample1}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialIcons
              name="library-music"
              style={{fontSize: 28, color, width: 30}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Screen3"
        component={Sample2}
        options={{
          tabBarIcon: ({color}) => (
            <FontAwesome5
              name="cloud-download-alt"
              style={{fontSize: 22, color, width: 30}}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const Stack = createStackNavigator();
export default function BottomTab() {
  return (
    <Stack.Navigator
      screenOptions={
        {
          //   header: () => null,
        }
      }>
      <Stack.Screen
        name="Main"
        component={Menu}
        options={{header: () => null}}
      />
      <Stack.Screen name="ListUser" component={ListUser} />
      <Stack.Screen name="UserDetail" component={UserDetail} />
    </Stack.Navigator>
  );
}
const Sample1 = () => {
  return <Text>hello1</Text>;
};
const Sample2 = () => {
  return <Text>hello3</Text>;
};
