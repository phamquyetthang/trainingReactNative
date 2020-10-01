import {RouteProp} from '@react-navigation/native';
import { ApiItem } from '../state/types';

export type RootStackParamList = {
  Auth: undefined;
  ListUser: undefined;
  UserDetail: {data: ApiItem};
};

export type UserDetailProps = RouteProp<RootStackParamList, 'UserDetail'>;
