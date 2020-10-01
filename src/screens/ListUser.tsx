import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import { connect, useDispatch } from 'react-redux';
import { getApiToData } from '../state/Actions';
import { ApiItem, TypeState } from '../state/types';

interface ApiData {
  data: ApiItem[];
  fail?: boolean;
}
const ListUser: React.FC<ApiData> = ({data}): React.ReactElement => {
  const [dataApi, setDataApi] = useState<ApiData>({
    data: [],
  });
  const dispatch = useDispatch()
  useEffect(() => {
    const getApi = async () => {
      try {
        let response = await fetch(
          'https://5f0c22f99d1e150016b37d39.mockapi.io/api/v1/users/',
        );
        let jsonData = await response.json();
        setDataApi({
          data: jsonData,
        });
        dispatch(getApiToData(jsonData));
        // console.log(dataApi.data);
      } catch (error) {
        setDataApi({
          data: [],
        });
      }
    };
    getApi();
  }, []);
  const navigation = useNavigation();
  const renderItem = ({item}: {item: ApiItem}) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('UserDetail', {data: item})}
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 4,
        margin: 16,
      }}>
      <Text>{item.username}</Text>
      <Text>{item.name}</Text>
      <Text>{item.balance}</Text>
    </TouchableOpacity>
  );

  return (
    <View>
      <FlatList data={data} renderItem={renderItem} />
    </View>
  );
};
function mapStateToProps(state: TypeState){
  return{ 
      data: state.data
  };
}
export default connect(mapStateToProps)(ListUser);

// export default ListUser;
