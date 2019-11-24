/**
 * @format
 */

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';

import Card from '../src/components/Card';

const store = global.mockStore({
  movie: {
    detail: {},
  },
});

const fakeData = {};
const fakeNavigation = jest.fn();

it('renders correctly', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <Card data={fakeData} navigation={fakeNavigation} />
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
