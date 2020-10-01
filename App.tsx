import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import StackNavigator from './src/navigation/StackNavigator';
import {reducer} from './src/state/Reducer';
const store = createStore(reducer);
const App = () => {
  return(
    <Provider store={store}>
    <StackNavigator />
  </Provider>
  );
  
};

export default App;
