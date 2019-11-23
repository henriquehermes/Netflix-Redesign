import styled from 'styled-components/native';

export const Slide = styled.View`
  border-radius: 4px;
  overflow: hidden;
  margin-left: ${props => (props.firstIndex ? 25 : 15)};
  margin-right: ${props => (props.lastIndex ? 25 : 0)};
  margin-bottom: 20px;
`;
