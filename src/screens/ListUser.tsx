import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {connect, useDispatch} from 'react-redux';
import {getApiToData, mardRow} from '../state/Actions';
import {ApiItem, TypeState} from '../state/types';
import {ItemTable} from '../Styles';

interface ApiData {
  data: ApiItem[];
  fail?: boolean;
}
const ListUser: React.FC<ApiData> = ({data}): React.ReactElement => {
  // const [dataApi, setDataApi] = useState<ApiData>({
  //   data: [],
  // });
  const dispatch = useDispatch();
  useEffect(() => {
    const getApi = async () => {
      try {
        let response = await fetch(
          'https://5f0c22f99d1e150016b37d39.mockapi.io/api/v1/users/',
        );
        let jsonData = await response.json();
        dispatch(getApiToData(jsonData));
        // console.log(dataApi.data);
      } catch (error) {
        // setDataApi({
        //   data: [],
        // });
        dispatch(getApiToData([]));
      }
    };
    getApi();
  }, []);
  const navigation = useNavigation();
  function mard(id: string) {
    dispatch(mardRow(id));
  }
  const renderItem = ({item}: {item: ApiItem}) => (
    <ItemTable onPress={() => navigation.navigate('UserDetail', {data: item})}>
      <Text>{item.username}</Text>
      <Text style={{width: 150}}>{item.name}</Text>
      <Text>{item.balance}</Text>
      {/* <TouchableOpacity > */}
        <Icon
        onPress={() => mard(String(item.id))}
          name={item.status ? 'md-star' : 'md-star-outline'}
          size={24}
          color="hotpink"></Icon>
      {/* </TouchableOpacity> */}
    </ItemTable>
  );

  return (
    <View>
      <FlatList data={data} renderItem={renderItem} />
    </View>
  );
};
function mapStateToProps(state: TypeState) {
  return {
    data: state.data,
  };
}
export default connect(mapStateToProps)(ListUser);

// export default ListUser;
