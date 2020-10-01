import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {FlatList, Text, View, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/Ionicons';
import {connect, useDispatch} from 'react-redux';
import {getApiToData, mardRow, deleteRow} from '../state/Actions';
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
  const [showModal, setShowModal] = useState({
    show: false,
    id: '',
  });
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
  function mardItem(id: string) {
    dispatch(mardRow(id));
  }
  function deleItem(id: string) {
    setShowModal({show: true, id: id});
    // dispatch(deleteRow(id));
  }
  const renderItem = ({item}: {item: ApiItem}) => (
    <ItemTable onPress={() => navigation.navigate('UserDetail', {data: item})}>
      <Text>{item.username}</Text>
      <Text style={{width: 150}}>{item.name}</Text>
      <Text>{item.balance}</Text>
      <Icon
        onPress={() => mardItem(String(item.id))}
        name={item.status ? 'md-star' : 'md-star-outline'}
        size={24}
        color="hotpink"></Icon>
      <Icon
        onPress={() => deleItem(String(item.id))}
        name="md-trash"
        size={24}
        color="hotpink"></Icon>
    </ItemTable>
  );

  return (
    <View>
      <Modal isVisible={showModal.show}>
        <View
          style={{
            width: 200,
            height: 100,
            backgroundColor: '#fff',
            borderRadius: 8,
            alignSelf: 'center',
            padding: 12,
            justifyContent: "space-between"
          }}>
          <Text>Bạn có chắc muốn xóa hàng này</Text>
          <View style={{flexDirection: "row", justifyContent: "space-between"}}>
            <TouchableOpacity
              onPress={() => {
                dispatch(deleteRow(showModal.id));
                setShowModal({show: false, id: ''});
              }}>
              <Text>Xóa</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setShowModal({show: false, id: ''});
              }}>
              <Text>Thoát</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
