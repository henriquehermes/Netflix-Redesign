import styled from 'styled-components/native';
import LOGO from '~/assets/img/Netflix_Logo.png';
import BACKGROUND from '~/assets/img/Netflix_Background.jpg';

export const Container = styled.View`
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.background};
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

export const Background = styled.Image.attrs({
  source: BACKGROUND,
  resizeMode: 'contain',
})`
  position: absolute;
  opacity: 0.15;
  z-index: -999;
`;
