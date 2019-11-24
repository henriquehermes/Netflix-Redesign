import React from 'react';

import Card from '~/components/Card';
import { Container, Header, Title, ArrowLeft } from './CategoryStyles';

export default function CategoryComponent({ navigation, detailCategory }) {
  return (
    <Container>
      <Header>
        <ArrowLeft onPress={() => navigation.goBack()} />
        <Title>{detailCategory.typeCategory}</Title>
      </Header>
      <Card data={detailCategory.data} navigation={navigation} />
    </Container>
  );
}
