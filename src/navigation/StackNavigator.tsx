import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Auth from '../screens/Auth';
import ListUser from '../screens/ListUser';
import UserDetail from '../screens/UserDetail';
import {RootStackParamList} from './typeCheck';

const Stack = createStackNavigator<RootStackParamList>();

const StackNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          header: () => false,
        }}>
        <Stack.Screen name="Auth" component={Auth} />
        <Stack.Screen name="ListUser" component={ListUser} />
        <Stack.Screen name="UserDetail" component={UserDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
