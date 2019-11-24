import React from 'react';

import { ActivityIndicator } from 'react-native';

import { Container, Netflix } from './SplashStyles';

export default function SplashComponent() {
  return (
    <Container>
      <Netflix />
      <ActivityIndicator size="large" color="#D7240F" />
    </Container>
  );
}
