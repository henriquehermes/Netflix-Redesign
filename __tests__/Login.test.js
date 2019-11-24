/**
 * @format
 */

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import { fireEvent, render } from 'react-native-testing-library';

import LoginComponent from '../src/pages/Login/LoginComponent';

const fakeIsLoading = false;
const fakeLoginInApp = jest.fn();

it('renders correctly', () => {
  const tree = renderer
    .create(
      <LoginComponent isLoading={fakeIsLoading} navigation={fakeLoginInApp} />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('change email', () => {
  const { getByTestId } = render(
    <LoginComponent isLoading={fakeIsLoading} navigation={fakeLoginInApp} />,
  );

  const input = getByTestId('testEmail');

  const testText = 'teste@email.com';
  fireEvent(input, 'onChangeText', testText);
});

it('change password', () => {
  const { getByTestId } = render(
    <LoginComponent isLoading={fakeIsLoading} navigation={fakeLoginInApp} />,
  );

  const input = getByTestId('testPassword');

  const testText = '321';
  fireEvent(input, 'onChangeText', testText);
});
