import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';

export const styles = StyleSheet.create({
  loginForm: {
    flex: 1,
    flexDirection: 'column',
    alignContent: 'center',
    paddingTop: 50,
    padding: 16,
    backgroundColor: 'white',
  },
  text1: {
    alignSelf: 'center',
    margin: 24,
    fontSize: 24,
    fontWeight: '700',
  },
  button1: {
    width: '100%',
    backgroundColor: 'violet',
    padding: 12,
    alignItems: 'center',
    borderRadius: 8,
  },
  avtl: {
    alignSelf: 'center',
    width: 230,
    height: 230,
    borderRadius: 115,
    marginTop: 30,
    backgroundColor: 'pink',
  },
});

export const ItemTable = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  padding: 12px;
  margin: 8px;
  background-color: #BFF4BB;
`;
