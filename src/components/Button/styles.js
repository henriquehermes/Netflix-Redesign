import styled from 'styled-components/native';

export const CustomButton = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  min-width: 100px;
  min-height: 40px;
  background-color: #d7240f;
  border-radius: 4px;
`;

export const CustomLabel = styled.Text`
  font-size: 12px;
  color: #fff;
  font-weight: 600;
  text-transform: uppercase;
`;
