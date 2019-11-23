import React from 'react';

import { FlatList } from 'react-native-gesture-handler';
import { Slide } from './styles';
import Button from '~/components/Button';

const DATA = [
  {
    name: 'Action',
  },
  {
    name: 'Adventure',
  },
  {
    name: 'Comedy',
  },
  {
    name: 'Comedy',
  },
];

export default function GenresComponent({ navigation }) {
  return (
    <FlatList
      data={DATA}
      renderItem={({ item, index }) => (
        <Slide firstIndex={index === 0} lastIndex={index === 3} key={index}>
          <Button
            label={item.name}
            onPress={() => navigation.navigate('Movie')}
          />
        </Slide>
      )}
      horizontal
      showsHorizontalScrollIndicator={false}
      overScrollMode="never"
    />
  );
}
