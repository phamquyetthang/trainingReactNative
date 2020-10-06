
import React, {useState} from 'react';
import {
  Alert,
  Keyboard,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {Input} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import ACC from '../Data';
import {styles} from '../Styles';
interface User {
  email: string;
  pass: string;
}
const Auth: React.FC = () => {
  const [user, setUser] = useState<User>({
    email: '',
    pass: '',
  });
  function onChangeEmail(e: string): void {
    setUser({
      ...user,
      email: e,
    });
  }
  function onChangePass(e: string): void {
    setUser({
      ...user,
      pass: e,
    });
  }
  function changeSreen():void {
    //
  }
  function checkLogin(): void {
    let check: string = 'fail';
    if (user.email == '' || user.pass == '') {
      check = 'lost';
    } else {
      for (let i of ACC) {
        if (user.email == i.email && user.pass == i.pass) {
          check = 'pass';
          break;
        } else {
          check = 'fail';
        }
      }
    }
    if (check === 'pass') {
      changeSreen();
    } else if (check === 'lost') {
      Alert.alert('Hãy điền đủ thông tin');
    } else {
      Alert.alert('Tài khoản sai');
    }
    setUser({email: '', pass: ''});
  }
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.loginForm}>
        <Text style={styles.text1}>LOGIN</Text>
        <Input
          label="Your email address"
          placeholder="email@address.com"
          leftIcon={<Icon name="mail" size={24} color="gray" />}
          value={user.email}
          onChangeText={(e) => onChangeEmail(e)}
          autoFocus={true}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <Input
          label="Passwork"
          placeholder="passwork"
          leftIcon={<Icon name="md-lock-closed" size={24} color="gray" />}
          secureTextEntry={true}
          value={user.pass}
          onChangeText={(e) => onChangePass(e)}
          keyboardType="number-pad"
        />
        <TouchableOpacity style={styles.button1} onPress={() => checkLogin()}>
          <Text style={{fontSize: 16}}>Login</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Auth;
