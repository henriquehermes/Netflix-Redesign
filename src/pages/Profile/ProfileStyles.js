import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import LOGO from '~/assets/img/Netflix_Logo.png';

export const Container = styled.View`
  background-color: #111111;
  height: 100%;
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

export const ArrowLeft = styled(Icon.Button).attrs({
  name: 'arrow-left',
  size: 20,
  backgroundColor: 'transparent',
  borderRadius: 0,
})``;

export const Body = styled.ScrollView``;

export const Form = styled.View`
  width: 100%;
  padding: 15px 25px;
  flex-direction: column;
  align-items: center;
`;

export const Avatar = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: 150px;
  height: 100px;
  margin-bottom: 40px;
  border-radius: 10px;
`;

export const Title = styled.Text`
  font-size: 18px;
  color: #fff;
  margin: 15px 0px;
`;

export const CardView = styled.View`
  width: 100%;
`;
