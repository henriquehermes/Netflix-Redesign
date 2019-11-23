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

const renderItem = ({ item, index }) => {
  return (
    <Slide firstIndex={index === 0} lastIndex={index === 3}>
      <Button label={item.name} />
    </Slide>
  );
};

export default function GenresComponent() {
  return (
    <FlatList
      data={DATA}
      renderItem={renderItem}
      horizontal
      showsHorizontalScrollIndicator={false}
      overScrollMode="never"
    />
  );
}
