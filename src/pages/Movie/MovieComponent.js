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
  ImageBlur,
  ListRow,
  CellTitle,
  CellValue,
  RantingCell,
} from './MovieStyles';

import Genre from './components/Genre';
import Button from '~/components/Button';

export default function MovieComponent({ navigation, detailMovie }) {
  const [videoPlayer, setVideoPlayer] = useState(false);

  return (
    <Container>
      <Header>
        <ArrowLeft onPress={() => navigation.goBack()} />
      </Header>
      <Body overScrollMode="never">
        <MovieImage
          source={{
            uri: detailMovie.Poster,
          }}
        />
        <ImageBlur
          blurRadius={10}
          source={{
            uri: detailMovie.Poster,
          }}
        />
        <Description>
          <MovieType>
            {detailMovie.Type} - {detailMovie.Genre[0]}
          </MovieType>
          <MovieTitle>{detailMovie.Title}</MovieTitle>
          <Row>
            <MovieMatch>IMDB {detailMovie.imdbRating}</MovieMatch>
            <MovieYear>{detailMovie.Year}</MovieYear>
            <MovieAge>{detailMovie.Rated}</MovieAge>
          </Row>
        </Description>
        <Genre data={detailMovie.Genre} />
        <RowButtons>
          <Button
            label="Watch Trailer"
            image
            imageName="play"
            style={{ width: 150 }}
            onPress={() => setVideoPlayer(detailMovie.trailerURL)}
          />
        </RowButtons>
        <About>
          <Title>About</Title>
          <TitleDescription>{detailMovie.Plot}</TitleDescription>
          <Title>Actors</Title>
          <TitleDescription>{detailMovie.Actors}</TitleDescription>
          <Title>Director</Title>
          <TitleDescription>{detailMovie.Director}</TitleDescription>
          <Title>Writer</Title>
          <TitleDescription>{detailMovie.Writer}</TitleDescription>
          <Title>IMDB Rating</Title>
          <TitleDescription>{detailMovie.imdbRating}</TitleDescription>
          <Title>IMDB Votes</Title>
          <TitleDescription>{detailMovie.imdbVotes}</TitleDescription>
          {!!detailMovie.Production && (
            <>
              <Title>Production</Title>
              <TitleDescription>{detailMovie.Production}</TitleDescription>
            </>
          )}
          {!!detailMovie.Ratings && detailMovie.Ratings.length > 0 && (
            <>
              <Title>Rantings</Title>
              <ListRow>
                {detailMovie.Ratings.map(item => (
                  <RantingCell>
                    <CellTitle>{item.Source}</CellTitle>
                    <CellValue>{item.Value}</CellValue>
                  </RantingCell>
                ))}
              </ListRow>
            </>
          )}
        </About>
      </Body>
      {videoPlayer && (
        <YouTube
          apiKey="AIzaSyC57p-gNzW9D7fTcV16zwwyshuoJFBxtGE"
          videoId={videoPlayer}
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
