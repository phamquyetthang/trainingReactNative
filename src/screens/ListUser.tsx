import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {FlatList, Text, View, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/Ionicons';
import { useDispatch, useSelector} from 'react-redux';
import {getApiToData, mardRow, deleteRow} from '../state/actions';
import {ApiItem, TypeState} from '../state/types';
import {ItemTable, styles} from '../Styles';

const ListUser: React.FC = (): React.ReactElement => {
  const [showModal, setShowModal] = useState({
    show: false,
    id: '',
  });
  const dispatch = useDispatch();
  const selectIsOn = (state: TypeState) => state.data;
  const data = useSelector(selectIsOn)
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
        <View style={styles.modal}>
          <Text>Bạn có chắc muốn xóa hàng này</Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
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
export default ListUser;

// export default ListUser;
