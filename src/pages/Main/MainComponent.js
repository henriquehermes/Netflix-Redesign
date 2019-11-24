import React from 'react';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';

import DEFAULT from '~/store/ducks/constants';
import {
  Container,
  Header,
  Netflix,
  Logout,
  UserProfile,
  Title,
  Body,
  ButtonText,
  ButtonView,
  Row,
} from './MainStyles';
import CarouselComponent from './components/Carousel';
import ContinueWatching from './components/ContinueWatching';
import TrendingComponent from './components/Trending';
import GenresComponent from './components/Genres';

export default function MainComponent({
  NETFLIX_ORIGINALS,
  TRENDING,
  CONTINUE_WATCHING,
  GENRES,
  BRAZIL_MOVIES,
  USA_MOVIES,
  navigation,
  logoff,
}) {
  const dispatch = useDispatch();

  function openCategory(typeCategory, data) {
    dispatch({ type: DEFAULT.SET_CATEGORY, typeCategory, data });
    navigation.navigate('Category');
  }

  return (
    <Container>
      <Header>
        <Logout onPress={() => logoff()} />
        <Netflix />
        <View style={{ flex: 1, alignItems: 'flex-end' }}>
          <UserProfile onPress={() => navigation.navigate('Profile')} />
        </View>
      </Header>
      <Body overScrollMode="never">
        <Row>
          <Title>Netflix Originals</Title>
          <ButtonView
            onPress={() =>
              openCategory('Netflix Originals', NETFLIX_ORIGINALS.originals)
            }>
            <ButtonText>VIEW ALL</ButtonText>
          </ButtonView>
        </Row>
        <CarouselComponent data={NETFLIX_ORIGINALS} />
        <Title>Continue Watching</Title>
        <ContinueWatching navigation={navigation} data={CONTINUE_WATCHING} />
        <Title>Explore by Genres</Title>
        <GenresComponent navigation={navigation} data={GENRES} />
        <Row>
          <Title>Trending</Title>
          <ButtonView
            onPress={() => openCategory('Trending', TRENDING.trending)}>
            <ButtonText>VIEW ALL</ButtonText>
          </ButtonView>
        </Row>
        <TrendingComponent navigation={navigation} data={TRENDING} />
        <Title>Top Movies Watched in Brazil 🇧🇷</Title>
        <ContinueWatching navigation={navigation} data={BRAZIL_MOVIES} />
        <Title>Top Movies Watched in USA 🇺🇸</Title>
        <ContinueWatching navigation={navigation} data={USA_MOVIES} />
      </Body>
    </Container>
  );
}
