import {Navigation} from 'react-native-navigation';
import {
  bottomTapScreenApp,
  pushTutorialScreen,
} from './src/navigation/rnn/naviagtion';

Navigation.events().registerAppLaunchedListener(() => bottomTapScreenApp());
