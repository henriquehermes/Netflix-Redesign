import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const Container = styled.View`
  background-color: #111111;
  height: 100%;
`;

export const Header = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 15px;
  height: 50px;
  width: 100%;
`;

export const ArrowLeft = styled(Icon.Button).attrs({
  name: 'arrow-left',
  size: 20,
  backgroundColor: 'transparent',
  borderRadius: 0,
})``;

export const Body = styled.ScrollView``;

export const MovieImage = styled.Image.attrs({ resizeMode: 'contain' })`
  height: 200px;
  width: 100%;
`;

export const ImageBlur = styled.Image.attrs({ resizeMode: 'stretch' })`
  height: 200px;
  width: 100%;
  position: absolute;
  z-index: -999;
`;

export const MovieTitle = styled.Text`
  color: #fff;
  font-size: 24px;
  font-weight: bold;
`;

export const Description = styled.View`
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  margin: 15px 25px;
`;

export const MovieType = styled.Text`
  color: #d7240f;
  font-size: 12px;
  text-transform: capitalize;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin: 5px 0px;
`;

export const RowButtons = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin: 10px 25px;
`;

export const MovieYear = styled.Text`
  color: rgba(255, 255, 255, 0.5);
  font-size: 14px;
  margin-right: 20px;
`;

export const MovieAge = styled.Text`
  color: rgba(255, 255, 255, 0.5);
  font-size: 12px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 4px;
  padding: 0px 6px;
`;

export const MovieMatch = styled.Text`
  color: #1abd32;
  font-size: 14px;
  margin-right: 20px;
`;

export const Title = styled.Text`
  font-size: 18px;
  color: #fff;
`;

export const TitleDescription = styled.Text`
  font-size: 12px;
  color: rgba(255, 255, 255, 0.4);
  margin-bottom: 15px;
`;

export const About = styled.View`
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 10px 25px;
`;

export const ListRow = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 10px 0px 5px 0px;
`;
export const CellTitle = styled.Text`
  font-size: 14px;
  color: rgba(255, 255, 255, 1);
  margin-bottom: 2px;
  text-align: center;
  font-weight: bold;
`;
export const CellValue = styled.Text`
  font-size: 14px;
  color: #1abd32;
  text-align: center;
`;

export const RantingCell = styled.View`
  max-width: 120px;
  min-height: 80px;
  border-radius: 4px;
  border: 1px solid rgba(255, 255, 255, 0.4);
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  padding: 2px 5px;
  margin: 5px 10px 2px 0px;
`;
