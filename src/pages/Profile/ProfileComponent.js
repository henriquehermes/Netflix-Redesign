import React from 'react';
import { FlatList } from 'react-native';

import TextInput from '~/components/Input';
import {
  Container,
  Header,
  Netflix,
  ArrowLeft,
  Body,
  Form,
  Avatar,
  Title,
  MovieAvatar,
} from './ProfileStyles';

const DATA = [
  {
    a: true,
  },
  {
    a: true,
  },
  {
    a: true,
  },
  {
    a: true,
  },
  {
    a: true,
  },
];

const renderItem = () => {
  return (
    <MovieAvatar
      source={{
        uri:
          'https://images-na.ssl-images-amazon.com/images/I/81OqnFpyxUL._SY445_.jpg',
      }}
    />
  );
};

export default function ProfileComponent({ navigation }) {
  return (
    <Container>
      <Header>
        <ArrowLeft onPress={() => navigation.navigate('Main')} />
        <Netflix />
      </Header>
      <Body overScrollMode="never">
        <Form>
          <Avatar
            source={{ uri: 'https://api.adorable.io/avatars/249/random1.png' }}
          />
          <TextInput placeHolder="Name" />
          <TextInput placeHolder="Email" />
          <Title>Last 5 movies watched</Title>
          <FlatList
            data={DATA}
            numColumns={3}
            // keyExtractor={Math.random()}
            renderItem={renderItem}
          />
        </Form>
      </Body>
    </Container>
  );
}
