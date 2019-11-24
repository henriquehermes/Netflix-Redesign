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
  ContainerLoader,
  Loader,
} from './MainStyles';
import CarouselComponent from './components/Carousel';
import CardMovies from './components/CardMovies';
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
              openCategory('Netflix Originals', NETFLIX_ORIGINALS)
            }>
            <ButtonText>VIEW ALL</ButtonText>
          </ButtonView>
        </Row>
        {NETFLIX_ORIGINALS && NETFLIX_ORIGINALS.length > 0 ? (
          <CarouselComponent data={NETFLIX_ORIGINALS} />
        ) : (
          <ContainerLoader height={210}>
            <Loader />
          </ContainerLoader>
        )}
        <Title>Continue Watching</Title>
        {CONTINUE_WATCHING && CONTINUE_WATCHING.length > 0 ? (
          <CardMovies navigation={navigation} data={CONTINUE_WATCHING} />
        ) : (
          <ContainerLoader height={191}>
            <Loader />
          </ContainerLoader>
        )}
        <Title>Explore by Genres</Title>
        {GENRES && GENRES.length > 0 ? (
          <GenresComponent navigation={navigation} data={GENRES} />
        ) : (
          <ContainerLoader height={60}>
            <Loader />
          </ContainerLoader>
        )}
        <Row>
          <Title>Trending</Title>
          <ButtonView onPress={() => openCategory('Trending', TRENDING)}>
            <ButtonText>VIEW ALL</ButtonText>
          </ButtonView>
        </Row>
        {TRENDING && TRENDING.length > 0 ? (
          <TrendingComponent navigation={navigation} data={TRENDING} />
        ) : (
          <ContainerLoader height={108}>
            <Loader />
          </ContainerLoader>
        )}
        <Title>Top 3 Movies Watched in Brazil 🇧🇷</Title>
        {BRAZIL_MOVIES && BRAZIL_MOVIES.length > 0 ? (
          <CardMovies navigation={navigation} data={BRAZIL_MOVIES} />
        ) : (
          <ContainerLoader height={191}>
            <Loader />
          </ContainerLoader>
        )}
        <Title>Top 3 Movies Watched in USA 🇺🇸</Title>
        {USA_MOVIES && USA_MOVIES.length > 0 ? (
          <CardMovies navigation={navigation} data={USA_MOVIES} />
        ) : (
          <ContainerLoader height={191}>
            <Loader />
          </ContainerLoader>
        )}
      </Body>
    </Container>
  );
}
