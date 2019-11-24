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
          <FlatList
            data={data.movieList}
            numColumns={3}
            keyExtractor={item => item.Title}
            renderItem={({ item }) => (
              <MovieAvatar
                source={{
                  uri: item.Poster,
                }}
              />
            )}
          />
        </Form>
      </Body>
    </Container>
  );
}
