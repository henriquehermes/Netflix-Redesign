import React from 'react';
import { View } from 'react-native';

import {
  Container,
  Header,
  Netflix,
  Logout,
  UserProfile,
  Title,
  Body,
} from './MainStyles';
import CarouselComponent from './components/Carousel';
import ContinueWatching from './components/ContinueWatching';
import TrendingComponent from './components/Trending';
import GenresComponent from './components/Genres';

export default function MainComponent({
  NETFLIX_ORIGINALS,
  TRENDING,
  CONTINUE_WATCHING,
  navigation,
}) {
  return (
    <Container>
      <Header>
        <Logout onPress={() => navigation.navigate('Login')} />
        <Netflix />
        <View style={{ flex: 1, alignItems: 'flex-end' }}>
          <UserProfile onPress={() => navigation.navigate('Profile')} />
        </View>
      </Header>
      <Body overScrollMode="never">
        <Title>Netflix Originals</Title>
        <CarouselComponent data={NETFLIX_ORIGINALS} />
        <Title>Continue Watching</Title>
        <ContinueWatching navigation={navigation} data={CONTINUE_WATCHING} />
        <Title>Explore by Genres</Title>
        <GenresComponent navigation={navigation} />
        <Title>Trending</Title>
        <TrendingComponent navigation={navigation} data={TRENDING} />
      </Body>
    </Container>
  );
}
