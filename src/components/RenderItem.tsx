import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Text } from 'react-native'
import { CheckBox } from 'react-native-elements'
import { ApiItem } from '../state/types'
import { ItemTable } from '../Styles'
import Icon from 'react-native-vector-icons/Ionicons';
import { mardRow } from '../state/actions'
import { useDispatch } from 'react-redux'
interface Props{
    item: ApiItem,
    showModal: void
}
const RenderItem:React.FC<Props> = ({item,showModal}) => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    function mardItem(id: string) {
        dispatch(mardRow(id));
      }
    //   function deleItem(id: string) {
    //     setShowModal({show: true, id: id});
    //     // dispatch(deleteRow(id));
    //   }
    return (
        <ItemTable onPress={() => navigation.navigate('UserDetail', {data: item})}>
        <CheckBox
          containerStyle={{margin: 0, padding: 0}}
          checked={item.factor_authentication}
        />
        <Text>{item.username}</Text>
        <Text style={{width: 130}}>{item.name}</Text>
        <Text>{item.balance}</Text>
        <Icon
          onPress={() => mardItem(String(item.id))}
          name={item.status ? 'md-star' : 'md-star-outline'}
          size={24}
          color="hotpink"></Icon>
        <Icon
          onPress={()=>showModal}
          name="md-trash"
          size={24}
          color="hotpink"></Icon>
      </ItemTable>
    )
}

export default RenderItem
