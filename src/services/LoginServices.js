import AsyncStorage from '@react-native-community/async-storage';

import USERS from '~/config/users.json';
import UserModel from '../models/UserModel';

export default async function postLogin(email, password) {
  await new Promise(resolve => setTimeout(resolve, 1000)); // Fake Delay API

  if (email === 'marcela@email.com' && password === '123') {
    const responseUser = new UserModel(USERS.list[0]);

    AsyncStorage.setItem('User', JSON.stringify(responseUser));
    return true;
  }
  if (email === 'ian@email.com' && password === '123') {
    const responseUser = new UserModel(USERS.list[1]);

    AsyncStorage.setItem('User', JSON.stringify(responseUser));
    return true;
  }
  return false;
}
