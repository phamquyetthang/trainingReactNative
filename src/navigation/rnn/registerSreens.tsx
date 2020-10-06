import React from 'react';
import { Text, View } from 'react-native';
import {Navigation} from 'react-native-navigation';
import Auth from '../../screens/Auth';
import ListUser from '../../screens/ListUser';
import UserDetail from '../../screens/UserDetail';
import AppStoreProvider from '../../state/provider';
import {AUTH, LISTUSER, USERDETAIL} from './screen';
interface Props {
  // any other props that come into the component, you don't have to explicitly define children.
}

function WrappedComponent(Component: any) {
  return function inject(props: any) {
    const EnhancedComponent = () => (
      <AppStoreProvider>
        <Component {...props} />
      </AppStoreProvider>
    );

    return <EnhancedComponent />;
  };
}
export default function () {
  Navigation.registerComponent(AUTH, () => WrappedComponent(Auth));
  Navigation.registerComponent(LISTUSER, () => WrappedComponent(ListUser));
  Navigation.registerComponent(USERDETAIL, () => WrappedComponent(UserDetail));
  Navigation.registerComponent("Sample", () => WrappedComponent(SampleScreen));
  Navigation.registerComponent("Sample2", () => WrappedComponent(SampleSide));
}

function SampleScreen(){
  return (
    <Text>Sample 1</Text>
  )
}
function SampleSide(){
  return (
    <View style={{height: "100%", width: 300, backgroundColor: "#ddd"}}>
    <Text>Sample 2</Text>

    </View>
  )
}