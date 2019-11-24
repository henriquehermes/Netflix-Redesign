import styled from 'styled-components/native';
import LOGO from '~/assets/img/Netflix_Logo.png';

export const Container = styled.KeyboardAvoidingView.attrs({
  behavior: 'height',
})`
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #111111;
  padding: 20px 15px;
`;

export const Netflix = styled.Image.attrs({
  source: LOGO,
  resizeMode: 'contain',
})`
  height: 100px;
`;

export const Body = styled.View`
  display: flex;
  flex: 0.7;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
