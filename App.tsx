import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import StackNavigator from './src/navigation/StackNavigator';
import { reducer } from './src/state/reducer';
import TestRouter from './src/routers/TestRouter';
import BottomTab from './src/navigation/BottomTab';
const store = createStore(reducer);
const App = () => {
  return (
    <Provider store={store}>
      <BottomTab />
    </Provider>
  );
};

export default App;
