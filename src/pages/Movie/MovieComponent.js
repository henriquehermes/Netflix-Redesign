import React, { useState } from 'react';
import YouTube from 'react-native-youtube';

import {
  Container,
  Header,
  ArrowLeft,
  Body,
  MovieImage,
  Description,
  MovieType,
  MovieYear,
  MovieTitle,
  MovieAge,
  MovieMatch,
  Row,
  RowButtons,
  About,
  Title,
  TitleDescription,
  LikeButton,
} from './MovieStyles';

import Genre from './components/Genre';
import Button from '~/components/Button';

export default function MovieComponent({ navigation }) {
  const [videoPlayer, setVideoPlayer] = useState(false);

  return (
    <Container>
      <Header>
        <ArrowLeft onPress={() => navigation.navigate('Main')} />
      </Header>
      <Body overScrollMode="never">
        <MovieImage
          source={{
            uri:
              'https://www.calltheone.com/storage/blog/2/2018/09/19/the-defenders_orig.jpeg',
          }}
        />
        <Description>
          <MovieType>Movie - Action</MovieType>
          <MovieTitle>Marvels The Defenders</MovieTitle>
          <Row>
            <MovieMatch>98% Match</MovieMatch>
            <MovieYear>2017</MovieYear>
            <MovieAge>16+</MovieAge>
          </Row>
        </Description>
        <Genre />
        <RowButtons>
          <Button
            label="Watch Trailer"
            image
            imageName="play"
            style={{ width: 150 }}
            onPress={() => setVideoPlayer(true)}
          />
          <LikeButton />
        </RowButtons>
        <About>
          <Title>About</Title>
          <TitleDescription>
            Los Angeles police officer Brian OConner must decide where his
            loyalty really lies when he becomes enamored with the street racing
            world he has been sent undercover to destroy.
          </TitleDescription>
          <Title>Actors</Title>
          <TitleDescription>
            Paul Walker, Vin Diesel, Michelle Rodriguez, Jordana Brewster
          </TitleDescription>
          <Title>Director</Title>
          <TitleDescription>Rob Cohen</TitleDescription>
          <Title>Writer</Title>
          <TitleDescription>
            Ken Li (magazine article Racer X), Gary Scott Thompson (screen
            story), Gary Scott Thompson (screenplay), Erik Bergquist
            (screenplay), David Ayer (screenplay)
          </TitleDescription>
        </About>
      </Body>
      {videoPlayer && (
        <YouTube
          apiKey="AIzaSyC57p-gNzW9D7fTcV16zwwyshuoJFBxtGE"
          videoId="ndl1W4ltcmg"
          play
          fullscreen
          style={{ alignSelf: 'stretch', height: '100%' }}
          onChangeFullscreen={e => {
            if (!e.isFullscreen) setVideoPlayer(false);
          }}
        />
      )}
    </Container>
  );
}
