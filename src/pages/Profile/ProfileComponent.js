import React from 'react';

import TextInput from '~/components/Input';
import Card from '~/components/Card';
import {
  Container,
  Header,
  Netflix,
  ArrowLeft,
  Body,
  Form,
  Avatar,
  CardView,
  Title,
} from './ProfileStyles';

export default function ProfileComponent({ navigation, data }) {
  return (
    <Container>
      <Header>
        <ArrowLeft onPress={() => navigation.navigate('Main')} />
        <Netflix />
      </Header>
      <Body overScrollMode="never">
        <Form>
          <Avatar source={{ uri: data.picture }} />
          <TextInput placeHolder="Name" editable={false} value={data.name} />
          <TextInput placeHolder="Email" editable={false} value={data.email} />
          <Title>Last 5 movies watched</Title>
          <CardView>
            <Card data={data.movieList} navigation={navigation} />
          </CardView>
        </Form>
      </Body>
    </Container>
  );
}
