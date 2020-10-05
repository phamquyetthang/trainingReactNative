import React from 'react'
import { Text, TouchableOpacity } from 'react-native';
import { CheckBox } from 'react-native-elements'
import { useDispatch, useSelector } from 'react-redux';
import { checkAll, deleAll, filterData, mardAll } from '../state/actions';
import Icon from 'react-native-vector-icons/Ionicons';
import { TypeState } from '../state/types';
import { ActionBar } from '../Styles'

const HeaderList:React.FC = () => {
    const selectIsOn = (state: TypeState) => state;
  let dataraw = useSelector(selectIsOn);
  const dispatch = useDispatch();
    return (
        <ActionBar>
        <CheckBox
          containerStyle={{margin: 0, padding: 0}}
          title="Select all"
          checked={dataraw.checkAll}
          onPress={() => dispatch(checkAll())}
        />
        <Text style={{width: 150}}></Text>
        <Text></Text>
        <TouchableOpacity
          onPress={() => dispatch(filterData())}
          style={{marginRight: 8}}>
          <Icon name="md-filter-outline" size={24} color="#000"></Icon>
        </TouchableOpacity>
        <TouchableOpacity
          style={{marginRight: 8}}
          onPress={() => dispatch(mardAll())}>
          <Icon name="md-star" size={24} color="yellow"></Icon>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => dispatch(deleAll())}>
          <Icon name="md-trash" size={24} color="hotpink"></Icon>
        </TouchableOpacity>
      </ActionBar>
    )
}

export default HeaderList
