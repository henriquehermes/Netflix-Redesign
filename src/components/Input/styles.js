import styled from 'styled-components/native';

export const CustomInput = styled.TextInput`
  border: 2px solid ${props => props.theme.inputBackground};
  background-color: ${props => props.theme.inputBackground};
  border-radius: 4px;
  color: rgba(255, 255, 255, 0.87);
  font-size: 14px;
  width: 100%;
  max-width: 300px;
  padding: 5px 10px;
  margin-bottom: 10px;
`;
