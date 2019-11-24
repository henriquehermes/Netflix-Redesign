import styled from 'styled-components/native';

export const Slide = styled.TouchableOpacity`
  width: 100%;
  height: 191px;
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 15px;
`;

export const TextSlide = styled.Text`
  color: #fff;
  font-size: 15px;
  font-weight: bold;
`;

export const BackgroundSlide = styled.ImageBackground.attrs({
  resizeMode: 'cover',
})`
  justify-content: flex-end;
  height: 100%;
  width: 100%;
`;

export const Description = styled.View`
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  padding: 5px 10px;
  height: 60px;
`;

export const MovieType = styled.Text`
  color: ${props => props.theme.primary};
  text-transform: capitalize;
  font-size: 10px;
`;

export const MovieRuntime = styled.Text`
  color: rgba(255, 255, 255, 0.5);
  font-size: 10px;
`;
