import {useRoute} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  Alert,
  Image,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styled from 'styled-components/native';
import {UserDetailProps} from '../navigation/typeCheck';
import {styles} from '../Styles';
import ImagePicker from 'react-native-image-picker';
import { ApiItem } from '../state/types';


const DetailScreen = styled.View`
  flex: 1;
  padding: 16px;
`;
const Name = styled.Text`
  font-size: 26px;
  text-align: center;
  font-weight: 700;
  margin: 8px;
`;
const Info = styled.Text`
  margin: 8px;
  padding-top: 8px;
  font-size: 16px;
  flex-direction: row;
  align-content: center;
  align-items: center;
`;
const Cam = styled.TouchableOpacity`
  position: absolute;
  right: 0px;
  bottom: 0px;
  background: #d1d1d1;
  align-content: center;
  justify-content: center;
  padding: 8px;
  border-radius: 18px;
`;
const UserDetail = ({item}: {item: ApiItem}) => {
  // let data = useRoute<UserDetailProps>().params.data;
  let data = item
  const [imageUrl, setImageUrl] = useState<string>();
  const launchCamera = () => {
    let options = {
      // title: 'Load Photo',
      customButtons: [{name: 'xemanh', title: 'Xem ảnh đại diện'}],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ');
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        Alert.alert(response.customButton);
      } else {
        setImageUrl(response.uri);
      }
    });
  };
  let img =
    imageUrl == undefined ? null : (
      <Image
        source={{uri: `${imageUrl}`}}
        style={{width: '100%', height: '100%', borderRadius: 115}}
        resizeMode={'cover'}></Image>
    );
  const imagemd = {uri: 'https://reactjs.org/logo-og.png'};
  return (
    <DetailScreen>
      <View style={styles.avtl}>
        {img}
        <Cam onPress={launchCamera}>
          <Icon name="camera" size={28} color="black" />
        </Cam>
      </View>
      <Name>{data.name}</Name>
      <Info>
        <Icon name="person" size={24} color="gray" /> Username: {data.username}
      </Info>
      <Info>
        <Icon name="md-analytics" size={24} color="gray" /> Balance:{' '}
        {data.balance}
      </Info>
      <Info>
        <Icon name="mail" size={24} color="gray" /> Email: {data.email}
      </Info>
      <Info>
        <Icon name="md-calendar" size={24} color="gray" /> Create at:{' '}
        {data.createdAt}
      </Info>
      <Info>
        <Icon name="link" size={24} color="gray" /> User_ref: {data.user_ref}
      </Info>
    </DetailScreen>
  );
};

export default UserDetail;
