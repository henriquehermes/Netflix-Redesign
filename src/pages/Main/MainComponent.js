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

export default function MainComponent() {
  return (
    <Container>
      <Header>
        <Logout />
        <Netflix />
        <View style={{ flex: 1, alignItems: 'flex-end' }}>
          <UserProfile />
        </View>
      </Header>
      <Body overScrollMode="never">
        <Title>Netflix Originals</Title>
        <CarouselComponent />
        <Title>Continue Watching</Title>
        <ContinueWatching />
        <Title>Explore by Genres</Title>
        <GenresComponent />
        <Title>Trending</Title>
        <TrendingComponent />
      </Body>
    </Container>
  );
}
