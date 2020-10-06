import React, { ReactNode } from 'react'
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {reducer} from './reducer';
interface Props{
  children: ReactNode
}
const store = createStore(reducer);

const AppStoreProvider = ({children}:Props) => {
  return <Provider store={store}>{children}</Provider>;
};

export default AppStoreProvider;