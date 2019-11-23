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

export default function MainComponent({ navigation }) {
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
        <CarouselComponent />
        <Title>Continue Watching</Title>
        <ContinueWatching navigation={navigation} />
        <Title>Explore by Genres</Title>
        <GenresComponent navigation={navigation} />
        <Title>Trending</Title>
        <TrendingComponent navigation={navigation} />
      </Body>
    </Container>
  );
}
