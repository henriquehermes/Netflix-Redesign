/**
 * @format
 */

import 'react-native';
import postLogin from '../../src/services/LoginServices';

const fakeEmailWrong = 'teste@email.com';
const fakeEmail = 'marcela@email.com';
const fakeEmail2 = 'ian@email.com';
const fakePassword = '123';

test('Failed login', () => {
  return postLogin(fakeEmailWrong, fakePassword).then(res => {
    expect(res).toBeFalsy();
  });
});

test('Success login', () => {
  return postLogin(fakeEmail, fakePassword).then(res => {
    expect(res).toBeTruthy();
  });
});

test('Success login 2', () => {
  return postLogin(fakeEmail2, fakePassword).then(res => {
    expect(res).toBeTruthy();
  });
});
