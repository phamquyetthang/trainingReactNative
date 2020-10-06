import { Navigation } from 'react-native-navigation';
import { pushTutorialScreen } from './src/navigation/rnn/naviagtion';

Navigation.events().registerAppLaunchedListener(() => pushTutorialScreen());