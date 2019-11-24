import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const ItemContainer = styled.TouchableOpacity`
  flex-direction: row;
  height: 80px;
  margin: 10px 25px;
  overflow: hidden;
  background-color: #1c1c1c;
  border-radius: 4px;
  align-items: center;
`;

export const ItemPoster = styled.Image`
  height: 100%;
  width: 100px;
`;

export const ItemTitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
  color: #fff;
`;

export const ItemStudio = styled.Text`
  font-size: 12px;
  color: rgba(255, 255, 255, 0.4);
`;

export const Column = styled.View`
  flex-direction: column;
  margin-left: 10px;
  flex: 1;
  justify-content: center;
`;

export const GoDetail = styled(Icon.Button).attrs({
  name: 'skip-next-circle-outline',
  color: '#D7240F',
  size: 30,
  backgroundColor: 'transparent',
  borderRadius: 0,
})``;
