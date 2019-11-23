import React from 'react';

import { Container, Netflix, Body, Background } from './LoginStyles';
import Button from '~/components/Button';
import TextInput from '~/components/Input';

export default function Login({ navigation }) {
  return (
    <Container>
      <Netflix />
      <Body>
        <TextInput placeHolder="Email" />
        <TextInput placeHolder="Password" type="password" secureTextEntry />
        <Button
          onPress={() => navigation.navigate('Main')}
          label="Sign In"
          style={{ marginTop: 15 }}
        />
      </Body>
      <Background />
    </Container>
  );
}
