import {RouteProp} from '@react-navigation/native';
import {ApiItem} from '../screens/ListUser';

export type RootStackParamList = {
  Auth: undefined;
  ListUser: undefined;
  UserDetail: {data: ApiItem};
};

export type UserDetailProps = RouteProp<RootStackParamList, 'UserDetail'>;
