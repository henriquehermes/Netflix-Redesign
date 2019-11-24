/**
 * @format
 */

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';

import MainController from '../../src/pages/Main/MainController';

const fakeLoginInApp = jest.fn();
const store = global.mockStore({
  movie: {
    detail: {},
  },
});

it('renders correctly', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <MainController navigation={fakeLoginInApp} />
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
