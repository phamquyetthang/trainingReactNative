import React from 'react';
import {Navigation} from 'react-native-navigation';
import Auth from '../../screens/Auth';
import ListUser from '../../screens/ListUser';
import AppStoreProvider from '../../state/provider';
import { AUTH, LISTUSER } from './screen';
interface Props {
  // any other props that come into the component, you don't have to explicitly define children.
}

function WrappedComponent(Component: any) {
  return function inject(props:any) {
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
}
