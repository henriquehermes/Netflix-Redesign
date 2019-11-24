import React, { useState } from 'react';

import { Container, Netflix, Body, Background } from './LoginStyles';
import Button from '~/components/Button';
import TextInput from '~/components/Input';

export default function Login({ loginInApp }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Container>
      <Netflix />
      <Body>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={text => setPassword(text)}
          type="password"
          secureTextEntry
        />
        <Button
          onPress={() => loginInApp(email, password)}
          label="Sign In"
          style={{ marginTop: 15 }}
        />
      </Body>
      <Background />
    </Container>
  );
}
