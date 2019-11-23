import styled from 'styled-components/native';

export const Slide = styled.TouchableOpacity`
  width: 192px;
  height: 182px;
  border-radius: 4px;
  margin-left: ${props => (props.firstIndex ? 25 : 15)};
  margin-right: ${props => (props.lastIndex ? 25 : 0)};
  overflow: hidden;
`;

export const TextSlide = styled.Text`
  color: #fff;
  font-size: 15px;
  font-weight: bold;
`;

export const MovieImage = styled.Image.attrs({
  resizeMode: 'cover',
})`
  height: 108px;
  width: 100%;
`;

export const Description = styled.View`
  background-color: ${props => props.theme.backgroundSecondary};
  justify-content: center;
  padding: 5px 10px;
  height: 60px;
`;

export const MovieType = styled.Text`
  color: ${props => props.theme.primary};
  font-size: 10px;
`;

export const MovieRuntime = styled.Text`
  color: rgba(255, 255, 255, 0.5);
  font-size: 10px;
`;
