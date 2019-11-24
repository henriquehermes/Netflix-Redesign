import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import LOGO from '~/assets/img/Netflix_Logo.png';

export const Container = styled.View`
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.background};
`;

export const Header = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 15px;
  height: 70px;
  width: 100%;
`;

export const Netflix = styled.Image.attrs({
  source: LOGO,
  resizeMode: 'contain',
})`
  height: 65px;
  width: 100px;
`;

export const Logout = styled(Icon.Button).attrs({
  name: 'exit-run',
  size: 20,
  backgroundColor: 'transparent',
  borderRadius: 0,
})``;

export const UserProfile = styled(Icon.Button).attrs({
  name: 'account',
  size: 20,
  backgroundColor: 'transparent',
  borderRadius: 0,
})``;

export const Title = styled.Text`
  font-size: 18px;
  color: #fff;
  margin: 0px 25px 15px 25px;
`;

export const ButtonText = styled.Text`
  font-size: 12px;
  color: ${props => props.theme.primary};
  margin: 0px 25px 15px 25px;
`;

export const ButtonView = styled.TouchableOpacity``;

export const Body = styled.ScrollView``;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
