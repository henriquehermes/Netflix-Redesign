/**
 * @format
 */

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';

import MainComponent from '../../src/pages/Main/MainComponent';

const fakeNavigation = jest.fn();
const fakeLogoff = jest.fn();

const fakeData = [];
const store = global.mockStore({
  movie: {
    detail: {},
  },
});

it('renders correctly MainComponent', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <MainComponent
          NETFLIX_ORIGINALS={fakeData}
          TRENDING={fakeData}
          CONTINUE_WATCHING={fakeData}
          BRAZIL_MOVIES={fakeData}
          USA_MOVIES={fakeData}
          navigation={fakeNavigation}
          logoff={fakeLogoff}
        />
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
