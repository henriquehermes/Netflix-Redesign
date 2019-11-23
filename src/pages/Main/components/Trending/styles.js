import styled from 'styled-components/native';

export const Slide = styled.TouchableOpacity`
  width: 180px;
  height: 108px;
  border-radius: 4px;
  overflow: hidden;
  margin-left: ${props => (props.firstIndex ? 25 : 15)};
  margin-right: ${props => (props.lastIndex ? 25 : 0)};
  margin-bottom: 20px;
`;

export const MovieImage = styled.Image.attrs({
  resizeMode: 'cover',
})`
  height: 100%;
  width: 100%;
`;
